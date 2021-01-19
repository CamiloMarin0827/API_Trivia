const alreadyLoggedIn=localStorage.getItem("loggedIn");

const userName=document.getElementById("user-loggin");
const logout=document.getElementById("close");

if(!alreadyLoggedIn){
    window.location.href="/index.html";
}

function signOff(){
    localStorage.clear('email');
    location.href='index.html';
}
   

