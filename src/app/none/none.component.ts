import { Component, OnInit } from '@angular/core';
import { fire } from 'src/environments/environment';

@Component({
  selector: 'app-none',
  template: `
  <!------------------------------start html code------------------------------>
    <p>
      none works!
    </p>
    <div *ngIf="userLogin()">hello<strong>hello</strong></div>
<!------------------------------end html code------------------------------>
  `,
  styles: [
  ]
})
export class NoneComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  userLogin(): boolean {
    var loged = window.sessionStorage.getItem("log");
    return loged=="true";
  }
}
