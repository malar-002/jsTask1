const form= document.querySelector('#loginForm');
const email= document.querySelector('#email');
const password= document.querySelector('#password');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateData();
})

function validateData(){
    const emailVal=email.value.trim();
    const passVal=password.value.trim();


    if(emailVal===''){
        setError(email,'Please Enter Your Email');
    }
    else if(!validateEmail(emailVal)){
        setError(email,'Please Enter valid Email');
    }
    else{
        valid(email);
    }
    
    
    if(passVal===''){
        setError(password,'Please Enter Your Password');
    }
    else if(passVal.length<8){
        setError(password,'Password must have 8 digit character');
    }
    else{
        valid(password);
    }
    

}

function setError(element,msg){
    const inputGroup= element.parentElement;
    const errorElement= inputGroup.querySelector('.required');

    errorElement.innerText=msg;
   
}

function valid(element){
    const inputGroup= element.parentElement;
    const errorElement= inputGroup.querySelector('.required');

    errorElement.innerText='';

}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
};