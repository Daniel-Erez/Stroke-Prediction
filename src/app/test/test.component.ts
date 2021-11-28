import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-test",
  template: `
    <!------------------------------start html code------------------------------>
    <style>
      .row-center {
        height: 50px;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        align-self: center;
        justify-content: center;
      }
      .inf .inf-text {
        visibility: hidden;
        width: 200px;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        z-index: 1;
        top: -5px;
        left: 110%;
      }
      .inf .inf-text::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 100%;
        margin-top: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent black transparent transparent;
      }
      .inf:hover .inf-text {
        visibility: visible;
      }
    </style>
    <div class="columns has-text-centered">
      <div class="column is-one-third">
        <p class="title">Test yourself:</p>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label row-center is-medium">
        <label class="label">Gender</label>
      </div>
      <div class="field-body">
        <div class="field is-narrow row-center">
          <div class="control is-expanded">
            <div class="select is-medium is-expanded">
              <select name="Gender" id="gender_input">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label row-center is-medium">
        <label class="label">Age</label>
      </div>
      <div class="field-body">
        <div class="field is-narrow row-center">
          <div class="field has-addons has-addons-centered">
            <p class="control">
              <input
                id="age_input"
                class="input is-medium"
                type="number"
                min="0"
                max="120"
                step="0.01"
                onchange="validity.valid||(value='');"
                placeholder="0-120"
              />
            </p>
            <p class="control">
              <a class="button is-static is-medium"> years old </a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label row-center is-medium">
        <label class="label">Height</label>
      </div>
      <div class="field-body">
        <div class="field is-narrow row-center">
          <div class="field has-addons has-addons-centered">
            <p class="control">
              <input
                id="height_input"
                class="input is-medium"
                type="number"
                min="0"
                max="250"
                step="0.01"
                onchange="validity.valid||(value='');"
                placeholder="0-250"
              />
            </p>
            <p class="control">
              <span class="select is-medium">
                <select
                  id="height_units"
                  onchange="placeholderRange('height',0,250)"
                >
                  <option value="1">Cm</option>
                  <option value="0.393700787">Inch</option>
                </select>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label row-center is-medium">
        <label class="label">Weight</label>
      </div>
      <div class="field-body">
        <div class="field is-narrow row-center">
          <div class="field has-addons has-addons-centered">
            <p class="control">
              <input
                id="weight_input"
                class="input is-medium"
                type="number"
                min="0"
                max="500"
                step="0.01"
                onchange="validity.valid||(value='');"
                placeholder="0-500"
              />
            </p>
            <p class="control">
              <span class="select is-medium">
                <select
                  id="weight_units"
                  onchange="placeholderRange('weight',0,500)"
                >
                  <option value="1">Kg</option>
                  <option value="2.20462262">Lb</option>
                </select>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label row-center is-medium">
        <label class="label">Ever married?</label>
      </div>
      <div class="field-body">
        <div class="field is-narrow row-center">
          <div class="control row-center">
            <label class="radio content is-medium" style="margin:0;">
              <input type="radio" name="EverMarried" />
              Yes
            </label>
            <label class="radio content is-medium">
              <input type="radio" name="EverMarried" />
              No
            </label>
          </div>
          <p class="row-center">&nbsp;&nbsp;</p>
          <div class="control row-center inf">
            <a class="button is-info is-small is-rounded">
              <span class="icon">
                <i class="fas fa-info"></i>
              </span>
            </a>
            <span class="inf-text">Have you ever been married?</span>
          </div>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label row-center is-medium">
        <label class="label">Current job type</label>
      </div>
      <div class="field-body">
        <div class="field is-narrow row-center">
          <div class="control is-expanded">
            <div class="select is-medium">
              <select name="WorkType" id="job_input">
                <option value="Never_worked">Unemployed</option>
                <option value="Private">Private</option>
                <option value="Self-employed">Self-employed</option>
                <option value="Children">Children</option>
                <option value="Govt_job">Government job</option>
              </select>
            </div>
          </div>
          <p class="row-center">&nbsp;&nbsp;</p>
          <div class="control row-center inf">
            <a class="button is-info is-small is-rounded">
              <span class="icon">
                <i class="fas fa-info"></i>
              </span>
            </a>
            <span class="inf-text">What is the type of your current job?</span>
          </div>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label row-center is-medium">
        <label class="label">Residence type</label>
      </div>
      <div class="field-body">
        <div class="field is-narrow row-center">
          <div class="control">
            <label class="radio content is-medium" style="margin:0;">
              <input type="radio" name="ResidenceType" />
              Rural
            </label>
            <label class="radio content is-medium">
              <input type="radio" name="ResidenceType" />
              Urban
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label row-center is-medium">
        <label class="label">Smoking status</label>
      </div>
      <div class="field-body">
        <div class="field is-narrow row-center">
          <div class="control is-expanded">
            <div class="select is-medium">
              <select name="SmokingStastus" id="smoke_input">
                <option value="never smoked">Never smoked</option>
                <option value="smokes">smokes</option>
                <option value="formerly smoked">Formerly smoked</option>
              </select>
            </div>
          </div>
          <p class="row-center">&nbsp;&nbsp;</p>
          <div class="control row-center inf">
            <a class="button is-info is-small is-rounded">
              <span class="icon">
                <i class="fas fa-info"></i>
              </span>
            </a>
            <span class="inf-text">Have you ever smoked?</span>
          </div>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label row-center is-medium">
        <label class="label">Hypertension</label>
      </div>
      <div class="field-body">
        <div class="field is-narrow row-center">
          <div class="control row-center">
            <label class="radio content is-medium" style="margin:0;">
              <input type="radio" name="hypertension" />
              Yes
            </label>
            <label class="radio content is-medium">
              <input type="radio" name="hypertension" />
              No
            </label>
          </div>
          <p class="row-center">&nbsp;&nbsp;</p>
          <div class="control row-center inf">
            <a class="button is-info is-small is-rounded">
              <span class="icon">
                <i class="fas fa-info"></i>
              </span>
            </a>
            <span class="inf-text"
              >Do you currently have high blood pressure?</span
            >
          </div>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label row-center is-medium">
        <label class="label">Heart disease</label>
      </div>
      <div class="field-body">
        <div class="field is-narrow row-center">
          <div class="control row-center">
            <label class="radio content is-medium" style="margin:0;">
              <input type="radio" name="heart_disease" />
              Yes
            </label>
            <label class="radio content is-medium">
              <input type="radio" name="heart_disease" />
              No
            </label>
          </div>
          <p class="row-center">&nbsp;&nbsp;</p>
          <div class="control row-center inf">
            <a class="button is-info is-small is-rounded">
              <span class="icon">
                <i class="fas fa-info"></i>
              </span>
            </a>
            <span class="inf-text">Do you currently have heart disease?</span>
          </div>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label row-center is-medium">
        <label class="label">Average glucose level</label>
      </div>
      <div class="field-body">
        <div class="field is-narrow row-center">
          <div class="field has-addons has-addons-centered">
            <p class="control">
              <input
                id="avg_glucose_level_input"
                class="input is-medium"
                type="number"
                min="50"
                max="300"
                step="0.01"
                onchange="validity.valid||(value='');"
                placeholder="50-300"
              />
            </p>
            <p class="control">
              <span class="select is-medium">
                <select
                  id="avg_glucose_level_units"
                  onchange="placeholderRange('avg_glucose_level',50,300)"
                >
                  <option value="1">mg/dL</option>
                  <option value="0.0555">mmol/L</option>
                </select>
              </span>
            </p>
          </div>
          <p class="row-center">&nbsp;&nbsp;</p>
          <div class="control row-center inf">
            <a class="button is-info is-small is-rounded">
              <span class="icon">
                <i class="fas fa-info"></i>
              </span>
            </a>
            <span class="inf-text">Have you ever smoked?</span>
          </div>
          <p class="row-center">&nbsp;&nbsp;</p>
          <div class="field row-center">
            <div class="control">
              <label class="checkbox" style="margin:0;">
                <input type="checkbox" onclick="glucoseDontKnow()" />
                I don't know
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="columns has-text-centered">
      <div class="column is-one-third">
        <div class="button is-success is-large" onclick="sendTest()">Click to see the results</div>
      </div>
    </div>
    <!------------------------------end html code------------------------------>
  `,
  styles: [],
})
export class TestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
