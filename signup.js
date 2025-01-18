const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repeatPassword = document.getElementById('repeatpassword');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    let errors =[];

    if(firstname){
        errors = getSignupFormErrors[firstname.value, email.value, password.value, repeatPassword.value];
    }
    else{
        errors = getLoginFormErrors[email.value, password.value];
    }
    if (errors.length > 0) {
        e.preventDefault();
        errorMessage.innerText = errors.join(', ');
    }
});

function getSignupFormErrors(firstname, email, password, repeatPassword) {
    let errors = [];
    if (!firstname) {
        errors.push('First name is required');
        firstname.parentElement.classList.add('incorrect')
    }
    if (!email) {
        errors.push('Email is required');
        email.parentElement.classList.add('incorrect')
    }
    if (!password) {
        errors.push('Password is required');
        password.parentElement.classList.add('incorrect')
    }
    if (password.length < 8) {
        errors.push('Password must be at least 8 characters long');
        password.parentElement.classList.add('incorrect')
    }
    if (password !== repeatPassword) {
        errors.push('Passwords do not match');
        password.parentElement.classList.add('incorrect')
        repeatPassword.parentElement.classList.add('incorrect')
    }
    return errors;
}

function getLoginFormErrors(email, password){
    if (!email) {
        errors.push('Email is required');
        email.parentElement.classList.add('incorrect')
    }
    if (!password) {
        errors.push('Password is required');
        password.parentElement.classList.add('incorrect')
    }
    return errors;
}

const allInputs = [firstname, email, password, repeatPassword].filter(input => input != null).filter(input => input != null)

allInputs.forEach(input => {
  input.addEventListener('input', () => {
    if(input.parentElement.classList.contains('incorrect')){
      input.parentElement.classList.remove('incorrect')
      errorMessage.innerText = ''
    }
  })
})

