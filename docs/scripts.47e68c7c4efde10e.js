window.addEventListener("hashchange",function(){valiadtions()}),document.addEventListener("DOMContentLoaded",()=>{var n=window.sessionStorage.getItem("navIn"),a=window.sessionStorage.getItem("navOut");(null==n||null==a)&&(n=document.getElementById("nav-login").outerHTML,a=document.getElementById("nav-logout").outerHTML,window.sessionStorage.setItem("navIn",n),window.sessionStorage.setItem("navOut",a)),null==window.sessionStorage.getItem("log")&&window.sessionStorage.setItem("log","false"),valiadtions()}),auth.onAuthStateChanged(function(n){n?window.sessionStorage.setItem("log","true"):window.sessionStorage.setItem("log","false"),valiadtions()});{let n=function(){var e=window.sessionStorage.getItem("log");a(e),s(e),r()},a=function(e){var t=document.getElementById("head-nav");if(null!=t){if(t.innerHTML="","true"==e)var o=window.sessionStorage.getItem("navIn");else o=window.sessionStorage.getItem("navOut");t.insertAdjacentHTML("afterbegin",o),i()}},i=function(){const e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);e.length>0&&e.forEach(t=>{t.addEventListener("click",()=>{const l=document.getElementById(t.dataset.target);t.classList.toggle("is-active"),l.classList.toggle("is-active")})})},s=function(e){("true"==e&&["#/login","#/register"].includes(location.hash)||"false"==e&&["#/profile","#/test"].includes(location.hash))&&(location.hash="#/")},r=function(){var e=auth.currentUser;"#/profile"==location.hash&&null!=e&&(console.log(e.uid),db.collection("users").doc(e.uid).get().then(t=>{var o=t.data().Name;document.getElementById("uName").innerHTML="hello "+o+" \u270c"}))};var valiadtions=n,headerValidate=a,fixBurgers=i,locationValidate=s,loadProfile=r}var register=function(){var s=document.getElementById("register_nickname_input").value,r=document.getElementById("register_email_input").value,e=document.getElementById("register_password_input").value;[inputStyle("register","nickname"),inputStyle("register","email"),inputStyle("register","password"),inputStyle("register","confirm_password")].every(t=>t)?firebase.auth().createUserWithEmailAndPassword(r,e).then(t=>{db.collection("users").doc(t.user.uid).set({Name:s})}).catch(t=>{window.alert("Error ["+t.code+"]: "+t.message)}):window.alert("complete all fields!")},login=function(){var s=document.getElementById("login_email_input").value,r=document.getElementById("login_password_input").value;firebase.auth().signInWithEmailAndPassword(s,r).then(e=>{}).catch(e=>{window.alert("Error ["+e.code+"]: "+e.message)})},logout=function(){firebase.auth().signOut().catch(s=>{window.alert("Error : "+s.message)})},glucoseDontKnow=function(){document.getElementById("avg_glucose_level_input").disabled=!document.getElementById("avg_glucose_level_input").disabled,document.getElementById("avg_glucose_level_units").disabled=!document.getElementById("avg_glucose_level_units").disabled},placeholderRange=function(i,s,r){var e=document.getElementById(i+"_units"),t=document.getElementById(i+"_input");t.setAttribute("placeholder",String(parseFloat((e.value*s).toFixed(2)))+"-"+String(parseFloat((e.value*r).toFixed(2)))),t.setAttribute("min",String(parseFloat((e.value*s).toFixed(2)))),t.setAttribute("max",String(parseFloat((e.value*r).toFixed(2)))),t.value=""};function inputStyle(n,a){var i=document.getElementById(n+"_"+a+"_input").value,s=document.getElementById(n+"_"+a+"_input"),r=document.getElementById(n+"_"+a+"_icon"),e=document.getElementById(n+"_"+a+"_help"),t={email:{message:"must be a valid email",pattern:/\S+@\S+\.\S+/},password:{message:"must be at least 8 characters long",pattern:/.{8,}/},nickname:{message:"must be a non-spaced phrase",pattern:/^\S+/},confirm_password:{message:"must match the password above",pattern:new RegExp(document.getElementById(n+"_password_input").value)}};return i.match(t[a].pattern)==i?(s.classList.add("is-success"),s.classList.remove("is-danger"),r.classList.add("fa-check"),r.classList.remove("fa-exclamation-triangle"),e.innerHTML="",!0):(s.classList.remove("is-success"),s.classList.add("is-danger"),r.classList.remove("fa-check"),r.classList.add("fa-exclamation-triangle"),e.innerHTML=t[a].message,!1)}function sendTest(){validTest()?window.alert("valid"):window.alert("not-valid")}function validTest(){var n=document.getElementById("gender_input").value;if(!["Male","Female"].includes(n))return!1;if(""==document.getElementById("age_input").value)return!1;if(""==document.getElementById("height_input").value)return!1;if(""==document.getElementById("weight_input").value)return!1;var e=document.getElementsByName("EverMarried");if(!e[0].checked&&!e[1].checked)return!1;var t=document.getElementById("job_input").value;if(!["Never_worked","Private","Self-employed","Children","Govt_job"].includes(t))return!1;var l=document.getElementsByName("ResidenceType");if(!l[0].checked&&!l[1].checked)return!1;var g=document.getElementById("job_input").value;if(!["never smoked","smokes","formerly smoked"].includes(g))return!1;var d=document.getElementsByName("hypertension");if(!d[0].checked&&!d[1].checked)return!1;var u=document.getElementsByName("heart_disease");if(!u[0].checked&&!u[1].checked)return!1;var c=document.getElementById("avg_glucose_level_input");return!(!c.disabled&&""==c.value)}function temp(){var n=location.hash,a=window.sessionStorage.getItem("log");console.log(n),console.log(a)}