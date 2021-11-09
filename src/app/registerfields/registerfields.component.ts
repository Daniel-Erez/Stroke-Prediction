import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registerfields',
  template: `
    <!------------------------------start html code------------------------------>

    <div class="field">
      <label class="label">Name</label>
      <div class="control has-icons-left has-icons-right">
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        <input
          class="input is-success"
          type="text"
          placeholder="Text input"
          value="bulma"
        />
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </div>
      <p class="help is-success">This username is available</p>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input is-danger"
          type="email"
          placeholder="Email input"
          value="hello@"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-exclamation-triangle"></i>
        </span>
      </div>
      <p class="help is-danger">This email is invalid</p>
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
        <button class="button is-success">Login</button>
      </p>
    </div>

    <div class="field">
    <label class="label">Confirm Password</label>
      <p class="control has-icons-left">
        <input class="input" type="password" placeholder="Password" />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control">
        <button class="button is-success">Login</button>
      </p>
    </div>
    <!------------------------------end html code------------------------------>
  `,
  
  styles: [
  ]
})
export class RegisterfieldsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
