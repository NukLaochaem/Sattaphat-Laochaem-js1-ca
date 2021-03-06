const form = document.querySelector (".contact_form");

const fullName = document.querySelector ("#name");
const fullNameError = document.querySelector(".name_error");

const email = document.querySelector ("#email");
const emailError = document.querySelector (".email_error");

const address = document.querySelector ("#address");
const addressError = document.querySelector(".address_error");

const subject = document.querySelector ("#subject")
const subjectError = document.querySelector (".subject_error")

function validateForm(event){
    event.preventDefault();

    if(fullName.value.trim().length > 0){
        fullNameError.style.display = "none"
    } else {
        fullNameError.style.display = "block"
    }

    if(subject.value.trim().length > 9){
        subjectError.style.display = "none"
    } else {
        subjectError.style.display = "block"
    }


    if(Emailvalidate(email.value) === true){
        emailError.style.display = "none"
    } else {
        emailError.style.display = "block"
    }


    if(address.value.trim().length > 24){
        addressError.style.display = "none"
    } else {
        addressError.style.display = "block"
    }
}




form.addEventListener("submit", validateForm)


function Emailvalidate(email){
    const regEx = /\S+@\S+\.\S+/;
    const emailPattern = regEx.test(email);
    return emailPattern;
}



