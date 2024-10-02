function validateForm(e) {
    let email = document.querySelector(".email").value;
    let pass = document.querySelector(".pass").value;

    if (email === "") {
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
    }

  
    return true;
}
