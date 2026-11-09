let username = document.getElementById("username");
let password = document.getElementById("password");
let registerButton = document.getElementById("registerButton");
let passwordError = document.getElementById("passwordError");
let usernameError = document.getElementById("usernameError");
let loginForm = document.getElementById("loginForm");
let logoutBtn = document.getElementById("logoutBtn");


username.addEventListener("blur",function(){
  usernameError.textContent = username.value.trim() === "" ? "Username is required" : "";
});

password.addEventListener("blur",function(){
  passwordError.textContent = password.value === "" ? "Password is required" : "";
});


loginForm.addEventListener("submit", function(event){
  event.preventDefault();
  const name = username.value.trim();
  const pass = password.value;
  
  usernameError.textContent = name === "" ? "Username is required" :"";
  passwordError.textContent = pass === "" ? "Password is required" :"";

  if(name === "" || pass === ""){
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")|| "[]");

  if(!users.some(user => user.username.toLowerCase() === name.toLowerCase() && user.password === pass)){
    passwordError.textContent = "Invalid username or password.";
    return;
  }

  localStorage.setItem("loggedInUser", username);

  window.location.href = "menu.html";
});
