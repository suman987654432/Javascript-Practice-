function registration() {
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let pass = document.querySelector(".pass").value;
  let cpass = document.querySelector(".cpass").value;
  let mobile = document.querySelector(".mobile").value;

  if (name === "") {
    window.alert("Please enter your name.");
    document.querySelector(".name").focus();
    return false;
  } else if (email === "") {
    window.alert("Please enter your email.");
    document.querySelector(".email").focus();
    return false;
  } else if (!email.includes("@")) {
    window.alert("Please insert a valid email with '@'.");
    document.querySelector(".email").focus();
    return false;
  } else if (!email.includes(".com")) {
    window.alert("Please insert a valid email with '.com'.");
    document.querySelector(".email").focus();
    return false;
  } else if (pass === "") {
    window.alert("Please enter a password.");
    document.querySelector(".pass").focus();
    return false;
  } else if (cpass === "") {
    window.alert("Please confirm your password.");
    document.querySelector(".cpass").focus();
    return false;
  } else if (pass !== cpass) {
    window.alert("Passwords do not match.");
    document.querySelector(".cpass").focus();
    return false;
  } else if (mobile === "") {
    window.alert("Please enter a mobile number.");
    document.querySelector(".mobile").focus();
    return false;
  } else if (mobile.length !== 10) {
    window.alert("Mobile number must be 10 digits.");
    document.querySelector(".mobile").focus();
    return false;
  } else if (isNaN(mobile)) {
    window.alert("Please enter only numeric values for the mobile number.");
    document.querySelector(".mobile").focus();
    return false;
  }

  
  const passwordStrengthRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/;
  if (!passwordStrengthRegex.test(pass)) {
    window.alert("Password must contain at least one number, one lowercase letter, one uppercase letter, and one special character.");
    document.querySelector(".pass").focus();
    return false;
  }

  // If all validations pass
  window.alert("Registration successful!");
  return true;
}
