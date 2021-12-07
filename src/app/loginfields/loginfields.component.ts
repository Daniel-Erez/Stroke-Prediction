import { Component, OnInit } from "@angular/core";
import { fire } from "src/environments/environment";
import { setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";
import { locationValidate,inputStyle, getElementWithID } from "src/assets/funcs";
import { iif } from "rxjs";


@Component({
  selector: "app-loginfields",
  template: `
    <!------------------------------start html code------------------------------>

    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input
          id="login_email_input"
          class="input"
          type="email"
          placeholder="Email"
          (change)="styleChange('login', 'email')"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i id="login_email_icon" class="fas"></i>
        </span>
      </div>
      <p id="login_email_help" class="help is-danger"></p>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <p class="control has-icons-left">
        <input
          id="login_password_input"
          class="input"
          type="password"
          placeholder="Password"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control">
        <button
          id="login_button"
          class="button is-success"
          (click)="onSubmit()"
        >
          Login
        </button>
      </p>
    </div>
    <!------------------------------end html code------------------------------>
  `,
  styles: [],
})
export class LoginfieldsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    locationValidate();
  }
  onSubmit() {
    var userEmail = getElementWithID("login_email_input").value;
    var userPass = getElementWithID("login_password_input").value;

    setPersistence(fire.auth, browserSessionPersistence)
      .then(() => {
        signInWithEmailAndPassword(fire.auth, userEmail, userPass).then(() => {
          window.sessionStorage.setItem("log", "true");
          locationValidate();
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            window.alert("Error [" + errorCode + "]: " + errorMessage);
          });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert("Error [" + errorCode + "]: " + errorMessage);
      });
  }
  styleChange(fieldPurpose: string, fieldRole: "email"|"password"):void{
    inputStyle(fieldPurpose,fieldRole);
  }
}
