import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <!------------------------------start html code------------------------------>
    <div class="navbar is-dark">
      <div class="navbar-brand">
        <a class="navbar-item" routerLink="/logo">
          <img src="./assets/img/testing logo.png" width="112" height="28" alt="logo">
        </a>
        <a class="navbar-item" routerLink="/login">login</a>
        <a class="navbar-item" routerLink="">home</a>
        <a class="navbar-item">temp</a>
      </div>
    </div>
    <br/>
<!------------------------------end html code------------------------------>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
