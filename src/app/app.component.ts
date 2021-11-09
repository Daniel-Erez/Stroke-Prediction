import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- header -->
  <app-header ></app-header>

  
  <!-- content -->
  <div id="main-div" class="container"><router-outlet></router-outlet></div>


  <!-- footer -->
  <app-footer></app-footer>

  
  <!-- router-navigators [to use: document.getElementById("go-home").click();] -->
  <a id="go-home" routerLink=""></a>
  <a id="go-login" routerLink="/login"></a>
  <a id="go-register" routerLink="/register"></a>
  <a id="go-logo" routerLink="/logo"></a>
  `,
  styles: []
})
export class AppComponent {
  title = 'strkpre';
}
