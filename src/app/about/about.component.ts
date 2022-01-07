import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  template: `
    <!------------------------------start html code------------------------------>
    <body>
      <h1>About Mechanical Monsters</h1>
      <br /><br /><br /><br />
      <h2>
        Mechanical Monsters is a website that help you prevent from stroke
        attack, we developed it in 2021. <br />
        We are using Machine Learning [...] <br />
        When you share with us the results that you got from the doctor you help
        us to improve our algorithm and so<br />
        you helping us to help <strong> you </strong>
      </h2>
      <br /><br /><br /><br />
      <h3>How does it work?</h3><br />
      <div class="container has-text-centered">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/EV74nBtivsw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      
      <br /><br /><br /><br />
      <h3>About Us</h3><br />
      <div class="columns">
        <div class="column">
          <app-daniel></app-daniel>
        </div>
        <div class="column">
          <app-lisa></app-lisa>
        </div>
        <div class="column">
          <app-maayan></app-maayan>
        </div>
        <div class="column">
          <app-ori></app-ori>
        </div>
        <div class="column">
          <app-sapir></app-sapir>
        </div>
      </div>
    </body>
    <!------------------------------end html code------------------------------>
  `,
  styles: [
    `
      /* ------------------------------start css code------------------------------ */
      h1 {
        text-align: center;
        font-size: 30px;
        text-decoration: underline solid royalblue 4px;
      }
      h2 {
        text-align: center;
        font-size: 20px;
      }
      h3 {
        text-align: center;
        font-size: 20px;
        text-decoration: underline solid royalblue;
      }
      /* ------------------------------end css code------------------------------ */
    `,
  ],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
