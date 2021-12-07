import { getElementWithID, locationValidate, sleep } from "src/assets/funcs";
import { fire } from "./../../environments/environment";
import { Component, OnInit } from "@angular/core";
import { doc, getDoc } from "firebase/firestore";

@Component({
  selector: "app-profile",
  template: `
    <!------------------------------start html code------------------------------>
    <div>
    <progress id="loader" class="progress is-info" max="100"></progress>
    
      <div class="title"><span id="uName"></span></div>
      <div id="results-wrapper" role="results" class="columns is-multiline">
        <!-- example of one result
          <div class="column is-one-third">
          <div id="0" class="box is-clickable" (click)="ttest($event)">
            <span name="testName" style="pointer-events: none;" class="is-size-3 has-text-weight-semibold">test 0</span>
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
  constructor() {}

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

  ttest(event: any): void {
    // var i = 0;
    // var a = getElementWithName("testName", i);
    // while (a != null) {
    //   console.log(a);
    //   i++;
    //   a = getElementWithName("testName", i);
    // }
    let elementId: string = (event.target as Element).id;
    console.log(elementId);
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
      for (let i = 0; i < Object.keys(tests).length; i++) {
        var node = document.createElement("div");
        node.setAttribute("class", "column is-one-third");
        var node2 = document.createElement("div");
        node2.setAttribute("class", "box is-clickable has-background-link-light");
        node2.setAttribute("id", Object.keys(tests)[i]);
        node2.addEventListener("click", this.ttest.bind(this));
        var node3 = document.createElement("span");
        node3.setAttribute("class", "is-size-3 has-text-weight-semibold");
        node3.setAttribute("name", "testName");
        node3.style.pointerEvents="none";
        node3.innerHTML = "Test " + Object.keys(tests)[i];
        node2.appendChild(node3);
        node.appendChild(node2);
        wrapper.appendChild(node);
      }
    }
  }
}
