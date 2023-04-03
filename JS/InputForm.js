// UC1 - User needs to enter a valid first name,
// First name should start with capital letters and need to have minimum three characters

const NAME_REGEX = RegExp('^[A-Z]{1}[a-z]{2,}\\s[A-Z]{1}[a-z]{2,}$');
const text = document.querySelector('#name');
const nameError = document.querySelector('.name-error');
text.addEventListener('input',function(){
    if(NAME_REGEX.test(text.value)){
        nameError.textContent = "";
        text.style.border = '2px solid green';
    }
    else{ 
        nameError.textContent = " NAME is Incorrect";
        text.style.border = '2px solid red';
    }
});

//UC2 - User needs to enter a valid email id. E.g. abc.xyz@ymail.co.in
//Email has 3 mandatory parts (abc, ymail & co) and 2 optional (xyz & in) with @ and . placed at suitable positions

const EMAIL_REGEX = RegExp("^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$");
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input',function(){
    if(EMAIL_REGEX.test(email.value)){
        emailError.textContent = "";
        email.style.border = '2px solid green';
    }
    else{
        emailError.textContent = " EMAIL is incorrect";
        email.style.border = '2px solid red';
    }
});

// UC3: User need to follow mobile number format of 10-digit number

const MOBILE_REGEX = RegExp('^[6-9]{1}[0-9]{9}$');
const mobile = document.querySelector('#mob');
const mobileError = document.querySelector('.mob-error');
mobile.addEventListener('input', function() {
    if (MOBILE_REGEX.test(mobile.value)) {
        mobileError.textContent = "";
        mobile.style.border = '2px solid green';
    } 
    else {
        mobileError.textContent = " Mobile Is Incorrect";
        mobile.style.border = '2px solid red';
    }
});

//UC5: User needs to follow pre-defined password rules : should have minimum 8 characters, at least one upper case, 
//at least one numeric number and exactly one special character

const PASSWORD_REGEX = RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=[^!@#$%^&*]*[!@#$%^&*][^!@#$%^&*])).{8,15}');
const password = document.querySelector('#pwd');
const passwordError = document.querySelector('.pwd-error');
password.addEventListener('input', function() {
    if (PASSWORD_REGEX.test(password.value)) {
        passwordError.textContent = "";
        password.style.border = '2px solid green';
    } else {
        passwordError.textContent = " PASSWORD Is Incorrect";
        password.style.border = '2px solid red';
    }
});

const URL_REGEX = RegExp('^[w]{3}.[a-zA-Z0-9]+.[a-zA-Z]{2,3}$');
const url = document.querySelector('#url')
const urlError = document.querySelector('.url-error');
url.addEventListener('input', function() {
  if (URL_REGEX.test(url.value)) {
        urlError.textContent = "";
        url.style.border = '2px solid green';
  } else {
        urlError.textContent = " URL is Incorrect";
        url.style.border = '2px solid red';
  }
});

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function(){
    output.textContent = salary.value;
});

//Function to implement submit button
function check(){
    var textInputs = [
        document.getElementById('name').value,
        document.getElementById('pwd').value,
        document.getElementById('email').value,
        document.getElementById('url').value,
        document.getElementById('mob').value,
        document.getElementById('date').value,
        document.getElementById('salary').value
    ];
    var result = textInputs.join(' ');
    document.getElementById('spanresult').textContent = result;
}

//Get All Value by ID
let sendBtn = document.getElementById('send');
let resetBtn = document.getElementById('reset');
let form = document.getElementById('myForm');


//Now Working For Reset Button
resetBtn.addEventListener('click', (e) => {
    let name = document.getElementById('name');
    let password = document.getElementById('pwd');
    let email = document.getElementById('email');
    let url = document.getElementById('url');
    let phone = document.getElementById('mob');
    let date = document.getElementById('date');
    let salary = document.getElementById('salary');

    //Set Value
    name.value = '';
    password.value = '';
    email.value = '';
    url.value = '';
    phone.value = '';
    date.value = '';
    salary.value = '';
});

//Now working for Submit Button
sendBtn.addEventListener('click', (e) => {
    let name = document.getElementById('name');
    let password = document.getElementById('pwd');
    let email = document.getElementById('email');
    let url = document.getElementById('url');
    let phone = document.getElementById('mob');
    let date = document.getElementById('date');
    let salary = document.getElementById('salary');

    //Set Value And LocalStorage
    localStorage.setItem('name', name.value);
    localStorage.setItem('pwd', password.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('url', url.value);
    localStorage.setItem('tel', phone.value);
    localStorage.setItem('date', date.value);
    localStorage.setItem('salary', salary.value);
});
