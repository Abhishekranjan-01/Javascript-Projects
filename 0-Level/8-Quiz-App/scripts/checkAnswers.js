import { arrayOfQuetionsAndOptions } from "./questions.js";

//For Displaying Score On Form
let scoreCount = 0; 
const scoreCountDisplay = document.getElementById('ScoreCount'); 

//If The Answer Is Incorrect
function decreaseScore(){
    
    scoreCount-=10;

    if(scoreCount<0){
        scoreCount=0;
    }

    //Updating Displaying Score 
    scoreCountDisplay.innerText = scoreCount;
}

//If The Answer Is Correct
function increaseScore(){
    
    scoreCount+=10;

    if(scoreCount>100){
        scoreCount=100;
    }
    //Updating Displaying Score
    scoreCountDisplay.innerText = scoreCount;
}


function questionOne(e){

    const questionOneOptions = document.querySelectorAll("[data-questions='Options_for_Q-1'] li");

    // Checking for the Seclected Answer Is Right Or Not
    if(e.target.innerText !== "Inheritance"){

        // Marking Red For The Incorrect Answer
        e.target.classList.add('bg-red-600');
        //Marking Green For The Correct Answer
        questionOneOptions[2].classList.add('bg-lime-500');
        
        decreaseScore();
    }
    else{
        //Marking Green If The Selected Answer Is Correct
        questionOneOptions[2].classList.add('bg-lime-500');

        increaseScore();
    }


    for(let option of questionOneOptions){
        
        option.classList.add("pointer-events-none");

    }
}

function questionTwo(e){

    const questionTwoOptions = document.querySelectorAll("[data-questions='Options_for_Q-2'] li");

    // Checking for the Seclected Answer Is Right Or Not
    if(e.target.innerText !== "It supports usual declaration of primitive data types"){

        // Marking Red For The Incorrect Answer
        e.target.classList.add('bg-red-600');
        //Marking Green For The Correct Answer
        questionTwoOptions[1].classList.add('bg-lime-500');

        decreaseScore();
    }
    else{
        //Marking Green If The Selected Answer Is Correct
        questionTwoOptions[1].classList.add('bg-lime-500');

        increaseScore();
    }


    for(let option of questionTwoOptions){
        
        option.classList.add("pointer-events-none");

    }
}


function questionThree(e){

    const questionThreeOptions = document.querySelectorAll("[data-questions='Options_for_Q-3'] li");

    // Checking for the Seclected Answer Is Right Or Not
    if(e.target.innerText !== "Process Organization"){

        // Marking Red For The Incorrect Answer
        e.target.classList.add('bg-red-600');
        //Marking Green For The Correct Answer
        questionThreeOptions[3].classList.add('bg-lime-500');

        decreaseScore();
    }
    else{
        //Marking Green If The Selected Answer Is Correct
        questionThreeOptions[3].classList.add('bg-lime-500');

        increaseScore();
    }

    
    for(let option of questionThreeOptions){
        
        option.classList.add("pointer-events-none");

    }
}


function questionFour(e){

    const questionFourOptions = document.querySelectorAll("[data-questions='Options_for_Q-4'] li");

    // Checking for the Seclected Answer Is Right Or Not
    if(e.target.innerText !== "Locks are used to maintain transactional integrity and consistency"){

        // Marking Red For The Incorrect Answer
        e.target.classList.add('bg-red-600');
        //Marking Green For The Correct Answer
        questionFourOptions[2].classList.add('bg-lime-500');

        decreaseScore();
    }
    else{
        //Marking Green If The Selected Answer Is Correct
        questionFourOptions[2].classList.add('bg-lime-500');

        increaseScore();
    }

    
    for(option of questionFourOptions){
        
        option.classList.add("pointer-events-none");
    }
}


