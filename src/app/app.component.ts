import { Component } from '@angular/core';
import { sleep } from 'src/assets/funcs';
import { fire } from 'src/environments/environment';

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
  async ngOnInit(): Promise<void> {
    if (fire.auth.currentUser == null) await sleep(1000);
    if (fire.auth.currentUser != null) window.sessionStorage.setItem("log","true");
    else if(window.sessionStorage.getItem("log")== "true"){window.sessionStorage.setItem("log","false");}
  }
}
