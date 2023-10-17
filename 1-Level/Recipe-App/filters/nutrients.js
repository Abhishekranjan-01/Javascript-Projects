const nutrientsForm = document.getElementById('nutrients-form');
const submitNutrientsForm = document.querySelector("[data-nutrients='submit']");

// ---------------------------

const nutrientsCheckboxes = document.querySelectorAll('#nutrients-form [data-nutrients]');





for(let nutrient of nutrientsCheckboxes){
   

    nutrient.classList.add('relative');

    nutrient.innerHTML+= `<div data-${nutrient.innerText=`${nutrient.innerText}-amount`} class="text-gray-900 bg-sky-400 absolute -top-8 flex flex-row gap-3 px-2 py-2 justify-center items-start hidden"
    >

        <label for=${nutrient.innerText}-min-amount class="text-xs font-semibold">Min</label>
        <input class="w-8 h-4 text-xs py-1 border border-black outline-none" type="number" name=${nutrient.innerText}-min-amount value="10">

        <label for=${nutrient.innerText}-max-amount class="text-xs font-semibold">Min</label>
        <input class="w-8 h-4 text-xs py-1 border border-black outline-none" type="number" name=${nutrient.innerText}-max-amount>
    </div>`;


    nutrient.childNodes[3].addEventListener("click",()=>{
        nutrient.lastChild.classList.toggle('hidden');

        console.log(nutrient.childNodes);
    });

    

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

})
