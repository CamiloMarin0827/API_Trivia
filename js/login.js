let usuarios=JSON.parse(localStorage.getItem("user"));

var users = [
    {
        email: "zuleidy@gmail.com",
        password: "12345"
    },

];

const alreadyLoggedIn = localStorage.getItem("loggedIn");

if (alreadyLoggedIn) {
    window.location.href = "/api.html";
}


// Register

function register(){

    const emailRegister = document.getElementById("email-login").value;
    const passwordRegister = document.getElementById("password-login").value;

    newUser={
        email: emailRegister,
        password: passwordRegister
    }

    users.push(newUser);

    localStorage.setItem("user", JSON.stringify(users));
    location.href="index.html";

    console.log(newUser) 
}

// Login

function login(){

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let usuarios=JSON.parse(localStorage.getItem("user"));

    if(usuarios===null){
        const user = users.find((user) => user.email === email && user.password === password);

        if (user) {
            localStorage.setItem("loggedIn", "true");
            window.location.replace("/api.html");
        } else {
            alert("Usuario y/o contraseña incorrectos")
        }

    }else{
        const user = usuarios.find((user) => user.email === email && user.password === password);
        if (user) {
            localStorage.setItem("loggedIn", "true");
            window.location.replace("/api.html");
        } else {
            alert("Usuario y/o contraseña incorrectos")
        }
    }

}
