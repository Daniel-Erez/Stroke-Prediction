import { NoServiceMSGComponent } from "./../no-service-msg/no-service-msg.component";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { doc, getDoc, updateDoc } from "@firebase/firestore";
import {
  getElementWithClass,
  getElementWithID,
  getElementWithName,
  locationValidate,
  sleep,
} from "src/assets/funcs";
import { fire } from "src/environments/environment";
import { ClassifyService } from "../classify.service";

@Component({
  selector: "app-test",
  template: `
    <!------------------------------start html code------------------------------>
    <progress id="loader" class="progress is-info" max="100"></progress>
    <app-no-service-msg class="main_el"></app-no-service-msg>

    <div class="wrapper main_el">
      <p class="title is-underlined">Test yourself:</p>
      <div class="field is-horizontal">
        <div class="field-label row-center is-medium">
          <label class="label">Gender</label>
        </div>
        <div class="field-body">
          <div class="field is-narrow row-center">
            <div class="control is-expanded">
              <div class="select is-medium is-expanded">
                <select name="Gender" id="gender_input">
                  <option value="1">Male</option>
                  <option value="0">Female</option>
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
                  (change)="styleChange('age')"
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
      <p id="age_help" class="help is-danger">must be between 0 and 120</p>

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
                  min="35"
                  max="250"
                  (change)="styleChange('height')"
                  placeholder="35-250"
                />
              </p>
              <p class="control">
                <span class="select is-medium">
                  <select
                    id="height_units"
                    (change)="placeholderRange('height', 35, 250)"
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
      <p id="height_help" class="help is-danger">must be between 35 and 250</p>

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
                  min="2"
                  max="500"
                  (change)="styleChange('weight')"
                  placeholder="2-500"
                />
              </p>
              <p class="control">
                <span class="select is-medium">
                  <select
                    id="weight_units"
                    (change)="placeholderRange('weight', 2, 500)"
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
      <p id="weight_help" class="help is-danger">must be between 2 and 500</p>

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
                  <option value="1">Unemployed</option>
                  <option value="2">Private</option>
                  <option value="3">Self-employed</option>
                  <option value="4">Children</option>
                  <option value="0">Government job</option>
                </select>
              </div>
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
                  <option value="2">Never smoked</option>
                  <option value="3">smokes</option>
                  <option value="1">Formerly smoked</option>
                </select>
              </div>
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
          <label class="label">Average glucose</label>
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
                  (change)="styleChange('avg_glucose_level')"
                  placeholder="50-300"
                />
              </p>
              <p class="control">
                <span class="select is-medium">
                  <select
                    id="avg_glucose_level_units"
                    (change)="placeholderRange('avg_glucose_level', 50, 300)"
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
              <span class="inf-text"
                >What is your average glucose level over the past month?</span
              >
            </div>
            <p class="row-center">&nbsp;&nbsp;</p>
            <div class="field row-center">
              <div class="control">
                <label class="checkbox" style="margin:0;">
                  <input type="checkbox" (click)="glucoseDontKnow()" />
                  I don't know
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p id="avg_glucose_level_help" class="help is-danger">
        must be between 50 and 300
      </p>

      <div class="button is-success is-large" (click)="sendTest()">
        Click to see the results
      </div>
    </div>
    <div class="container has-text-centered">
      <br /><br /><br />
      <img id="tar" alt="result" />
    </div>

    <!------------------------------end html code------------------------------>
  `,
  styles: [
    `
      /*------------------------------start css code------------------------------*/
      .main_el {
        display: none;
      }
      #tar {
        display: none;
      }
      .help {
        display: none;
      }
      .wrapper {
        padding-left: calc(50% - 200px);
      }
      .is-horizontal div {
        flex-basis: unset;
        flex-grow: unset;
      }
      .field-label {
        justify-content: flex-start;
        width: 200px;
      }
      .row-center {
        height: 50px;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        align-self: center;
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
      /*------------------------------end css code------------------------------*/
    `,
  ],
})
export class TestComponent implements OnInit {
  constructor(private router: Router, private Classify: ClassifyService) {}

