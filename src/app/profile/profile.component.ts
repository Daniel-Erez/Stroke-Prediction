import { converter, getElementWithID, locationValidate, sleep } from "src/assets/funcs";
import { fire } from "./../../environments/environment";
import { Component, OnInit } from "@angular/core";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Router } from "@angular/router";
import { ClassifyService } from "../classify.service";

@Component({
  selector: "app-profile",
  template: `
    <!------------------------------start html code------------------------------>
    <div>
      <progress id="loader" class="progress is-info" max="100"></progress>

      <div class="title"><span id="uName"></span></div>

      <div id="results-wrapper" role="results" class="columns is-multiline">
        <app-no-tests class="column" id="noTests"></app-no-tests>
        <!-- example of an open result
        <div class="column is-one-third">
          <div id="0" class="box is-clickable has-background-info-light" (click)="openTest($event)">
            <span class="is-size-3 has-text-weight-semibold" style="pointer-events: none;">test 0</span>
            <div id="tOpen" class="box has-background-link-light" style="text-align: center; pointer-events: none;"><strong>Parameters:</strong><br><span>gender: Male</span><br><span>age: 50</span><br><span>bmi: 200000</span><br><span>ever_married: Yes</span><br><span>work_type: Self-employed</span><br><span>Residence_type: Urban</span><br><span>smoking_status: smokes</span><br><span>hypertension: 0</span><br><span>heart_disease: 1</span><br><span>avg_glucose_level: Unknown</span><br></div>
          </div>
        </div>
        -->
      </div>
    </div>
    <!------------------------------end html code------------------------------>
  `,
  styles: [
    `
      /*------------------------------start css code------------------------------*/
      #noTests {
        display: none;
      }
      /*------------------------------end css code------------------------------*/
    `,
  ],
})
export class ProfileComponent implements OnInit {
  constructor(private router: Router, private Classify: ClassifyService) {}

  ngOnInit(): void {
    locationValidate();
    this.loadProfile();
  }

  async loadProfile(): Promise<void> {
    while (fire.auth.currentUser == null) {
      await sleep(200);
    }
    var user = fire.auth.currentUser;
    const docRef = doc(fire.db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      var name = docSnap.data()["Name"];
      var el = document.getElementById("uName");
      if (el != null) {
        el.innerHTML = "hello " + name + " ✌";
      }
    } else {
      // doc.data() will be undefined in this case
      console.log("No name found!");
    }
    this.insertTests();
    getElementWithID("loader").remove();
  }

