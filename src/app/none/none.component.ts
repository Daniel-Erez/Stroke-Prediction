import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-none',
  template: `
  <!------------------------------start html code------------------------------>
    <p>
      none works!
    </p>
  <!------------------------------end html code------------------------------>
  `,
  styles: []
})
export class NoneComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
}
