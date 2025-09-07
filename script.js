// Register Form
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("fullName").value;
      const email = document.getElementById("regEmail").value;
      const password = document.getElementById("regPassword").value;
      const userType = document.querySelector('input[name="userType"]:checked').value;

      // Save user data in localStorage (demo purpose only)
      localStorage.setItem("user", JSON.stringify({ name, email, password, userType }));
      alert("Registration Successful!");
      window.location.href = "login.html";
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;
      const user = JSON.parse(localStorage.getItem("user"));

      if (user && user.email === email && user.password === password) {
        document.getElementById("loginMessage").textContent = `Welcome back, ${user.name}!`;
      } else {
        document.getElementById("loginMessage").textContent = "Invalid credentials!";
        document.getElementById("loginMessage").style.color = "red";
      }
    });
  }
});
