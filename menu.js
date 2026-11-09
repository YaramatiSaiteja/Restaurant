let btnElement = document.getElementById("button1");
let loggedInUser = localStorage.getItem("loggedInUser");
let logoutBtn = document.getElementById("logoutBtn");
let welcomeUser = document.getElementById("welcomeUser");

// check if the user is logged in
if(!loggedInUser){
    window.location.href = "login.html";
}
else {
     welcomeUser.textContent = "Welcome, " + loggedInUser;
}


// Logout 
logoutBtn.addEventListener("click",function(){
    localStorage.removeItem("loggedInUser");
    window.location.href = "landing.html";
});




