import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { doc, getDoc, updateDoc } from "@firebase/firestore";
import {
  getElementWithID,
  getElementWithName,
  locationValidate,
} from "src/assets/funcs";
import { fire } from "src/environments/environment";

@Component({
  selector: "app-test",
  template: `
    <!------------------------------start html code------------------------------>

    <div class="wrapper">
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
                  (change)="styleChange('age')"
                  placeholder="0-120"
                />
                <span class="icon is-small is-right">
                  <i id="age_icon" class="fas"></i>
                </span>
              </p>
              <p class="control">
                <a class="button is-static is-medium"> years old </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <p id="age_help" class="help is-danger"></p>

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
                  step="0.01"
                  onchange="validity.valid||(value='');"
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

      <div class="field is-horizontal">
        <div class="field-label row-center is-medium">
          <label class="label">Weight</label>
        </div>
        <div class="field-body">
          <div class="field is-narrow row-center">
            <div class="field has-addons has-addons-centered">
              <p class="control">
                <input
                  id="test_weight_input"
                  class="input is-medium"
                  type="number"
                  min="2"
                  max="500"
                  step="0.01"
                  onchange="validity.valid||(value='');"
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
                  <option value="Never_worked">Unemployed</option>
                  <option value="Private">Private</option>
                  <option value="Self-employed">Self-employed</option>
                  <option value="Children">Children</option>
                  <option value="Govt_job">Government job</option>
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
                  <option value="never smoked">Never smoked</option>
                  <option value="smokes">smokes</option>
                  <option value="formerly smoked">Formerly smoked</option>
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
                  onchange="validity.valid||(value='');"
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

      <div class="button is-success is-large" (click)="sendTest()">
        Click to see the results
      </div>
    </div>
    <!------------------------------end html code------------------------------>
  `,
  styles: [
    `
      /*------------------------------start css code------------------------------*/
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
  constructor(private router: Router) {}

  ngOnInit(): void {
    locationValidate();
  }

  placeholderRange(id: String, min: number, max: number): void {
    var units = Number(
      (<HTMLInputElement>document.getElementById(id + "_units")).value
    );
    var inpt = <HTMLInputElement>document.getElementById(id + "_input");
    if (inpt != null) {
      inpt.setAttribute(
        "placeholder",
        String(parseFloat((units * min).toFixed(2))) +
          "-" +
          String(parseFloat((units * max).toFixed(2)))
      );
      inpt.setAttribute("min", String(parseFloat((units * min).toFixed(2))));
      inpt.setAttribute("max", String(parseFloat((units * max).toFixed(2))));
      inpt.value = "";
    }
  }
 
  glucoseDontKnow(): void {
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
    var isMarry: String;
    if (marry.checked) isMarry = "Yes";
    else isMarry = "No";
    var job = getElementWithID("job_input").value;
    var residence = getElementWithName("ResidenceType");
    var resType: String;
    if (residence.checked) resType = "Rural";
    else resType = "Urban";
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
    var avgGlc: Number | String;
    if (avg_glc.disabled) avgGlc = "";
    else {
      units = Number(getElementWithID("avg_glucose_level_units").value);
      avgGlc = Number(avg_glc.value) / units;
    }
    return {
      id: "",
      gender: gender,
      age: Number(age),
      bmi: bmi,
      ever_married: isMarry,
      work_type: job,
      Residence_type: resType,
      smoking_status: smoke,
      hypertension: hyper,
      heart_disease: hrtDss,
      avg_glucose_level: avgGlc,
    };
  }

  validTest(): number {
    var gender = getElementWithID("gender_input").value;
    var genders = ["Male", "Female"];
    if (!genders.includes(gender)) return 0;
    var age = getElementWithID("age_input").value;
    if (age == "") return 0;
    var height = getElementWithID("height_input").value;
    if (height == "") return 0;
    var weight = getElementWithID("weight_input").value;
    if (weight == "") return 0;
    var marry0 = getElementWithName("EverMarried", 0);
    var marry1 = getElementWithName("EverMarried", 1);
    if (!marry0.checked && !marry1.checked) return 0;
    var job = getElementWithID("job_input").value;
    var jobs = [
      "Never_worked",
      "Private",
      "Self-employed",
      "Children",
      "Govt_job",
    ];
    if (!jobs.includes(job)) return 0;
    var residence0 = getElementWithName("ResidenceType", 0);
    var residence1 = getElementWithName("ResidenceType", 1);
    if (!residence0.checked && !residence1.checked) return 0;
    var smoke = getElementWithID("smoke_input").value;
    var smokes = ["never smoked", "smokes", "formerly smoked"];
    if (!smokes.includes(smoke)) return 0;
    var hypertension0 = getElementWithName("hypertension", 0);
    var hypertension1 = getElementWithName("hypertension", 1);
    if (!hypertension0.checked && !hypertension1.checked) return 0;
    var heart_disease0 = getElementWithName("heart_disease", 0);
    var heart_disease1 = getElementWithName("heart_disease", 1);
    if (!heart_disease0.checked && !heart_disease1.checked) return 0;
    var avg_glc = getElementWithID("avg_glucose_level_input");
    if (!avg_glc.disabled && avg_glc.value == "") return 0;
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
          tests[Object.keys(docSnap.data()["tests"]).length + 1] =
            this.fillParams();
          await updateDoc(docRef, {
            tests,
          });

          this.router.navigateByUrl(""); //------------------------------------------------------continue here: after parameters sent successfully-------------------------------
        } else {
          // docSnap.data() will be undefined in this case
          console.log("something gone wrong :(");
        }
      }
    } else if (this.validTest() == 0) {
      window.alert("complete all fields!");
    } else if (this.validTest() == -1) {
      window.alert("please fill ur real parameters");
    } else {
      window.alert("something gone wrong :(");
    }
  }

  styleChange(fieldRole: string): void {
    var val = getElementWithID(fieldRole + "_input").value;
    var inpt = document.getElementById(fieldRole + "_input");
    var icon = document.getElementById(fieldRole + "_icon");
    var help = document.getElementById(fieldRole + "_help");
    if ((inpt != null && icon != null && help != null)) {
      if (String(val) == "") {
        inpt.classList.remove("is-danger");
        inpt.classList.remove("is-success");
        icon.classList.remove("fa-exclamation-triangle");
        icon.classList.remove("fa-check");
        help.innerHTML = "";
        inpt.parentElement?.classList.remove("has-icons-right")
      } else if (Number(val)<100) {
        inpt.parentElement?.classList.add("has-icons-right")
        inpt.classList.add("is-success");
        inpt.classList.remove("is-danger");
        icon.classList.add("fa-check");
        icon.classList.remove("fa-exclamation-triangle");
        help.innerHTML = "";
      }else{
      inpt.parentElement?.classList.add("has-icons-right")
      inpt.classList.remove("is-success");
      inpt.classList.add("is-danger");
      icon.classList.remove("fa-check");
      icon.classList.add("fa-exclamation-triangle");
      help.innerHTML ="message";
    }
  } else {
    window.alert("something gone wrong :(");
  }
}}
