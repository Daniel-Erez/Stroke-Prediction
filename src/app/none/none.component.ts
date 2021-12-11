import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-none',
  template: `
  <!------------------------------start html code------------------------------>
    <p>
      none works!
    </p>
    <div *ngIf="userLogin()">hello<strong>hello<span (click)="oneMore($event)">!</span></strong></div>
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
  oneMore(event: any):void{
    var el=(event.target as Element);
    var hello=document.createElement("strong");
    hello.innerHTML="hello";
    var br=document.createElement("br");
    el.parentElement?.appendChild(br);
    el.parentElement?.appendChild(hello);
  }
}
