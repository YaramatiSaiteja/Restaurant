let containerEl = document.getElementById("deals-container");
let loggedInUser = localStorage.getItem("loggedInUser");
let welcomeUserEl = document.getElementById("welcomeUser");
let logoutBtn = document.getElementById("logoutBtn");

    if (loggedInUser) {
        welcomeUserEl.textContent = `Welcome, ${loggedInUser.value}!`;
    } else {
        welcomeUserEl.textContent = "Welcome, Guest!";
    }

 logoutBtn.addEventListener("click",function(){
    localStorage.removeItem("loggedInUser");
    window.location.href = "landing.html";
});