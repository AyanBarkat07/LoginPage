document.getElementById("loginBtn").addEventListener("click", function () {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Check if the username and password are correct (for demonstration purposes, use a simple condition)
    if (username === "user" && password === "password") {
        // Redirect to a new page or perform actions after successful login
        alert("Login successful!");
    } else {
        // Display error message with animation
        errorMessage.textContent = "Invalid username or password. Please try again.";
        errorMessage.style.animation = "shake 0.5s";
        setTimeout(function () {
            errorMessage.style.animation = "";
        }, 500);
    }
});
