import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-no-tests",
  template: `
    <!------------------------------start html code------------------------------>
    <article class="message is-info">
      <div class="message-header">
        <p>There are no tests</p>
      </div>
      <div class="message-body" routerLink="/test">
        <span> Let's start your first test</span>
        <span class="icon">
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </article>
    <!------------------------------end html code------------------------------>
  `,
  styles: [
    `
    /* -------------------------start css code------------------------- */
    .message-body span {
        cursor: pointer;
        pointer-events:all;
      }
      .message-body {
        pointer-events:none;
      }
    /* -------------------------end css code------------------------- */
    `,
  ],
})
export class NoTestsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
