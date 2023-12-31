//Random Number Generated for Guessing 
let randomNumber = undefined;
let attempCounting = 0;
document.addEventListener("DOMContentLoaded",()=>{
    
   randomNumber = Math.round(Math.random()*100);
   if(randomNumber == 0){
       randomNumber++;
   }
   
});
   

let inputNumber = document.querySelector('input'); 
const warningMessage = document.getElementById('warning-message');

const guesses = document.getElementById('guesses');
const guessRemaining = document.getElementById('guess-remaining');

let guessRemainingCount = 10;


// Getting Guess Number 
document.querySelector('form').addEventListener("submit",(e)=>{
   
   e.preventDefault();
   attempCounting++;
//Showing Warning Message, If Guess is less than 1 && greater than 100
   if(inputNumber.value < 1 || inputNumber.value > 100){
    
    warningMessage.classList.remove('hidden');
     
   }//Showing winning message Guess is Correct
   else if(inputNumber.value == randomNumber){
      warningMessage.style.color = "#6ab04c";
      warningMessage.textContent = `Congratulations You Win 🎉👏`;
      warningMessage.classList.remove('hidden');


      const attempCounts = document.getElementById('attempt-counts');
      
      attempCounts.textContent = attempCounting;

      document.getElementById('attempts').classList.remove('hidden');

      document.querySelector("button[type ='submit']").classList.add('hidden');

      guessRecordUpdation();
   }
   else{

      warningMessage.classList.add('hidden');

      if(inputNumber.value < randomNumber){
         warningMessage.classList.remove('hidden');
         warningMessage.textContent = "Number Is Too Low";
      }

      else if(inputNumber.value > randomNumber){
         warningMessage.classList.remove('hidden');
         warningMessage.textContent = "Number Is Too High";
      }

  

    //Showing "Game Over" If All 10 Attempts gets Over
      if(guessRemainingCount < 1){
      warningMessage.textContent = "Game Over";
      warningMessage.classList.remove('hidden');
      }//Else Allowing User TO Keep Trying
      else{
         guessRecordUpdation();
      }
    
   }

});


document.getElementById('reset').addEventListener("click",()=>{

   guessRemainingCount = 10;

   const allPreviousGuesses = document.querySelectorAll('#guesses h3');

   for(let i=1 ;i< allPreviousGuesses.length; i++){
      guesses.removeChild(allPreviousGuesses[i]);
   }
 
   randomNumber = Math.round(Math.random()*100);
   if(randomNumber == 0){
       randomNumber++;
   }
   
   guessRemaining.textContent = guessRemainingCount;
   warningMessage.classList.add('hidden');

   
   document.getElementById('attempts').classList.add('hidden');
   
});

//Show Answer Button
const showAnswer =  document.getElementById('show-answer');
showAnswer.addEventListener("click",()=>{
showAnswer.textContent = randomNumber;

setTimeout(()=>{
   showAnswer.textContent = 'Show Answer';
},850);

});

function guessRecordUpdation(){
    
   const guessNumber = document.createElement('h3');
     
   guessNumber.textContent = `${inputNumber.value},`;
   guessNumber.style.color = 'yellow';
   guesses.append(guessNumber);

   --guessRemainingCount;
   guessRemaining.textContent = `${guessRemainingCount}`;
}