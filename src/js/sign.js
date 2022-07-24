import createNav from "./components/nav"
import   "../scss/sign.scss"


createNav()



const submitBtn = document.querySelector('.submit-btn');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number');
const tac = document.querySelector('#terms-and-cond');
const notification = document.querySelector('#notification');
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

submitBtn.addEventListener('click', () => {

     if(!email.value.match(mailformat)){
        showAlert('your email not valid , please enter avalid mail :xyz@domain.com');
        email.value=""
        
    } 
    else if(name.value.length < 2){
        showAlert('name should be 3 letters long');
    } 
    
    else if(password.value.length < 8){
        showAlert('password should be 8 letters long');
        password.value=""
    } 
    
    else if(!number.value.length){
        showAlert('enter your phone number');
        
    } 
    else if(!Number(number.value) || number.value.length < 10){
        showAlert('invalid number, please enter valid one');
        number.value=""
    } 
    
    else if(!tac.checked){
        showAlert('you must agree to our terms and conditions');
    } else{
        showAlert(('your account created ')),3000;
        // location.href='./login.html'
        
    }
})

const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    let alertImage = document.querySelector('.alert-img')
    alertMsg.innerHTML = msg;
    if (msg== 'your account created ') {
        alertMsg.style.color= "green"
        alertImage.style.display="none"
        alertBox.style.height="80px"
        setTimeout(() => {
            location.href='./login.html'  ;
        }, 3000);

    }
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000);

   
    
    
    
    
    

}


