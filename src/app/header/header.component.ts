import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <!------------------------------start html code------------------------------>
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" routerLink="/logo">
          <img
            src="./assets/img/testing logo.png"
            width="112"
            height="28"
            alt="logo"
          />
        </a>
      </div>

      <div id="nav-for-unlogged-users" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" routerLink="">Home</a>
          <a class="navbar-item" onclick="temp()">temp</a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary" routerLink="/register">
                <strong>Sign up</strong>
              </a>
              <a class="button is-link" routerLink="/login"
                ><strong> Log in </strong></a
              >
            </div>
          </div>
        </div>
      </div>

      <div id="nav-for-logged-users" class="navbar-menu" style="display:none;">
        <div class="navbar-start">
          <a class="navbar-item" routerLink="">Home</a>
          <a class="navbar-item" routerLink="">Profile</a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a
                class="button is-danger is-light is-outlined"
                onclick="logout()"
              >
                <strong> Log out </strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <br />
    <!------------------------------end html code------------------------------>
  `,
  styles: [],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
