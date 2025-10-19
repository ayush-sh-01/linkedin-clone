// Select elements
let emailInput = document.querySelector("#emailorphone input");
let passwordInput = document.querySelector("#password input");
let checkbox = document.querySelector("#checkbox input");
let signinBtn = document.getElementById("signinBtn");

// Function for validation
function validateLogin(event) {
  // prevent page from changing before validation
  event.preventDefault();

  let email = emailInput.value.trim();
  let password = passwordInput.value.trim();

  if (email === "" || password === "") {
    alert("Please fill all the details");
    return;
  }

  if (!checkbox.checked) {
    alert("Please check 'Keep me logged in' before signing in");
    return;
  }

  alert("You can Sign in. All details are recorded.");

  window.location.href = "secondpg.html";
}

signinBtn.addEventListener("click", validateLogin);
