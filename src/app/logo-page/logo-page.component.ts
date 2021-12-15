import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-page',
  template: `
    <!------------------------------start html code------------------------------>
    <p>
      It's just the logo, nothing particularly interesting
    </p>
    <div *ngIf="userLogin()"><strong>And now you are logged in<span (click)="oneMore($event)">!</span></strong><br></div>
<!------------------------------end html code------------------------------>
  `,
  styles: [
  ]
})
export class LogoPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userLogin(): boolean {
    var loged = window.sessionStorage.getItem("log");
    return loged=="true";
  }
  oneMore(event: any):void{
    var el=(event.target as Element);
    var massege=document.createElement("strong");
    massege.innerHTML="Did you just click on the exclamation mark?";
    var br=document.createElement("br");
    el.parentElement?.parentElement?.appendChild(br);
    el.parentElement?.parentElement?.appendChild(massege);
  }
}
