let username = document.getElementById("username");
let password = document.getElementById("password");
let registerButton = document.getElementById("registerButton");
let passwordError = document.getElementById("passwordError");
let usernameError = document.getElementById("usernameError");
let registerForm = document.getElementById("registerForm");

registerButton.addEventListener("click", function(event){
  event.preventDefault();
});

username.addEventListener("blur",function(){
  if(username.value ===""){
    usernameError.textContent = "Username is required.";
  } else {
    usernameError.textContent = "";
  }
});

password.addEventListener("blur",function(){
  if(password.value ===""){
    passwordError.textContent = "Password is required.";
  } else {
    passwordError.textContent = "";
  } 
});