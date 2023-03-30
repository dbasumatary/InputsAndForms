// UC1 - User needs to enter a valid first name,
// First name should start with capital letters and need to have minimum three characters

const NAME_REGEX = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
const text= document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input',function(){
    if(NAME_REGEX.test(text.value))
        textError.textContent = "";
    else textError.textContent = "Name is Incorrect";
});

const salary = document.qurySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function(){
    out.textContent = salary.value;
});