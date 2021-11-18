//change location
window.addEventListener("hashchange", function () {
  valiadtions();
});

//refresh or first load of app
document.addEventListener("DOMContentLoaded", () => {
  var navin = window.sessionStorage.getItem("navIn");
  var navout = window.sessionStorage.getItem("navOut");
  if (navin == null || navout == null) {
    navin = document.getElementById("nav-login").outerHTML;
    navout = document.getElementById("nav-logout").outerHTML;
    window.sessionStorage.setItem("navIn", navin);
    window.sessionStorage.setItem("navOut", navout);
  }
  if (window.sessionStorage.getItem("log") == null) {
    window.sessionStorage.setItem("log", "false");
  }
  valiadtions();
});

//after user login or logout
auth.onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    window.sessionStorage.setItem("log", "true");
  } else {
    window.sessionStorage.setItem("log", "false");
  }
  valiadtions();
});

{//validations (header, burgers, location and profile)
  function valiadtions() {
    var loged = window.sessionStorage.getItem("log");
    headerValidate(loged);
    locationValidate(loged);
    loadProfile();
  }
  function headerValidate(loged) {
    var body = document.getElementById("head-nav");
    if (body != null) {
      body.innerHTML = "";
      if (loged == "true") {
        var nav = window.sessionStorage.getItem("navIn");
      } else {
        var nav = window.sessionStorage.getItem("navOut");
      }
      body.insertAdjacentHTML("afterbegin", nav);
      fixBurgers();
    }
  }
  function fixBurgers() {
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
  function locationValidate(loged) {
    var userForbidden = ["#/login", "#/register"];
    var notUserForbidden = ["#/profile", "#/test"];
    if (
      (loged == "true" && userForbidden.includes(location.hash)) ||
      (loged == "false" && notUserForbidden.includes(location.hash))
    ) {
      location.hash = "#/";
    }
  }
  function loadProfile() {
    var user = auth.currentUser;
    if (location.hash == "#/profile" && user != null) {
      console.log(user.uid);
      db.collection("users")
        .doc(user.uid)
        .get()
        .then((x) => {
          var name = x.data()["Name"];
          document.getElementById("uName").innerHTML = "hello " + name + " ✌";
        });
    }
  }
}

{//register, login and logout buttons
  function register() {
    var userName = document.getElementById("register_nickname_input").value;
    var userEmail = document.getElementById("register_email_input").value;
    var userPass = document.getElementById("register_password_input").value;
    if (
      [
        inputStyle("register", "nickname"),
        inputStyle("register", "email"),
        inputStyle("register", "password"),
        inputStyle("register", "confirm_password"),
      ].every((x) => x)
    ) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(userEmail, userPass)
        .then((log) => {
          db.collection("users").doc(log.user.uid).set({
            Name: userName,
          });
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          window.alert("Error [" + errorCode + "]: " + errorMessage);
        });
    } else {
      window.alert("complete all fields!");
    }
  }
  function login() {
    var userEmail = document.getElementById("login_email_input").value;
    var userPass = document.getElementById("login_password_input").value;

    firebase
      .auth()
      .signInWithEmailAndPassword(userEmail, userPass)
      .then((log) => {})
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error [" + errorCode + "]: " + errorMessage);
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
}

{//test yourself - avg_glucose_level, height, weight
  function glucoseDontKnow() {
    document.getElementById("avg_glucose_level_input").disabled =
      !document.getElementById("avg_glucose_level_input").disabled;
    document.getElementById("avg_glucose_level_units").disabled =
      !document.getElementById("avg_glucose_level_units").disabled;
  }
  function placeholderRange(id,min,max){

    el=document.getElementById(id+"_units");
    document.getElementById(id+"_input").setAttribute('placeholder', String(parseFloat((el.value*min).toFixed(2)))+'-'+String(parseFloat((el.value*max).toFixed(2))));
  }
}

function inputStyle(fieldPurpose, fieldRole) {
  var val = document.getElementById(
    fieldPurpose + "_" + fieldRole + "_input"
  ).value;
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
        document.getElementById(fieldPurpose + "_password_input").value
      ),
    },
  };
  if (val.match(roles[fieldRole]["pattern"]) == val) {
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
}

function temp() {
  var hash = location.hash;
  var loged = window.sessionStorage.getItem("log");
  console.log(hash);
  console.log(loged);
}
