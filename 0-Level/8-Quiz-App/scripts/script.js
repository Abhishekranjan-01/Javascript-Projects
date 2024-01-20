//Array Of Questions And Answers
import { arrayOfQuetionsAndOptions } from "./questions.js";

//For Adding Events In Question's options
import {addEventsInQuestionOne,addEventsInQuestionTwo,addEventsInQuestionThree,addEventsInQuestionFour,addEventsInQuestionFive,addEventsInQuestionSix,addEventsInQuestionSeven,addEventsInQuestionEight,addEventsInQuestionNine,addEventsInQuestionTen } from "./optionsClickEvents.js";

//Next Button For Loading New Question
const nextButton = document.querySelector("button[name='next']");

//Prev Button For Loading Previous Question
const prevButton = document.querySelector("button[name='prev']");

//For Storing Previous Qustion Before Loading New Question
const prevQuestion = [];

//For Displaying Current Question Count On Form
const questionCounter=document.getElementById('CurrentQuestionCount'); 

//Maintaing Current Question Count
let questionCount = 0;

//Storing Previous Question Count If Required
let prevQuestionCount = null; 

//countdown timer
let timer=15;

//For Displaying Countdown Timer On Form
let countDownTimer = document.getElementById('timer');

let timerId = null;

//For Updating Question Count That Was Occurred After Clicking On Prev Button
function updateQustionCount(){
    questionCount=(prevQuestionCount+1);
}


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
    
    //Adding Events In Options (li)
    addEventsInQuestionOne();

    questionCount++;
    questionCounter.innerText = questionCount;

    statTimer();
            
});



//For Loading New Question Set If Time Slot Ends
function newQuestion()
{
     
    statTimer();

    //Selection Current Question Loaded In Form 
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
    
    // Updating "PrevQuestion Count" For Traversing Previous Questions
    prevQuestionCount=(questionCount-1);

    // Saving New Question Container in Main Container (Load Next Question)
    mainContainer.append(currentQustionContainer);

    // Adding Events In Question 2
    if(questionCount == 1){addEventsInQuestionTwo();}
    // Adding Events In Question 3
    else if(questionCount == 2){addEventsInQuestionThree();}
    // Adding Events In QUestion 4
    else if(questionCount == 3){addEventsInQuestionFour();}
    // Adding Events In QUestion 5
    else if(questionCount == 4){addEventsInQuestionFive();}
    // Adding Events In QUestion 6
    else if(questionCount == 5){addEventsInQuestionSix();}
    // Adding Events In QUestion 7
    else if(questionCount == 6){addEventsInQuestionSeven();}
    // Adding Events In QUestion 8
    else if(questionCount == 7){addEventsInQuestionEight();}
    // Adding Events In QUestion 9
    else if(questionCount == 8){addEventsInQuestionNine();}
    // Adding Events In QUestion 10
    else if(questionCount == 9){ addEventsInQuestionTen();}


    //Increasing Question Count
    questionCount++;

    //Updating Question Count On Browser/Form
    questionCounter.innerText = questionCount;

}


//For Loading Next Question Set If Next Button CLicked
function loadNextQuestion(e){
    
    e.preventDefault();

    // Will Not Load Next or 11th Question If Already Reached To The Final Question
    if(questionCount >= 10){return 0;}

    newQuestion();
    
}

function loadPreviousQuestion(e){
    e.preventDefault();

    // Will Not Load New Question or "-1 question" If Already Reached To The 0th index question Final Question
    if(prevQuestionCount < 0){return 0;}

    //Selection Current Question Loaded In Form 
    const prevQustionContainer = document.querySelector("[data-container='Container For Questions And Options']");

    /*
    Removing Current Questsion Set and Saving it Into an Array where It Hold Previous Question And Ans If User attempted,that state Correct Or Incorrect Or Left Without attempt Will Be Get Saved.
    */
        
    (prevQustionContainer.parentNode.removeChild(prevQustionContainer));    

    // Main Container Under Which New Question Will Be Kept
    const mainContainer = document.querySelector("[data-container='main-container']");

    //Loading Previous Question In Form
    mainContainer.append(prevQuestion[prevQuestionCount]);
    
    updateQustionCount();

    questionCounter.innerText = prevQuestionCount+1;

    prevQuestionCount--;

}

// Event For 'Prev' Button
prevButton.addEventListener("click",loadPreviousQuestion);
// Event For 'Next' Button
nextButton.addEventListener("click",loadNextQuestion);