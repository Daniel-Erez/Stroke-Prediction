import { Component, OnInit } from "@angular/core";
import { doc, setDoc } from "@firebase/firestore";
import { browserSessionPersistence, setPersistence,createUserWithEmailAndPassword } from "firebase/auth";
import { getElementWithID, inputStyle, locationValidate } from "src/assets/funcs";
import { fire } from "src/environments/environment";
import { Router } from '@angular/router';

@Component({
  selector: "app-registerfields",
  template: `
    <!------------------------------start html code------------------------------>
    <div class="field">
      <label class="label">Nickname</label>
      <div class="control has-icons-left">
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        <input
          id="nickname_input"
          class="input"
          type="text"
          placeholder="Nickname"
          (change)="styleChange('nickname')"
        />
        <span class="icon is-small is-right">
          <i id="nickname_icon" class="fas"></i>
        </span>
      </div>
      <p id="nickname_help" class="help is-danger"></p>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left">
        <input
          id="email_input"
          class="input"
          type="email"
          placeholder="Email"
          (change)="styleChange('email')"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i id="email_icon" class="fas"></i>
        </span>
      </div>
      <p id="email_help" class="help is-danger"></p>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <div class="control has-icons-left">
        <input
          id="password_input"
          class="input"
          type="password"
          placeholder="Password"
          (change)="styleChange('password')"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
        <span class="icon is-small is-right">
          <i id="password_icon" class="fas"></i>
        </span>
      </div>
      <p id="password_help" class="help is-danger"></p>
    </div>

    <div class="field">
      <label class="label">Confirm Password</label>
      <div class="control has-icons-left">
        <input
          id="confirm_password_input"
          class="input"
          type="password"
          placeholder="Password"
          (change)="styleChange('confirm_password')"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
        <span class="icon is-small is-right">
          <i id="confirm_password_icon" class="fas"></i>
        </span>
      </div>
      <p id="confirm_password_help" class="help is-danger"></p>
    </div>

    <div class="field">
      <div class="control">
        <button class="button is-success" (click)="onSubmit()">Register</button>
      </div>
    </div>
    <!------------------------------end html code------------------------------>
  `,

  styles: [],
})
export class RegisterfieldsComponent implements OnInit {
  constructor(private router:Router) {}

  ngOnInit(): void {
    locationValidate();
  }
  onSubmit(){
    var userName = getElementWithID("register_nickname_input").value;
    var userEmail = getElementWithID("register_email_input").value;
    var userPass = getElementWithID("register_password_input").value;
    if (
      [
        inputStyle("nickname"),
        inputStyle("email"),
        inputStyle("password"),
        inputStyle("confirm_password"),
      ].every((x) => x)
    ){setPersistence(fire.auth, browserSessionPersistence)
      .then(() => {
      createUserWithEmailAndPassword(fire.auth, userEmail, userPass)
      .then(async (log) => {
        await setDoc(doc(fire.db, "users", log.user.uid), {
          Name: userName,
            tests: {},
        });
        window.sessionStorage.setItem("log", "true");
        this.router.navigateByUrl("/profile");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });})
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }else{
      window.alert("complete all fields!");
    }
  }
  styleChange(fieldRole: "email"|"password"|"nickname"|"confirm_password"):void{
    inputStyle(fieldRole);
  }
}