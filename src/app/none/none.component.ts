import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-none',
  template: `
    <p>
      none works!
    </p>
  `,
  styles: [
  ]
})
export class NoneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