  async openTest(event: any): Promise<void> {
    let element = event.target as Element;
    let elementId: string = element.id;
    var openDiv = getElementWithID("tOpen");
    if (openDiv != null) {
      let close = openDiv.parentElement == element;
      openDiv.remove();
      if (close) return;
    }
    var divToCreate = document.createElement("div");
    divToCreate.setAttribute("id", "tOpen");
    divToCreate.setAttribute("class", "box has-background-link-light");
    divToCreate.style.textAlign = "center";
    divToCreate.style.pointerEvents = "none";
    getElementWithID(elementId).appendChild(divToCreate);

    while (fire.auth.currentUser == null) {
      await sleep(200);
    }
    var user = fire.auth.currentUser;
    const docRef = doc(fire.db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      var tests = docSnap.data()["tests"];
      var curTest = tests[Number(elementId)];
      var results = docSnap.data()["results"];
      var curRes = results[Number(elementId)];
      var arrCurTest = [];
      for (let key in curTest) {
        let value = curTest[key];
        let units: string;
        switch (key) {
          case "age":
            units = " Years old";
            break;
          case "bmi":
            value = String(parseFloat(value.toFixed(2)));
            units = " kg/m²";
            break;
          case "avg_glucose_level":
            if (value != 0) {
              value = String(parseFloat(value.toFixed(2)));
              units = " mg/dL";
            } else {
              value = "Unknown";
              units = "";
            }
            break;
          default:
            units = "";
        }
        arrCurTest.push(key + ": " + value + units);
      }
      if (curRes == "NaN") {
        curRes = await this.tryToClassify(elementId);
        await sleep(300);
      }
      arrCurTest.push("probability" + ": " + curRes + "%");
      arrCurTest.sort(function (a, b: string): number {
        let order = [
          "gender",
          "age",
          "bmi",
          "ever_married",
          "work_type",
          "Residence_type",
          "smoking_status",
          "hypertension",
          "heart_disease",
          "avg_glucose_level",
          "probability",
        ];
        return (
          order.indexOf(a.slice(0, a.indexOf(":"))) -
          order.indexOf(b.slice(0, b.indexOf(":")))
        );
      });
      openDiv = getElementWithID("tOpen");
      var paramTitle = document.createElement("strong");
      paramTitle.innerHTML = "Parameters:";
      openDiv.appendChild(paramTitle);
      for (let key in arrCurTest) {
        openDiv.appendChild(document.createElement("br"));
        let value = arrCurTest[key];
        let type=value.slice(0, value.indexOf(":"));
        
        let isUnits=true;
        
        if (value.indexOf(" ",value.indexOf(":")+2)==-1)  isUnits=false;
        let units=value.slice(value.indexOf(" ",value.indexOf(":")+2));
        let code=value.slice(value.indexOf(":")+2,value.indexOf(" ",value.indexOf(":")+2));
        if (!isUnits)  {
          units="";
          code=value.slice(value.indexOf(":")+2)
        }
        if (units==code) units="";
        let paramRow;
        if (type == "probability")
          paramRow = document.createElement("strong");
        else paramRow = document.createElement("span");
        paramRow.innerHTML = type+": "+converter(code,type)+units;
        openDiv.appendChild(paramRow);
      }
    }
  }

  ttest(event: any): void {}

  async tryToClassify(elementId: string): Promise<string> {
    var user = fire.auth.currentUser;
    if (user != null) {
      const docRef = doc(fire.db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        var tests = docSnap.data()["tests"];
        var curTest = tests[Number(elementId)];
        var results = docSnap.data()["results"];
        this.Classify.classifyOne(curTest).subscribe(async (res: string) => {
          results[Number(elementId)] = res;
          await updateDoc(docRef, {
            results,
          });
          return res;
        });
        return "NaN";
      } else {
        // docSnap.data() will be undefined in this case
        console.log("something gone wrong :(");
        return "NaN";
      }
    } else {
      console.log("something gone wrong :(");
      return "NaN";
    }
  }

  async insertTests(): Promise<void> {
    while (fire.auth.currentUser == null) {
      await sleep(200);
    }
    var user = fire.auth.currentUser;
    var wrapper = getElementWithID("results-wrapper");
    const docRef = doc(fire.db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      var tests = docSnap.data()["tests"];
      if (Object.keys(tests).length == 0) {
        getElementWithID("noTests").style.display = "block";
      } else {
        for (let i = 0; i < Object.keys(tests).length; i++) {
          // <div class="column is-one-third">
          //   <div class="box is-clickable has-background-info-light" id="key[i]" (click)="openTest($event)">
          //     <span class="is-size-3 has-text-weight-semibold" style="pointer-events: none;">Test key[i]</span>
          //   </div>
          // </div>

          var node1 = document.createElement("div");
          node1.setAttribute("class", "column is-one-third");
          var node2 = document.createElement("div");
          node2.setAttribute(
            "class",
            "box is-clickable has-background-info-light"
          );
          node2.setAttribute("id", Object.keys(tests)[i]);
          node2.addEventListener("click", this.openTest.bind(this));
          var node3 = document.createElement("span");
          node3.setAttribute("class", "is-size-3 has-text-weight-semibold");
          node3.style.pointerEvents = "none";
          node3.innerHTML = "Test " + Object.keys(tests)[i];
          wrapper.appendChild(node1).appendChild(node2).appendChild(node3);
        }
      }
    }
  }
}
