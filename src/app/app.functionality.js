firebase.auth().onAuthStateChanged(function (user) {
  var navlogin = document.getElementById("nav-for-logged-users");
  var navlogout = document.getElementById("nav-for-unlogged-users");
  var userForbidden=["/login", "/register"];
  if (user && userForbidden.includes(location.pathname)) {
    document.getElementById("go-home").click();
  }
  if (navlogin != null && navlogout != null) {
    if (user) {
      // User is signed in.
      navlogin.setAttribute("style", "");
      navlogout.setAttribute("style", "display:none;");
    } else {
      navlogin.setAttribute("style", "display:none;");
      navlogout.setAttribute("style", "");
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

function register(){
    window.alert('this button is under development!');
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
