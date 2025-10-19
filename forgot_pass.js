const input = document.getElementById("recoveryInput");
    const btn = document.getElementById("resetBtn");

    btn.addEventListener("click", function (event) {
      event.preventDefault();

      const value = input.value.trim();

      if (value === "") {
        alert("Please enter your email or phone number!");
        return;
      }

      alert("A password reset link has been sent to: " + value);

      setTimeout(() => {
        window.location.href = "Login_page.html";
      }, 2000);
    });