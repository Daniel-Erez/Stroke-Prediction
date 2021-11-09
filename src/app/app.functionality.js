function login(){
    window.alert("this button is under development!");
}

function loginemailinputStyle(){
    var email=document.getElementById("login_email_input").value;
    var inpt=document.getElementById("login_email_input");
    var tria=document.getElementById("login_email_icon_triangle");
    var check=document.getElementById("login_email_icon_check");
    var help=document.getElementById("login_email_help");
    if(validateEmail(email)){
        inpt.classList.add("is-success")
        inpt.classList.remove("is-danger");
        tria.setAttribute("style", "display:none;");
        check.setAttribute("style", "");
        help.setAttribute("style", "display:none;");
    }else{
        inpt.classList.remove("is-success")
        inpt.classList.add("is-danger");
        check.setAttribute("style", "display:none;");
        tria.setAttribute("style", "");
        help.setAttribute("style", "");
    }
}

function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }