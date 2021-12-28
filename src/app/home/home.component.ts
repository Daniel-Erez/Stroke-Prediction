import { getElementWithID } from "src/assets/funcs";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <!------------------------------start html code------------------------------>
    <!-- <article class="message is-warning">
      <div class="message-header">
        <p>Info</p>
        <button
          class="delete"
          aria-label="delete"
          onclick="window.alert('And how is that supposed to help?')"
        ></button>
      </div>
      <div class="message-body">our home page is under development</div>
    </article> -->
    <div id="container">
      <div id="background">
        <div id="first_circle">
          <a routerLink="test" class="has-text-weight-bold has-text-black"
            >Test yourself and help us help you</a
          >
        </div>
        <div id="second_circle">
          <a routerLink="about" class="has-text-weight-bold has-text-black"
            >How does it works?</a
          >
        </div>
      </div>
    </div>
    <!------------------------------end html code------------------------------>
  `,
  styles: [
    `
      #container {
        background: silver;
        display: block;
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: calc((618% / 960) * 100);
      }
      #background {
        position: absolute;
        width: 100%;
        height: 100%;
        background: url("src/assets/img/background.png") no-repeat;
        background-size: cover;
        font-size: 2.5vw;
      }
      #background div {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        border-radius: 50%;
        opacity: 0.75;
      }
      #first_circle {
        top: 20%;
        left: 10%;
        width: 19%;
        height: 0;
        padding: calc(19% / 2) 0;
      }
      #second_circle {
        top: 60%;
        left: 30%;
        width: 15%;
        height: 0;
        padding: calc(15% / 2) 0;
      }
      #container a {
        text-align: center;
      }
      @media screen and (min-width: 1600px) {
        #background {
          font-size: 30px;
        }
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
