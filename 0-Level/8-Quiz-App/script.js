// let {add} = require('./q-2');

// console.log(add(5,7));

const submitButton = document.querySelector("button[type='submit']");
const li = document.querySelectorAll('li');

let questionCount = 1;
// console.log(li);

// console.log(li[4].children[0].name);
// console.log(li[4].classList.add('bg-lime-500'));

const correctAnswer = (e)=>{

}

for(let option of li){
    option.addEventListener('click',(e)=>{
        if(questionCount == 1 && option.children[0].name == 4){
            // console.log(option.children[0].name);
            option.classList.add('bg-lime-500');

            for(let removeEvents of li){
                removeEvents.removeEventListener('click',(ev)=>{
                    console.log("Event Removed");
                });
            }
        }  
        else{
            // for(correctAnswer )
            console.log(li);
            option.classList.add('bg-red-600');

            li[4].classList.add('bg-lime-500');

            for(let removeEvents of li){
                removeEvents.removeEventListener('click',(ev)=>{
                    console.log("Event Removed");
                });
            }
        }     
    })
}

console.log(submitButton);

