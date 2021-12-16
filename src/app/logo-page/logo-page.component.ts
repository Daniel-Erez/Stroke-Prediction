import { ClassifyService } from "./../classify.service";
import { Component, OnInit } from "@angular/core";
import { doc, getDoc } from "firebase/firestore";
import { sleep } from "src/assets/funcs";
import { fire } from "src/environments/environment";

@Component({
  selector: "app-logo-page",
  template: `
    <!------------------------------start html code------------------------------>
    <p>It's just the logo, nothing particularly interesting</p>
    <div *ngIf="userLogin()">
      <strong
        >And now you are logged in<span (click)="oneMore($event)"
          >!</span
        ></strong
      ><br />
    </div>
    <!------------------------------end html code------------------------------>
  `,
  styles: [],
})
export class LogoPageComponent implements OnInit {
  constructor(private Classify: ClassifyService) {}

  ngOnInit(): void {}
  userLogin(): boolean {
    var loged = window.sessionStorage.getItem("log");
    return loged == "true";
  }
  oneMore(event: any): void {
    var el = event.target as Element;
    var massege = document.createElement("strong");
    massege.innerHTML = "Did you just click on the exclamation mark?";
    var br = document.createElement("br");
    el.parentElement?.parentElement?.appendChild(br);
    el.parentElement?.parentElement?.appendChild(massege);
    this.clasif()
  }
  async clasif(): Promise<void> {
    if (window.sessionStorage.getItem("log") == "false") {
      console.log("log in first");
      return;
    }
    while (fire.auth.currentUser == null) {
      await sleep(200);
    }
    var user = fire.auth.currentUser;
    const docRef = doc(fire.db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      var tests = docSnap.data()["tests"];
      var arr=[];
      for (let x in tests) {
        arr.push(tests[x]);
      }
      this.Classify.classifyMany(arr).subscribe((res) => {
        let output="all results:\n";
        for (let i in res){
          output+="\t"+"\t"+"\ttest "+i+" : "+res[i]+"%\n";
        }
        console.log(output);
      });
    }
  }
}
