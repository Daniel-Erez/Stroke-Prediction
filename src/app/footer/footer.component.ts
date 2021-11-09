import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <!------------------------------start html code------------------------------>
  <br/>  
  <footer class="footer has-background-light">
      <div class="container content has-text-centered ">
        <p>Made with 💕 by Mechanical Monsters</p>
      </div>
    </footer>
<!------------------------------start html code------------------------------>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
