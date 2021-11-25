import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <!------------------------------start html code------------------------------>
    <article class="message is-info">
  <div class="message-header">
    <p>Info</p>
    <button class="delete" aria-label="delete" onclick="window.alert('And how is that supposed to help?')"></button>
  </div>
  <div class="message-body">
    our home page is under development</div>
</article>
<!------------------------------end html code------------------------------>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
