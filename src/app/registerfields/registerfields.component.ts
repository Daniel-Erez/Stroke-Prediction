import { Component, OnInit } from "@angular/core";
import { doc, setDoc } from "@firebase/firestore";
import { browserSessionPersistence, setPersistence,createUserWithEmailAndPassword } from "firebase/auth";
import { getElementWithID, inputStyle, locationValidate } from "src/assets/funcs";
import { fire } from "src/environments/environment";

@Component({
  selector: "app-registerfields",
  template: `
    <!------------------------------start html code------------------------------>

    <div class="field">
      <label class="label">Nickname</label>
      <div class="control has-icons-left has-icons-right">
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        <input
          id="register_nickname_input"
          class="input"
          type="text"
          placeholder="Nickname"
          (change)="styleChange('register', 'nickname')"
        />
        <span class="icon is-small is-right">
          <i id="register_nickname_icon" class="fas"></i>
        </span>
      </div>
      <p id="register_nickname_help" class="help is-danger"></p>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input
          id="register_email_input"
          class="input"
          type="email"
          placeholder="Email"
          (change)="styleChange('register', 'email')"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i id="register_email_icon" class="fas"></i>
        </span>
      </div>
      <p id="register_email_help" class="help is-danger"></p>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <div class="control has-icons-left has-icons-right">
        <input
          id="register_password_input"
          class="input"
          type="password"
          placeholder="Password"
          (change)="styleChange('register', 'password')"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
        <span class="icon is-small is-right">
          <i id="register_password_icon" class="fas"></i>
        </span>
      </div>
      <p id="register_password_help" class="help is-danger"></p>
    </div>

    <div class="field">
      <label class="label">Confirm Password</label>
      <div class="control has-icons-left has-icons-right">
        <input
          id="register_confirm_password_input"
          class="input"
          type="password"
          placeholder="Password"
          (change)="styleChange('register', 'confirm_password')"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
        <span class="icon is-small is-right">
          <i id="register_confirm_password_icon" class="fas"></i>
        </span>
      </div>
      <p id="register_confirm_password_help" class="help is-danger"></p>
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
  constructor() {}

  ngOnInit(): void {
    locationValidate();
  }
  onSubmit(){
    var userName = getElementWithID("register_nickname_input").value;
    var userEmail = getElementWithID("register_email_input").value;
    var userPass = getElementWithID("register_password_input").value;
    if (
      [
        inputStyle("register", "nickname"),
        inputStyle("register", "email"),
        inputStyle("register", "password"),
        inputStyle("register", "confirm_password"),
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
        locationValidate();
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
  styleChange(fieldPurpose: string, fieldRole: "email"|"password"|"nickname"|"confirm_password"):void{
    inputStyle(fieldPurpose,fieldRole);
  }
}