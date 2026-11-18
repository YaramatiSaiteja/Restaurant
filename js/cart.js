let logoutBtn = document.getElementById("logoutBtn");
let welcomeUser = document.getElementById("welcomeUser");
let loggedInUser = localStorage.getItem("loggedInUser");

logoutBtn.addEventListener("click",function(){
    localStorage.removeItem("loggedInUser");
    window.location.href = "landing.html";
});

if(loggedInUser){
    welcomeUser.textContent = "Welcome, " + loggedInUser;
}
else {
    welcomeUser.textContent = "Welcome, Guest";
}