  async ngOnInit(): Promise<void> {
    locationValidate();
    await sleep(1500);
    var service = this.Classify.isActive();
    getElementWithID("loader").remove();
    if (service) {
      getElementWithClass("main_el", 1).style.display = "unset";
      getElementWithClass("main_el", 0).remove();
    } else {
      getElementWithClass("main_el", 0).style.display = "unset";
      getElementWithClass("main_el", 1).remove();
    }
  }

  placeholderRange(id: String, min: number, max: number): void {
    var units = Number(getElementWithID(id + "_units").value);
    var inpt = getElementWithID(id + "_input");
    var help = getElementWithID(id + "_help");

    let Strmin = String(parseFloat((units * min).toFixed(2)));
    let Strmax = String(parseFloat((units * max).toFixed(2)));

    help.innerHTML = "must be between " + Strmin + " and " + Strmax;
    inpt.setAttribute("placeholder", Strmin + "-" + Strmax);
    inpt.setAttribute("min", Strmin);
    inpt.setAttribute("max", Strmax);
    inpt.value = "";
  }

  glucoseDontKnow(): void {
    var inpt = getElementWithID("avg_glucose_level_input");
    inpt.value = "";
    this.styleChange("avg_glucose_level");
    getElementWithID("avg_glucose_level_input").disabled = !getElementWithID(
      "avg_glucose_level_input"
    ).disabled;
    getElementWithID("avg_glucose_level_units").disabled = !getElementWithID(
      "avg_glucose_level_units"
    ).disabled;
  }

  fillParams(): object {
    var gender = getElementWithID("gender_input").value;
    var age = getElementWithID("age_input").value;
    var units = Number(getElementWithID("height_units").value);
    var height = Number(getElementWithID("height_input").value) / (units * 100);
    units = Number(getElementWithID("weight_units").value);
    var weight = Number(getElementWithID("weight_input").value) / units;
    var bmi = weight / height ** 2;
    var marry = getElementWithName("EverMarried");
    var isMarry: number;
    if (marry.checked) isMarry = 1;
    else isMarry = 0;
    var job = getElementWithID("job_input").value;
    var residence = getElementWithName("ResidenceType");
    var resType: number;
    if (residence.checked) resType = 0;
    else resType = 1;
    var smoke = getElementWithID("smoke_input").value;
    var hypertension = getElementWithName("hypertension");
    var hyper: number;
    if (hypertension.checked) hyper = 1;
    else hyper = 0;
    var heart_disease = getElementWithName("heart_disease");
    var hrtDss: number;
    if (heart_disease.checked) hrtDss = 1;
    else hrtDss = 0;
    var avg_glc = getElementWithID("avg_glucose_level_input");
    var avgGlc: number;
    if (avg_glc.disabled) avgGlc = 0;
    else {
      units = Number(getElementWithID("avg_glucose_level_units").value);
      avgGlc = Number(avg_glc.value) / units;
    }
    return {
      gender: Number(gender),
      age: Number(age),
      bmi: bmi,
      ever_married: isMarry,
      work_type: Number(job),
      Residence_type: resType,
      smoking_status: Number(smoke),
      hypertension: hyper,
      heart_disease: hrtDss,
      avg_glucose_level: avgGlc,
    };
  }

