import { getElementWithID, locationValidate, sleep } from "src/assets/funcs";
import { fire } from "./../../environments/environment";
import { Component, OnInit } from "@angular/core";
import { doc, getDoc } from "firebase/firestore";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  template: `
    <!------------------------------start html code------------------------------>
    <div>
      <progress id="loader" class="progress is-info" max="100"></progress>

      <div class="title"><span id="uName"></span></div>
      <div id="results-wrapper" role="results" class="columns is-multiline">
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
  styles: [``],
})
export class ProfileComponent implements OnInit {
  constructor(private router: Router) {}

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
    let elementId: string = (event.target as Element).id;
    var openDiv = getElementWithID("tOpen");
    if (openDiv != null) {
      openDiv.remove();
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
      var arrCurTest = [];
      for (let key in curTest) {
        if (key != "id") {
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
              try {
                value = String(parseFloat(value.toFixed(2)));
                units = " mg/dL";
              } catch {
                value = "Unknown";
                units = "";
              }
              break;
            default:
              units = "";
          }
          arrCurTest.push(key + ": " + value + units);
        }
      }
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
        let paramRow = document.createElement("span");
        paramRow.innerHTML = value;
        openDiv.appendChild(paramRow);
      }
    }
  }

  ttest(event: any): void {}

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
        // <div class="column">
        //   <article class="message is-info">
        //     <div class="message-header">
        //       <p>There are no tests</p>
        //       <button class="delete" aria-label="delete" routerLink=""></button>
        //     </div>
        //     <div class="message-body">
        //       Close this message to start your first test :)
        //     </div>
        //   </article>
        // </div>

        var nodeA = document.createElement("div");
        nodeA.setAttribute("class", "column");
        var nodeB = document.createElement("article");
        nodeB.setAttribute("class", "message is-info");
        var nodeC = document.createElement("div");
        nodeC.setAttribute("class", "message-header");
        var nodeD = document.createElement("p");
        nodeD.innerHTML = "There are no tests";
        nodeC.appendChild(nodeD);
        var nodeE = document.createElement("button");
        nodeE.setAttribute("class", "delete");
        nodeE.setAttribute("aria-label", "delete");
        nodeE.addEventListener("click", () => {
          this.router.navigateByUrl("/test");
        });
        nodeB.appendChild(nodeC).appendChild(nodeE);
        var nodeF = document.createElement("div");
        nodeF.setAttribute("class", "message-body");
        nodeF.innerHTML = "Close this message to start your first test :)";
        wrapper.appendChild(nodeA).appendChild(nodeB).appendChild(nodeF);
      } else {
        for (let i = 0; i < Object.keys(tests).length; i++) {
          // <div class="column is-one-third">
          //   <div class="box is-clickable has-background-info-light" id="i">
          //     <span class="is-size-3 has-text-weight-semibold" style="pointer-events: none;">Test 1</span>
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
