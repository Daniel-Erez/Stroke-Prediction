export function inputStyle(fieldRole: "email"|"password"|"nickname"|"confirm_password"): boolean {
  var inpt = getElementWithID(fieldRole + "_input");
  var icon = document.getElementById(fieldRole + "_icon");
  var help = document.getElementById(fieldRole + "_help");
  let conPas=null;
  if(getElementWithID("password_input")==null){conPas=""}
  else{conPas= new RegExp(
    getElementWithID("password_input")
    .value)}
  var roles = {
    email: { message: "must be a valid email", pattern: /\S+@\S+\.\S+/ },
    password: {
      message: "must be at least 8 characters long",
      pattern: /.{8,}/,
    },
    nickname: { message: "must be a non-spaced phrase", pattern: /^\S+/ },
    confirm_password: {
      message: "must match the password above",
      pattern: conPas
    }
  };
  if ((inpt != null && icon != null && help != null)) {
     if (String(inpt.value) == "") {
      inpt.classList.remove("is-danger");
      inpt.classList.remove("is-success");
      icon.classList.remove("fa-exclamation-triangle");
      icon.classList.remove("fa-check");
      help.innerHTML = "";
      inpt.parentElement?.classList.remove("has-icons-right")
      return false;
    }else if (String(inpt.value.match(roles[fieldRole]["pattern"])) == inpt.value) {
      inpt.parentElement?.classList.add("has-icons-right")
      inpt.classList.add("is-success");
      inpt.classList.remove("is-danger");
      icon.classList.add("fa-check");
      icon.classList.remove("fa-exclamation-triangle");
      help.innerHTML = "";
      return true;
    }else{
      inpt.parentElement?.classList.add("has-icons-right")
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

export function sleep(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

export function converter(STRcode: string, type:string):string {
  var code=Number(STRcode);
  var genderDict={0: 'Female', 1: 'Male'}
  if(type=="gender" &&(code==1||code==0)) return genderDict[code];
  var workDict={0: 'Govt_job', 1: 'Never_worked', 2: 'Private', 3: 'Self-employed', 4: 'children'}
  if(type=="work_type" &&(code==1||code==0||code==2||code==3||code==4)) return workDict[code];
  var residenceDict={0: 'Rural', 1: 'Urban'}
  if(type=="Residence_type" &&(code==1||code==0)) return residenceDict[code];
  var smokingDict={0: 'Unknown', 1: 'formerly smoked', 2: 'never smoked', 3: 'smokes'}
  if(type=="smoking_status" &&(code==1||code==0||code==2||code==3)) return smokingDict[code];
  var otherDict={0: 'No', 1: 'Yes'}
  if((type=="hypertension"||type=="heart_disease"||type=="ever_married") &&(code==1||code==0)) return otherDict[code];
  return STRcode;
}