  validTest(): number {
    var gender = getElementWithID("gender_input").value;
    var genders = ["1", "0"];
    if (!genders.includes(gender)) return 0;
    var age = getElementWithID("age_input").value;
    if (age == "") return 0;
    if (!this.styleChange("age")) return -1;
    var height = getElementWithID("height_input").value;
    if (height == "") return 0;
    if (!this.styleChange("height")) return -1;
    var weight = getElementWithID("weight_input").value;
    if (weight == "") return 0;
    if (!this.styleChange("weight")) return -1;
    var marry0 = getElementWithName("EverMarried", 0);
    var marry1 = getElementWithName("EverMarried", 1);
    if (!marry0.checked && !marry1.checked) return 0;
    var job = getElementWithID("job_input").value;
    var jobs = ["0", "1", "2", "3", "4"];
    if (!jobs.includes(job)) return 0;
    var residence0 = getElementWithName("ResidenceType", 0);
    var residence1 = getElementWithName("ResidenceType", 1);
    if (!residence0.checked && !residence1.checked) return 0;
    var smoke = getElementWithID("smoke_input").value;
    var smokes = ["1", "2", "3"];
    if (!smokes.includes(smoke)) return 0;
    var hypertension0 = getElementWithName("hypertension", 0);
    var hypertension1 = getElementWithName("hypertension", 1);
    if (!hypertension0.checked && !hypertension1.checked) return 0;
    var heart_disease0 = getElementWithName("heart_disease", 0);
    var heart_disease1 = getElementWithName("heart_disease", 1);
    if (!heart_disease0.checked && !heart_disease1.checked) return 0;
    var avg_glc = getElementWithID("avg_glucose_level_input");
    if (!avg_glc.disabled && avg_glc.value == "") return 0;
    if (!this.styleChange("avg_glucose_level") && !avg_glc.disabled) return -1;
    var units = Number(getElementWithID("height_units").value);
    var numHeight = Number(height) / (units * 100);
    units = Number(getElementWithID("weight_units").value);
    var numWeight = Number(weight) / units;
    var bmi = numWeight / numHeight ** 2;
    if (bmi > 200) return -1;
    return 1;
  }

  async sendTest(): Promise<void> {
    if (this.validTest() == 1) {
      var user = fire.auth.currentUser;
      if (user != null) {
        const docRef = doc(fire.db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          var tests = docSnap.data()["tests"];
          var params = this.fillParams();
          tests[Object.keys(tests).length + 1] = params;

          var results = docSnap.data()["results"];

          this.Classify.classifyOne(params).subscribe(async (res: string) => {
            results[Object.keys(results).length + 1] = res;
            await updateDoc(docRef, {
              tests,
              results,
            });
            //------------------------------------------continue here: after parameters sent successfully---------------------------------------------------------
            this.showGauge(res);
            window.alert("your chances to have stroke are: " + res + "%");
          });
        } else {
          // docSnap.data() will be undefined in this case
          console.log("something gone wrong :(");
        }
      }
    } else if (this.validTest() == 0) {
      window.alert("complete all fields!");
    } else if (this.validTest() == -1) {
      window.alert("please fill valid parameters");
    } else {
      window.alert("something gone wrong :(");
    }
  }

  styleChange(fieldRole: string): boolean {
    var inpt = getElementWithID(fieldRole + "_input");
    var help = getElementWithID(fieldRole + "_help");
    let ageZero = inpt.value == "0" && fieldRole == "age";

    if (
      inpt.value == "" ||
      (Number(inpt.value) <= Number(inpt.max) &&
        !ageZero &&
        Number(inpt.min) <= Number(inpt.value))
    ) {
      inpt.classList.remove("is-danger");
      help.style.display = "none";
      return inpt.value != "";
    } else {
      inpt.classList.add("is-danger");
      help.style.display = "block";
      return false;
    }
  }

  showGauge(val: string) {
    var target = getElementWithID("tar");
    target.style.display = "unset";
    if (val == "NaN") {
      target.style.display = "none";
      target.src = "";
    } else if (parseFloat(val) >= 0 && parseFloat(val) < 20) {
      target.src = "../assets/img/lowRisk.png";
    } else if (parseFloat(val) >= 20 && parseFloat(val) < 50) {
      target.src = "../assets/img/mediumRisk.png";
    } else if (parseFloat(val) >= 50 && parseFloat(val) <= 100) {
      target.src = "../assets/img/highRisk.png";
    } else {
      target.style.display = "none";
      target.src = "";
      console.log("something gone wrong :(");
    }
    target.scrollIntoView();
  }

  AWSservice(): boolean {
    return this.Classify.isActive();
  }
}
