import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-loginfields",
  template: `
    <!------------------------------start html code------------------------------>
    
    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input id="login_email_input"
          class="input"
          type="email"
          placeholder="Email"
          onchange="inputStyle('login', 'email')"
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
        <input id="login_password_input" class="input" type="password" placeholder="Password" />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control">
        <button id="login_button" class="button is-success" onclick="login()">Login</button>
      </p>
    </div>
    <!------------------------------end html code------------------------------>
  `,
  styles: [],
})
export class LoginfieldsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
