import { locationValidate } from 'src/assets/funcs';
import { fire } from "./../../environments/environment";
import { Component, OnInit } from "@angular/core";
import { doc, getDoc } from "firebase/firestore";

@Component({
  selector: "app-profile",
  template: `
    <!------------------------------start html code------------------------------>
    <div>
      <h2 id="uName"></h2>
    </div>
    <!------------------------------end html code------------------------------>
  `,
  styles: [],
})
export class ProfileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    locationValidate();
  }
  ngAfterContentInit(): void {
    this.loadProfile();
  }
  async loadProfile(): Promise<void> {
    var user = fire.auth.currentUser;
    if (user != null) {
      const docRef = doc(fire.db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        var name = docSnap.data()["Name"];
        var el=document.getElementById("uName");
        if(el!=null){el.innerHTML = "hello " + name + " ✌";}
      } else {
        // doc.data() will be undefined in this case
        console.log("No name found!");
      }
    }
  }
}
