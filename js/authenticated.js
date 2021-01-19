const alreadyLoggedIn=localStorage.getItem("loggedIn");

const userName=document.getElementById("user-loggin");
const logout=document.getElementById("close");


if(!alreadyLoggedIn){
    window.location.href="/index.html";
}


let username=JSON.parse(localStorage.getItem("user"));

if(username!=null){
    userName.innerHTML=` ${username[0].email}`
}

function signOff(){
    localStorage.clear('email');
    location.href='index.html';
}
   

