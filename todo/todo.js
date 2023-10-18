const inputBox=document.getElementById("inputbox");
const list=document.getElementById("list");

function addText(){
    if(inputBox.value===''){
        alert("Pleace Write Something")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        list.appendChild(li);

        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
    saveText();

}

list.addEventListener('click',function(click){
    if(click.target.tagName==="LI"){
        click.target.classList.toggle("throw");
        saveText();
    }
    else if(click.target.tagName==="SPAN"){
        click.target.parentElement.remove();
        saveText();
    }

});

function saveText(){
    localStorage.setItem("data",list.innerHTML);
}

function showText(){
    list.innerHTML=localStorage.getItem("data");
}

showText();
















