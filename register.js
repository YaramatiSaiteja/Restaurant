
const username = document.getElementById("username");
const password = document.getElementById("password");
const registerForm = document.getElementById("registerForm");

const passwordError = document.getElementById("passwordError");
const usernameError = document.getElementById("usernameError");

username.addEventListener("blur", function () {
    usernameError.textContent = username.value.trim() === ""
        ? "Username is required."
        : "";
});

password.addEventListener("blur", function () {
    passwordError.textContent = password.value === ""
        ? "Password is required."
        : "";
});

registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = username.value.trim();
    const pass = password.value;

    // Validate inputs
    usernameError.textContent = name === ""
        ? "Username is required."
        : "";

    passwordError.textContent = pass === ""
        ? "Password is required."
        : "";

    if (name === "" || pass === "") {
        return;
    }

    // Retrieve existing users
    const users = JSON.parse(
        localStorage.getItem("users") || "[]"
    );

    // Check for duplicate username
    const existingUser = users.find(
        user => user.username.toLowerCase() === name.toLowerCase()
    );

    if (existingUser) {
        usernameError.textContent = "Username already exists.";
        return;
    }

    // Every public registration gets the Customer role
    const newUser = {
        id: Date.now(),
        username: name,
        password: pass,
        role: "customer"
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");

    registerForm.reset();
});
