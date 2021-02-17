function validateForm(event) 
    event.preventDefault();


if (firstName.value.trim().length > 0) {
        firstNameError.style.display = "none";
} else {
        firstNameError.style.display = "block";
    }

if (lastName.value.trim().length > 3) {
        lastNameError.style.display = "none";
    } else {
    lastNameError.style.display = "block";
}


function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}
