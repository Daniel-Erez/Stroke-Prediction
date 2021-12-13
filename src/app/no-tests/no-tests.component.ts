import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-no-tests",
  template: `
  <!------------------------------start html code------------------------------>
      <article class="message is-info">
        <div class="message-header">
          <p>There are no tests</p>
        </div>
        <div class="message-body">
          Let's start your first test
          <span class="icon">
            <i class="fas fa-arrow-right"></i>
          </span>
        </div>
      </article>
    <!------------------------------end html code------------------------------>
  `,
  styles: [],
})
export class NoTestsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
