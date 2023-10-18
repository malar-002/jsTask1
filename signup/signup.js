const form= document.querySelector('#loginForm');
const username= document.querySelector('#username');
const email= document.querySelector('#email');
const password= document.querySelector('#password');
const mobile= document.querySelector('#mobile');

form.addEventListener('submit',(e)=>{
   
   if( !validateData()){
   e.preventDefault();
   
   }
    
    
   
});


function validateData(){
    const usernameVal=username.value.trim();
    const emailVal=email.value.trim();
    const passVal=password.value.trim();
    const mobileVal=mobile.value.trim();

    if(usernameVal===''){
        setError(username,'Please Enter Your Username');
    }
    else{
        valid(username);
    }

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

    if(mobileVal===''){
        setError(mobile,'Please Enter Your Mobile Number');
    }
    else if(mobileVal.length<10 || mobileVal.length>10){
        setError(mobile,'Enter Valid Mobile Number');
    }
    else{
        valid(mobile);
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
