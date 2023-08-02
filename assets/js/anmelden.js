const form = document.getElementById('signin');
const user = document.getElementById('user');
const email = document.getElementById('email');
const password = document.getElementById('password');
let userValid = false;
let emailValid = false;
let passwordValid = false;


user.addEventListener("focusout", e => {
    if(user.value !== '' && user.value.length > 5){
        userValid = true;
        user.classList.remove('is-invalid');
        user.classList.add('is-valid');  
    }else{
        user.classList.add('is-invalid');
        user.classList.remove('is-valid');
    }
})

 form.addEventListener('submit', function(event) { 
    event.preventDefault();

    if(user.value !== '' && user.value.length > 5){
        userValid = true;
        user.classList.remove('is-invalid');
        user.classList.add('is-valid');  
    }else{
        user.classList.add('is-invalid');
    }

    if(email.value.includes('@') && email.value.includes('.')){
        emailValid = true;
        email.classList.remove('is-invalid');
        email.classList.add('is-valid'); 
    }else{
        email.classList.add('is-invalid');
    }

    if(password.value !== '' && password.value.length > 5){
        passwordValid = true;
        password.classList.remove('is-invalid');
        password.classList.add('is-valid'); 
    }else{
        password.classList.add('is-invalid');
    }

    if(userValid === true && emailValid === true && passwordValid === true){
        anmelden();
        window.location.href = "./creator.html";
    }
    //console.info(user.value)
    
  });