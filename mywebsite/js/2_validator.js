console.log("validating forms");

function validateForm() {
  let valid = true;

  //check form validity-->
  //agar form invalid nikla to ham valid--false

  const nameValue = document.getElementById("name").value.trim();
  const emailValue = document.getElementById("email").value.trim();
  const passwordValue = document.getElementById("password").value.trim();

  const nameErrorBox = document.getElementById("nameError");
  const emailErrorBox = document.getElementById("emailError");
  const passwordErrorBox = document.getElementById("passwordError");

  let nameError = "";
  let emailError = "";
  let passwordError = "";
  //name validation
  if (nameValue === "") {
    nameError = "Name is required !!";
    valid = false;
  } else if (nameValue.length <= 3) {
    nameError = "Name must be atleast 4 characters long !";
    value = false;
  } else {
    nameError = "";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //email validation
  if (emailValue === "") {
    emailError = "Email Id is required !!";
    valid = false;
  } else if (!emailRegex.test(emailValue)) {
    emailError = "Invalid Email !! (abc@gmail.com)";
    valid = false;
  } else {
    emailError = "";
  }

  //passowrd validation
  if (passwordValue === "") {
    passwordError = "Password is required !!";
    valid = false;
  } else {
    passwordError = "";
  }

  if (valid) {
    console.log("form is valid");
  } else {
    console.log("form is invalid");
    console.log(nameError);
    console.log(emailError);
    console.log(passwordError);
    if (nameError) {
      nameErrorBox.textContent = nameError;
    } else {
      nameErrorBox.textContent = "";
    }
    if (emailError) {
      emailErrorBox.textContent = emailError;
    } else {
      emailErrorBox.textContent = "";
    }
    if (passwordError) {
      passwordErrorBox.textContent = passwordError;
    } else {
      passwordErrorBox.textContent = "";
    }
  }

  return valid;
}
