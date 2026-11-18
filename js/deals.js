let containerEl = document.getElementById("deals-container");
let loggedInUser = localStorage.getItem("loggedInUser");
let welcomeUserEl = document.getElementById("welcomeUser");
let logoutBtn = document.getElementById("logoutBtn");

    if (!loggedInUser) {
        window.location.href = "login.html";
    } else {
        welcomeUserEl.textContent = "Welcome, " + loggedInUser;
    }

 logoutBtn.addEventListener("click",function(){
    localStorage.removeItem("loggedInUser");
    window.location.href = "landing.html";
});