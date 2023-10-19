const nutrientsForm = document.getElementById('nutrients-form');
const submitNutrientsForm = document.querySelector("[data-nutrients='submit']");

// ---------------------------

const nutrientsCheckboxes = document.querySelectorAll('#nutrients-form [data-nutrients]');

document.querySelector("[data-Carbohydrates='Carbohydrates-amount']").remove();

for(let nutrient of nutrientsCheckboxes){
   
console.log(nutrient.getAttribute('data-nutrients'));

    
    nutrient.classList.add('relative');

    nutrient.innerHTML+= `<div data-${nutrient.getAttribute('data-nutrients')}-amount class="text-gray-900 bg-sky-400 absolute -top-8 flex flex-row gap-3 px-2 py-2 justify-center items-start hidden"
    >

        <label for= min${nutrient.getAttribute('data-nutrients')} class="text-xs font-semibold">Min</label>

        <input class="w-8 h-4 text-xs py-1 border border-black outline-none" type="number" name = "min${nutrient.getAttribute('data-nutrients')}" value="10">

        <label for= max${nutrient.getAttribute('data-nutrients')} class="text-xs font-semibold">Max</label>

        <input class="w-8 h-4 text-xs py-1 border border-black outline-none" type="number" name='max${nutrient.getAttribute('data-nutrients')}'>
    </div>`;


    nutrient.childNodes[3].addEventListener("click",()=>{
        nutrient.lastChild.classList.toggle('hidden');

        console.log(nutrient.childNodes);
    });

    console.log(nutrient);


}

// console.log(nutrientsForm);
// console.log(submitNutrientsForm);
// console.log('ff: \n',ff);


// console.log(nutrientsForm);


nutrientsForm.addEventListener("submit",(e)=>{
e.preventDefault();


const ff = new FormData(nutrientsForm,submitNutrientsForm);

const yyy = document.querySelector("[data-Carbohydrates='Carbohydrates-amount']");

console.log(yyy);

console.log(ff);    

for(let i of ff){
    console.log(i);
}

// console.log(new FormData(nutrientsForm,));
console.log(document.querySelector("[data-nutrients='Carbohydrates']"));//Carbohydrates


});


