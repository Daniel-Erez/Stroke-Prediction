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
          onchange="loginemailinputStyle()"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span id="login_email_icon_triangle" class="icon is-small is-right">
          <i class="fas fa-exclamation-triangle"></i>
        </span>
        <span id="login_email_icon_check" class="icon is-small is-right" style="display:none;">
          <i class="fas fa-check"></i>
        </span>
      </div>
      <p id="login_email_help" class="help is-danger" style="display:none;">invalid email</p>
    </div>

    <div class="field">
    <label class="label">Password</label>
      <p class="control has-icons-left">
        <input class="input" type="password" placeholder="Password" />
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
