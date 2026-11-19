//variables
console.log("form form form");
const characterLimit = 500;
let remaining = 500;
let form_errors=[];

const emailAddress = document.getElementById("email");
const usersName = document.getElementById("name");
const comments = document.getElementById("comments");
const currCharCount = document.getElementById("char-count");


//email check
function checkEmail(){
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(pattern.test(emailAddress.valueMissing)){
        emailAddress.setCustomValidity("Please fill in your email ;)");
    }
    else if (pattern.test(emailAddress.value)){
        emailAddress.setCustomValidity("");
    }
    else{
        emailAddress.setCustomValidity("Please enter a valid email address, with an @ and a valid domain");
    }
}

function charCount(theInput){
    const input = theInput.target;
    const currValidity = input.validity;
    if (currValidity.valueMissing){
        input.setCustomValidity("This field is empty! Please fill it out");
    }
    else if (currValidity.tooLong){
        input.setCustomValidity("You are over the character limit!");
    }
    else if (currValidity.tooShort){
        input.setCustomValidity("You are under the character count");
    }
    else{
        input.setCustomValidity("");
    }
    input.reportValidity();
}

function charactersRemaining(text, limit) {
    return limit - text.length;
}

function countdown(theInput){
    const input = theInput.target;
    const remaining = charactersRemaining(input.value, characterLimit);
    if (remaining<=0){
        currCharCount.textContent = `${remaining*-1} over the limit`
    }
    else if (remaining<50){
        currCharCount.textContent = `${remaining} characters left`;
    }

    else{
        currCharCount.textContent ="";
    }
}


emailAddress.addEventListener("input", checkEmail);
usersName.addEventListener("input", charCount);
comments.addEventListener("input", charCount);
usersName.addEventListener("input", countdown);
comments.addEventListener("input", countdown);