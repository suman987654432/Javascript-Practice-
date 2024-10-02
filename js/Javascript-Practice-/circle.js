// console.log(Math.ceil(45.01));
// console.log(Math.floor(45.5));
// console.log(Math.round(45.5));

// console.log(Math.SQRT2);
// console.log(Math.SQRT1_2);
// console.log(Math.pow(3, 7));

// console.log(Math.abs(-89));
// console.log(Math.random());

let captchaCode = "";
const generateCaptcha = () => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    captchaCode = "";
    for (let i = 0; i < 6; i++) {
        captchaCode += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("captcha").innerText = "Captcha: " + captchaCode;
};


window.onload = () => {
    generateCaptcha();
};


const registration = () => {
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let pass = document.querySelector(".pass").value;
    let cpass = document.querySelector(".cpass").value;
    let mobile = document.querySelector(".mobile").value;
    let captchaInput = document.querySelector(".captchaInput").value;

    if (!email.includes("@") || !email.includes(".com")) {
        alert("Please enter a valid email.");
        return false;
    } else if (pass === "") {
        alert("Please enter a password.");
        return false;
    } else if (pass !== cpass) {
        alert("Passwords do not match.");
        return false;
    } else if (mobile.length !== 10 || isNaN(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return false;
    }

    
    const passwordStrengthRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/;
    if (!passwordStrengthRegex.test(pass)) {
        alert("Password must contain at least one number, one lowercase letter, one uppercase letter, and one special character.");
        return false;
    }

    if (captchaInput !== captchaCode) {
        alert("Incorrect captcha, please try again.");
        generateCaptcha(); 
        return false;
    }

    alert("Registration successful!");
    return true;
};