function questionFive(e){

    const questionFiveOptions = document.querySelectorAll("[data-questions='Options_for_Q-5'] li");

    // Checking for the Seclected Answer Is Right Or Not
    if(e.target.innerText !== "Ready state"){

        // Marking Red For The Incorrect Answer
        e.target.classList.add('bg-red-600');
        //Marking Green For The Correct Answer
        questionFiveOptions[2].classList.add('bg-lime-500');

        decreaseScore();
    }
    else{
        //Marking Green If The Selected Answer Is Correct
        questionFiveOptions[2].classList.add('bg-lime-500');

        increaseScore();
    }

    
    for(let option of questionFiveOptions){
        
        option.classList.add("pointer-events-none");

    }
}


function questionSix(e){

    const questionSixOptions = document.querySelectorAll("[data-questions='Options_for_Q-6'] li");

    // Checking for the Seclected Answer Is Right Or Not
    if(e.target.innerText !== "frame"){

        // Marking Red For The Incorrect Answer
        e.target.classList.add('bg-red-600');
        //Marking Green For The Correct Answer
        questionSixOptions[3].classList.add('bg-lime-500');

        decreaseScore();
    }
    else{
        //Marking Green If The Selected Answer Is Correct
        questionSixOptions[3].classList.add('bg-lime-500');

        increaseScore();
    }

    
    for(option of questionSixOptions){
        
        option.classList.add("pointer-events-none");

    }
}


function questionSeven(e){

    const questionSevenOptions = document.querySelectorAll("[data-questions='Options_for_Q-7'] li");

    // Checking for the Seclected Answer Is Right Or Not
    if(e.target.innerText !== "overlay network"){

        // Marking Red For The Incorrect Answer
        e.target.classList.add('bg-red-600');
        //Marking Green For The Correct Answer
        questionSevenOptions[0].classList.add('bg-lime-500');

        decreaseScore();
    }
    else{
        //Marking Green If The Selected Answer Is Correct
        questionSevenOptions[0].classList.add('bg-lime-500');

        increaseScore();
    }

    
    for(option of questionSevenOptions){
        
        option.classList.add("pointer-events-none");

    }
}


function questionEight(e){

    const questionEightOptions = document.querySelectorAll("[data-questions='Options_for_Q-8'] li");

    // Checking for the Seclected Answer Is Right Or Not
    if(e.target.innerText !== "socket"){

        // Marking Red For The Incorrect Answer
        e.target.classList.add('bg-red-600');
        //Marking Green For The Correct Answer
        questionEightOptions[2].classList.add('bg-lime-500');

        decreaseScore();
    }
    else{
        //Marking Green If The Selected Answer Is Correct
        questionEightOptions[2].classList.add('bg-lime-500');

        increaseScore();
    }

    
    for(option of questionEightOptions){
        
        option.classList.add("pointer-events-none");
    }
}


function questionNine(e){

    const questionNineOptions = document.querySelectorAll("[data-questions='Options_for_Q-9'] li");

    // Checking for the Seclected Answer Is Right Or Not
    if(e.target.innerText !== "Stack"){

        // Marking Red For The Incorrect Answer
        e.target.classList.add('bg-red-600');
        //Marking Green For The Correct Answer
        questionNineOptions[2].classList.add('bg-lime-500');

        decreaseScore();
    }
    else{
        //Marking Green If The Selected Answer Is Correct
        questionNineOptions[2].classList.add('bg-lime-500');

        increaseScore();
    }

    
    for(option of questionNineOptions){
        
        option.classList.add("pointer-events-none");
    }
}


function questionTen(e){

    const questionTenOptions = document.querySelectorAll("[data-questions='Options_for_Q-10'] li");

    // Checking for the Seclected Answer Is Right Or Not
    if(e.target.innerText !== "Access of elements in linked list takes less time than compared to arrays"){

        // Marking Red For The Incorrect Answer
        e.target.classList.add('bg-red-600');
        //Marking Green For The Correct Answer
        questionTenOptions[1].classList.add('bg-lime-500');

        decreaseScore();
    }
    else{
        //Marking Green If The Selected Answer Is Correct
        questionTenOptions[1].classList.add('bg-lime-500');

        increaseScore();
    }

    
    for(option of questionTenOptions){
        
        option.classList.add("pointer-events-none");

    }
}

export {scoreCount,scoreCountDisplay,decreaseScore,increaseScore,questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,questionEight,questionNine,questionTen};