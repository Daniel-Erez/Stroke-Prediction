import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lisa",
  template: `
    <!------------------------------start html code------------------------------>
    <div class="container has-text-centered">
      <img
        src="./assets/img/Female anonymus.png"
        alt="Lisa"
        style="height:125px; width:125px;"
      /><br /><br /><br />
      <span class="has-text-black">Lisa Marx</span>
      <br /><br />
      <span class="has-text-info">CEO</span>
      <br /><br />
      <span class="has-text-black">Lisa was born in 1996. She was born in Paris and lives in Jerusalem. Today she is studying her fourth year in Industrial Engineering and Management at the Academic College of Engineering - Azrieli</span>
    </div>
    <!------------------------------end html code------------------------------>
  `,
  styles: [],
})
export class LisaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
