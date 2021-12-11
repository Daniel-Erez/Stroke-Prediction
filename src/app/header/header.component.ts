import { AppComponent } from './../app.component';
import { Component, OnInit } from "@angular/core";
import { signOut } from "@firebase/auth";
import { locationValidate, temp } from "src/assets/funcs";
import { fire } from "src/environments/environment";

@Component({
  selector: "app-header",
  template: `
    <!------------------------------start html code------------------------------>
    <div id="head-nav">
      <nav
        id="main-nav"
        class="navbar is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a class="navbar-item brand-wrapper" routerLink="/logo">
            <img src="./assets/img/logo2.png" alt="logo" />
          </a>

          <a
            id="main-burger"
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="true"
            data-target="main-menu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="main-menu" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" routerLink="">Home</a>
            <a class="navbar-item" routerLink="test" *ngIf="userLogin()"
              >Test Yourself</a
            >
            <a class="navbar-item" routerLink="profile" *ngIf="userLogin()"
              >Profile</a
            >
            <a class="navbar-item" (click)="forchck()" *ngIf="!userLogin()"
              >temp</a
            >
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a
                  class="button is-primary"
                  routerLink="/register"
                  *ngIf="!userLogin()"
                >
                  <strong>Sign up</strong>
                </a>
                <a
                  class="button is-link"
                  routerLink="/login"
                  *ngIf="!userLogin()"
                >
                  <strong> Log in </strong></a
                >
                <a
                  class="button is-danger is-light is-outlined"
                  (click)="logout()"
                  *ngIf="userLogin()"
                >
                  <strong> Log out </strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <br />
    <!------------------------------end html code------------------------------>
  `,
  styles: [
    `
      .brand-wrapper {
        padding: 0;
        width: 200px;
      }
      .brand-wrapper img {
        width: 100%;
        height: 90%;
        max-height:unset;
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.fixBurgers();
  }

  userLogin(): boolean {
    var loged = window.sessionStorage.getItem("log");
    return loged == "true";
  }

  fixBurgers(): void {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target?.classList.toggle("is-active");
        });
      });
    }
  }

  logout(): void {
    signOut(fire.auth).then(async (log) => {
      window.sessionStorage.setItem("log", "false");
      locationValidate();
    });
  }

  forchck(): void {
    temp();
  }
}
