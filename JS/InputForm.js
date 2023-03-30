// UC1 - User needs to enter a valid first name,
// First name should start with capital letters and need to have minimum three characters

const NAME_REGEX = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input',function(){
    if(NAME_REGEX.test(text.value)){
        textError.textContent = "";
    }
    else{ textError.textContent = "NAME is Incorrect";}
});

//UC2 - User needs to enter a valid email id. E.g. abc.xyz@ymail.co.in
//Email has 3 mandatory parts (abc, ymail & co) and 2 optional (xyz & in) with @ and . placed at suitable positions

const EMAIL_REGEX = RegExp("^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$");
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input',function(){
    if(EMAIL_REGEX.test(email.value)){
        emailError.textContent = "";
    }
    else{
        emailError.textContent = "EMAIL is incorrect";
    }
});

// UC3: User need to follow mobile number format of 2-digit country code followed by 10-digit number

const PHONE_REGEX = RegExp('^[0-9]{1,2}\\s{1}[0-9]{10}$');
const telephone = document.querySelector('#tel');
const telephoneError = document.querySelector('.tel-error');
telephone.addEventListener('input', function() {
    if (PHONE_REGEX.test(telephone.value)) {
        telephoneError.textContent = "";
    } 
    else {
        telephoneError.textContent = "TELEPHONE NUMBER Is Incorrect";
    }
});

//UC5: User needs to follow pre-defined password rules : should have minimum 8 characters, at least one upper case, 
//at least one numeric number and exactly one special character

const PASSWORD_REGEX = RegExp('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,}$');
const password = document.querySelector('#pwd');
const passwordError = document.querySelector('.pwd-error');
password.addEventListener('input', function() {
    if (PASSWORD_REGEX.test(password.value)) {
        passwordError.textContent = "";
    } else {
        passwordError.textContent = "PASSWORD Is Incorrect";
    }
});

const salary = document.qurySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function(){
    out.textContent = salary.value;
});