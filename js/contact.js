function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  const errorMessage = document.getElementById("errorMessage");
  const form = document.getElementById("contactForm").reset();
  const submitBtn = document.getElementById("submit-btn");

  errorMessage.style.display = "block";

  var error;
  if (name.length < 5) {
    error = "Please enter your full name";
    errorMessage.innerHTML = error;
    return false;
  }
  if (email.indexOf("@") === -1 || email.length < 6) {
    error = "Please enter a valid email";
    errorMessage.innerHTML = error;
    return false;
  }
  if (subject.length < 15) {
    error = "Please enter morethan 15 characters";
    errorMessage.innerHTML = error;
    return false;
  }
  if (message.length <= 25) {
    error = "Please enter more than 25 characters";
    errorMessage.innerHTML = error;
    return false;
  }

  alert("Form submitted successfully!");
  submitBtn.onclick = () => {
    location.href = "/index.html";
  };

  return true;
}
