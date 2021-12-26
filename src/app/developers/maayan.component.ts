import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-maayan",
  template: `
    <!------------------------------start html code------------------------------>
    <div class="container has-text-centered">
      <img
        src="./assets/img/Female anonymus.png"
        alt="Maayan"
        style="height:125px; width:125px;"
      /><br /><br /><br />
      <span class="has-text-black">Maayan Cohen</span>
      <br /><br />
      <span class="has-text-info">Project manager</span>
      <br /><br />
      <span class="has-text-black">Maayan was born in 1995. She was born and lives in Jerusalem. Today she is studying her fourth year in Industrial Engineering and Management at the Academic College of Engineering - Azrieli</span>
    </div>
    <!------------------------------end html code------------------------------>
  `,
  styles: [],
})
export class MaayanComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
