import {questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,questionEight,questionNine,questionTen} from "./checkAnswers.js";

function addEventsInQuestionOne(){
    const QuestionOneOptions = document.querySelectorAll("[data-container='Container For Questions And Options'] li");

    for(let option of QuestionOneOptions)
    {
        option.addEventListener("click",questionOne);
    }
}

function addEventsInQuestionTwo(){

    const QuestionTwoOptions = document.querySelectorAll("[data-questions='Options_for_Q-2'] li");


    for(let option of QuestionTwoOptions)
    {
        option.addEventListener("click",questionTwo);
    }


}

function addEventsInQuestionThree(){
    const QuestionThreeOptions = document.querySelectorAll("[data-container='Container For Questions And Options'] li");

    for(let option of QuestionThreeOptions)
    {
        option.addEventListener("click",questionThree);
    }
    
}

function addEventsInQuestionFour(){
    const QuestionFourOptions = document.querySelectorAll("[data-container='Container For Questions And Options'] li");

    for(let option of QuestionFourOptions)
    {
        option.addEventListener("click",questionFour);
    }
}

function addEventsInQuestionFive(){
    const QuestionFiveOptions = document.querySelectorAll("[data-container='Container For Questions And Options'] li");

    for(let option of QuestionFiveOptions)
    {
        option.addEventListener("click",questionFive);
    }
}


function addEventsInQuestionSix(){
    const QuestionSixOptions = document.querySelectorAll("[data-container='Container For Questions And Options'] li");

    for(let option of QuestionSixOptions)
    {
        option.addEventListener("click",questionSix);
    }
}

function addEventsInQuestionSeven(){
    const QuestionSevenOptions = document.querySelectorAll("[data-container='Container For Questions And Options'] li");

    for(let option of QuestionSevenOptions)
    {
        option.addEventListener("click",questionSeven);
    }
}

function addEventsInQuestionEight(){
    const QuestionEightOptions = document.querySelectorAll("[data-container='Container For Questions And Options'] li");

    for(let option of QuestionEightOptions)
    {
        option.addEventListener("click",questionEight);
    }
}

function addEventsInQuestionNine(){
    const QuestionNineOptions = document.querySelectorAll("[data-container='Container For Questions And Options'] li");

    for(let option of QuestionNineOptions)
    {
        option.addEventListener("click",questionNine);
    }
}

function addEventsInQuestionTen(){
    const QuestionTenOptions = document.querySelectorAll("[data-container='Container For Questions And Options'] li");

    for(let option of QuestionTenOptions)
    {
        option.addEventListener("click",questionTen);
    }
}


export {addEventsInQuestionOne,addEventsInQuestionTwo,addEventsInQuestionThree,addEventsInQuestionFour,addEventsInQuestionFive,addEventsInQuestionSix,addEventsInQuestionSeven,addEventsInQuestionEight,addEventsInQuestionNine,addEventsInQuestionTen };