import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-daniel",
  template: `
    <!------------------------------start html code------------------------------>
    <div class="container has-text-centered">
      <img
        src="./assets/img/Male anonymus.png"
        alt="Daniel"
        style="height:125px; width:125px;"
      /><br /><br /><br />
      <span class="has-text-black">Daniel Erez</span>
      <br /><br />
      <span class="has-text-info">Development director</span>
      <br /><br />
      <span class="has-text-black">Daniel was born in 2000. He was born and lives in Jerusalem. Today he is studying his forth year in Industrial Engineering and Management at the Academic College of Engineering - Azrieli</span>
    </div>
    <!------------------------------end html code------------------------------>
  `,
  styles: [],
})
export class DanielComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
