var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

function login(){
    x.style.left = "190px";
    y.style.left = "1890px"
    a.className+= "white-btn";
    b.className = " btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
  
}
function register(){
    x.style.left = "-590px";
    y.style.left = "190px";
     a.className+= "white-btn";
    b.className = " btn";
    x.style.opacity = 0;
    y.style.opacity = 1;   
}

function myMenuFunction(){
    var i = document.getElementById("navMenu");
    if(i.className === "nav-menu"){
        i.className += "responsive";
    }else{
        i.className = "nav-menu";
    }
}



function SignIn(){
    var logEmail = document.getElementById('logUsername').value;
    var logPassword = document.getElementById('logPassword').value;

    if (logEmail ==="admin" && logPassword === "admin"){
        alert("Login Successful!");
        window.location.assign("dashboard.html");
    }else {
        alert("Invalid Username or password!!")
    }
}













