document.addEventListener("DOMContentLoaded", () => {
  var navin=window.sessionStorage.getItem("navIn");
  var navout=window.sessionStorage.getItem("navOut");
  if (navin == null || navout==null) {
    navin = document.getElementById("nav-login").outerHTML;
    navout = document.getElementById("nav-logout").outerHTML;
    window.sessionStorage.setItem("navIn", navin);
    window.sessionStorage.setItem("navOut", navout);
  }

  if (window.sessionStorage.getItem("log") == null) {
    window.sessionStorage.setItem("log", "false");
  }
  var loged = window.sessionStorage.getItem("log");
  changeHeader(loged);
  changeLocation(loged);
});

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    window.sessionStorage.setItem("log", "true");
  } else {
    window.sessionStorage.setItem("log", "false");
  }
  var loged = window.sessionStorage.getItem("log");
  changeHeader(loged);
  changeLocation(loged);
});

function changeHeader(loged) {
  var body = document.getElementById("head-nav");
  if(body!=null){
  body.innerHTML="";
  if (loged == "true") {
    var nav = window.sessionStorage.getItem("navIn");
  } else {
    var nav = window.sessionStorage.getItem("navOut");
  }
  body.insertAdjacentHTML('afterbegin', nav);
  fixBurgers();
}}

function fixBurgers(){
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
}

function changeLocation(loged) {
  var userForbidden = ["/login", "/register"];
  var notUserForbidden = ["/profile"];
  if (
    (loged == "true" && userForbidden.includes(location.pathname)) ||
    (loged == "false" && notUserForbidden.includes(location.pathname))
  ) {
    document.getElementById("go-home").click();
  }
}

function login() {
  var userEmail = document.getElementById("login_email_input").value;
  var userPass = document.getElementById("login_password_input").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPass)
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error : " + errorMessage);
    });
}

function logout() {
  firebase
    .auth()
    .signOut()
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error : " + errorMessage);
    });
}

function register() {
  window.alert("this button is under development!");
}

function loginEmailInputStyle() {
  var email = document.getElementById("login_email_input").value;
  var inpt = document.getElementById("login_email_input");
  var icon = document.getElementById("login_email_icon");
  var help = document.getElementById("login_email_help");
  if (validateEmail(email)) {
    inpt.classList.add("is-success");
    inpt.classList.remove("is-danger");
    icon.classList.add("fa-check");
    icon.classList.remove("fa-exclamation-triangle");
    help.innerHTML = "";
  } else {
    inpt.classList.remove("is-success");
    inpt.classList.add("is-danger");
    icon.classList.remove("fa-check");
    icon.classList.add("fa-exclamation-triangle");
    help.innerHTML = "invalid email";
  }
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function temp() {
  var hi = location.pathname;
  console.log(hi);
}
