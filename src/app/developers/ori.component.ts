import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ori",
  template: `
    <!------------------------------start html code------------------------------>
    <div class="container has-text-centered">
      <img
        src="./assets/img/Male anonymus.png"
        alt="Ori"
        style="height:125px; width:125px;"
      /><br /><br /><br />
      <span class="has-text-black">Ori Schaefer</span>
      <br /><br />
      <span class="has-text-info">Product manager</span>
      <br /><br />
      <span class="has-text-black">Ori was born in 1994. He was born and lives in Jerusalem. Today he is studying his fourth year in Industrial Engineering and Management at the Academic College of Engineering - Azrieli</span>
    </div>
    <!------------------------------end html code------------------------------>
  `,
  styles: [],
})
export class OriComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
