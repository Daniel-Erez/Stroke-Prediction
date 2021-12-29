import { Component, OnInit } from '@angular/core';
import { ClassifyService } from '../classify.service';

@Component({
  selector: 'app-no-service-msg',
  template: `
    <article class="message is-warning">
      <div class="message-header">
        <p>Info</p>
        <!-- <button
          class="delete"
          aria-label="delete"
          onclick=""
        ></button> -->
      </div>
      <div class="message-body">The service is currently close</div>
    </article>
  `,
  styles: [
  ]
})
export class NoServiceMSGComponent implements OnInit {

  constructor(private Classify: ClassifyService) { }

  ngOnInit(): void {
  }
}
