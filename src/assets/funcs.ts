import { SelectMultipleControlValueAccessor } from "@angular/forms";

export function inputStyle(fieldPurpose: string, fieldRole: "email"|"password"|"nickname"|"confirm_password"): boolean {
  var val = getElementWithID(fieldPurpose + "_" + fieldRole + "_input").value;
  var inpt = document.getElementById(fieldPurpose + "_" + fieldRole + "_input");
  var icon = document.getElementById(fieldPurpose + "_" + fieldRole + "_icon");
  var help = document.getElementById(fieldPurpose + "_" + fieldRole + "_help");
  var roles = {
    email: { message: "must be a valid email", pattern: /\S+@\S+\.\S+/ },
    password: {
      message: "must be at least 8 characters long",
      pattern: /.{8,}/,
    },
    nickname: { message: "must be a non-spaced phrase", pattern: /^\S+/ },
    confirm_password: {
      message: "must match the password above",
      pattern: new RegExp(
        getElementWithID(fieldPurpose + "_password_input")
        .value
      ),
    },
  };
  if ((inpt != null && icon != null && help != null)) {
    if (String(val.match(roles[fieldRole]["pattern"])) == val) {
      inpt.classList.add("is-success");
      inpt.classList.remove("is-danger");
      icon.classList.add("fa-check");
      icon.classList.remove("fa-exclamation-triangle");
      help.innerHTML = "";
      return true;
    } else {
      inpt.classList.remove("is-success");
      inpt.classList.add("is-danger");
      icon.classList.remove("fa-check");
      icon.classList.add("fa-exclamation-triangle");
      help.innerHTML = roles[fieldRole]["message"];
      return false;
    }
  } else {
    window.alert("something gone wrong :(");
    return false;
  }
}

export function locationValidate():void {
  var loged=window.sessionStorage.getItem("log");
  var userForbidden = ["#/login", "#/register"];
  var notUserForbidden = ["#/profile", "#/test"];
  if (
    (loged=="true" && userForbidden.includes(location.hash)) ||
    (loged=="false" && notUserForbidden.includes(location.hash))
  ) {
    location.hash = "#/";
  }
}

export function getElementWithID(id:string):HTMLInputElement{
  return (<HTMLInputElement>(document.getElementById(id)));
}

export function getElementWithName(name:string,place:number=0):HTMLInputElement{
  return (<HTMLInputElement>(document.getElementsByName(name)[place]));
}

export function temp():void {
  var hash = location.hash;
  var loged = window.sessionStorage.getItem("log");
  console.log(hash);
  console.log(loged);
}

export function sleep(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}