import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sapir",
  template: `
    <!------------------------------start html code------------------------------>
    <div class="container has-text-centered">
      <img
        src="./assets/img/Female anonymus.png"
        alt="Sapir"
        style="height:125px; width:125px;"
      /><br /><br /><br />
      <span class="has-text-black">Sapir Shimon</span>
      <br /><br />
      <span class="has-text-info">Product manager</span>
      <br /><br />
      <span class="has-text-black">Sapir was born in 1995. She was born and lives in Jerusalem. Today she is studying her fourth year in Industrial Engineering and Management at the Academic College of Engineering - Azrieli</span>
    </div>
    <!------------------------------end html code------------------------------>
  `,
  styles: [],
})
export class SapirComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
