import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-profile",
  template: `
    <!------------------------------start html code------------------------------>
    <div>
      <h2 id="uName"></h2>
    </div>
    <!------------------------------end html code------------------------------>
  `,
  styles: [],
})
export class ProfileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
