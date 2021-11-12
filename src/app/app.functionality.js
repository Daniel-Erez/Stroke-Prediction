document.addEventListener("DOMContentLoaded", () => {
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
        if(el.classList.contains("is-active")){
          $target.classList.add("is-active");
        }else{
          $target.classList.remove("is-active");
        }
      });
    });
  }
});

firebase.auth().onAuthStateChanged(function (user) {
  var navlogin = document.getElementById("nav-for-logged-users");
  var navlogout = document.getElementById("nav-for-unlogged-users");
  var burger = document.getElementById("main-burger");
  var userForbidden = ["/login", "/register"];
  if (user && userForbidden.includes(location.pathname)) {
    document.getElementById("go-home").click();
  }
  if (navlogin != null && navlogout != null) {
    if (user) {
      // User is signed in.
      navlogin.setAttribute("style", "");
      navlogout.setAttribute("style", "display:none;");
      burger.setAttribute("data-target", "nav-for-logged-users");
    } else {
      navlogin.setAttribute("style", "display:none;");
      navlogout.setAttribute("style", "");
      burger.setAttribute("data-target", "nav-for-unlogged-users");
    }
  }
});

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
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      document.getElementById("go-home").click();
    }
  });
}

function register() {
  window.alert("this button is under development!");
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

function loginEmailInputStyle() {
  var email = document.getElementById("login_email_input").value;
  var inpt = document.getElementById("login_email_input");
  var tria = document.getElementById("login_email_icon_triangle");
  var check = document.getElementById("login_email_icon_check");
  var help = document.getElementById("login_email_help");
  if (validateEmail(email)) {
    inpt.classList.add("is-success");
    inpt.classList.remove("is-danger");
    tria.setAttribute("style", "display:none;");
    check.setAttribute("style", "");
    help.setAttribute("style", "display:none;");
  } else {
    inpt.classList.remove("is-success");
    inpt.classList.add("is-danger");
    check.setAttribute("style", "display:none;");
    tria.setAttribute("style", "");
    help.setAttribute("style", "");
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
