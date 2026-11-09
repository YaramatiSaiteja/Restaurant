let btnElement = document.getElementById("button1");
let loggedInUser = localStorage.getItem("loggedInUser");
let logoutBtn = document.getElementById("logoutBtn");
let welcomeUser = document.getElementById("welcomeUser");

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


btnElement.addEventListener("click", function() {
    let menuElement = document.getElementById("menu");
    menuElement.style.display = "block";
});
