import createNav from "./components/nav"
import   "../scss/login.scss"


createNav()

const loader = document.querySelector('.loader');


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
        
    } 
  
    else if(password.value.length < 8){
        showAlert('password should be 8 letters long');
    } 
  
    
    else if(!tac.checked){
        showAlert('you must agree to our terms and conditions');
    } else{
        showAlert(('your login is successfull')),3000;
        location.href='./index.html'

    }
})

const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    let alertImage = document.querySelector('.alert-img')
    alertMsg.innerHTML = msg;
    if (msg== 'your login is successfull') {
        alertMsg.style.color= "green"
        alertImage.style.display="none"
        alertBox.style.height="80px"

    }
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000);
    email.value=""
    password.value=""
    

}


