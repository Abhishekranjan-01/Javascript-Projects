//Array Of Questions And Answers
import { arrayOfQuetionsAndOptions } from "./questions.js";

//Importing Score Count
//Next Button For Loading New Question
const nextButton = document.querySelector("button[name='next']");

//For Storing Previous Qustion Before Loading New Question
const prevQuestion = [];

//For Displaying Current Question Count On Form
const questionCounter=document.getElementById('CurrentQuestionCount'); 

//Won't allow Load next question after final question loaded
let nextClickCount=9;

//Maintaing Current Question Count
let questionCount = 0;

//countdown timer
let timer=15;

//For Displaying Countdown Timer On Form
let countDownTimer = document.getElementById('timer');

let timerId = null;

//For Doing Game Over
function gameOver(){
    
    clearInterval(timerId); 
    countDownTimer.innerText = `Game Over`;  
}


//Starting Timer
function statTimer(){

    //Clearing Previous Timer And Starting Again From '15'
    clearInterval(timerId);
    timer=15;

    timerId = setInterval(()=>{
               
        if(timer<0){

            //If Last Question Reached and Timer Is Also Reached To '0'
            if(questionCount>=10){
                // lastQuestionState=false;
                gameOver();                
                return 0;
            }

            //Else Not The Last Question, Then Load Next Question After Resetting The Timer
            clearInterval(timerId);
            timer=15;
            newQuestion();
                        
        }

        //Updating The Timer Every Second On The Browser/Form
        countDownTimer.innerText = timer;
        timer--;

        console.log(timer);
        
    },1000);
}


window.addEventListener("load",(e)=>{

    //Removing Qustion Of Html And Adding it Dynamically
    const prevQuesstionSetContainer = document.querySelector("[data-container] div");
    prevQuesstionSetContainer.remove();
   
    // Main Container Under Which New Question Will Be Kept
    let mainContainer = document.querySelector("[data-container='main-container']");

    // Creating New Question Container
    const currentQustionContainer = document.createElement("div");

    // Creation Of Data Attribute
    currentQustionContainer.setAttribute("data-container","Container For Questions And Options");
    
    // Saving The New Question and Their Options In New Question Container
    currentQustionContainer.innerHTML = arrayOfQuetionsAndOptions[questionCount];
    
    // Saving New Question Container in Main Container
    mainContainer.append(currentQustionContainer);

    questionCount++;
    questionCounter.innerText = questionCount;

    statTimer();
    console.log("Window Lister Executed");                 
});



//For Loading New Question Set If Time Slot Ends
function newQuestion()
{

    //Will Not Load Next Question If Last Question Is Already Loaded
    nextClickCount--;
    if(nextClickCount<0)
    {
        console.log("---",nextClickCount);
        return 0;
    }

    //Else Start The Timer     
    statTimer();

    const prevQustionContainer = document.querySelector("[data-container='Container For Questions And Options']");

        /*
        Removing Current Questsion Set and Saving it Into an Array where It Hold Previous Question And Ans If User attempted,that state Correct Or Incorrect Or Left Without attempt Will Be Get Saved.
        */
        
        prevQuestion.push(prevQustionContainer.parentNode.removeChild(prevQustionContainer));

        // Main Container Under Which New Question Will Be Kept
        const mainContainer = document.querySelector("[data-container='main-container']");
     
        // Creating New Question Container
        const currentQustionContainer = document.createElement("div");
    
        // Creation Of Data Attribute
        currentQustionContainer.setAttribute("data-container","Container For Questions And Options");
    
        // Saving The New Question and Their Options In New Question Container
        currentQustionContainer.innerHTML = arrayOfQuetionsAndOptions[questionCount];
    
        // Saving New Question Container in Main Container (Load Next Question)
        mainContainer.append(currentQustionContainer);

        //Increasing Question Count
        questionCount++;
        if(questionCount==10){
            nextButton.setAttribute("disabled","");
        }
    
        //Updating Question Count On Browser/Form
        questionCounter.innerText = questionCount;

        console.log("next Clicked");
}


//For Loading Next Question Set If Next Button CLicked
function loadNextQuestion(e){
    
    e.preventDefault();
    newQuestion();
    
}

nextButton.addEventListener("click",loadNextQuestion);