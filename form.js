//variables
console.log("form.js connected!");
const characterLimit = 500;
let remaining = 500;

const emailAddress = document.getElementById("email");
const usersName = document.getElementById("name");
const comments = document.getElementById("comments");

function checkEmail(emailAddress){
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (pattern.test(emailAddress.value())){
        emailAddress.setCustomValidity("");
    }
    else{
        emailAddress.setCustomValidity("Please enter a valid email address, with an @ and a valid domain");
    }
}
emailAddress.addEventListener("input", checkEmail);