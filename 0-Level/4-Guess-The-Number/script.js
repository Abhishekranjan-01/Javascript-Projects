let randomNumber = undefined;
let inputNumber = document.querySelector('input'); 
const warningMessage = document.getElementById('warning-message');

// For Generating Random Number:-
document.addEventListener("DOMContentLoaded",()=>{
    
randomNumber = Math.round(Math.random()*100);
if(randomNumber == 0){
    randomNumber++;
}

});


// Getting Guess Number 
document.querySelector('form').addEventListener("submit",(e)=>{
   
   e.preventDefault();

//Showing Warning Message, If Guess is less than 1 && greater than 100
   if(inputNumber.value < 1 || inputNumber.value > 100){
    
    warningMessage.classList.remove('hidden');
        
   }else{
    warningMessage.classList.add('hidden');
   }

});
