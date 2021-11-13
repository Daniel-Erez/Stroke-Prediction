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

  `,
  styles: []
})
export class AppComponent {
  title = 'strkpre';
}
