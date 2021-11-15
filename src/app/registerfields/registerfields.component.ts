import { Component, OnInit } from "@angular/core";

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
          onchange="inputStyle('register', 'nickname')"
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
          onchange="inputStyle('register', 'email')"
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
          onchange="inputStyle('register', 'password')"
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
          onchange="inputStyle('register', 'confirm_password')"
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
        <button class="button is-success" onclick="register()">Register</button>
      </div>
    </div>
    <!------------------------------end html code------------------------------>
  `,

  styles: [],
})
export class RegisterfieldsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
