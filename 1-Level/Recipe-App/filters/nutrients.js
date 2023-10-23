const nutrientsForm = document.getElementById('nutrients-form');
const submitNutrientsForm = document.querySelector("[data-nutrients='submit']");

// ---------------------------

const nutrientsCheckboxes = document.querySelectorAll('#nutrients-form [data-nutrients]');

// document.querySelector("[data-Carbohydrates='Carbohydrates-amount']").remove();

for(let i = 1 ; i < nutrientsCheckboxes.length; i++){
   
// console.log(nutrient.getAttribute('data-nutrients'));

    
nutrientsCheckboxes[i].classList.add('relative');
console.log(nutrientsCheckboxes[i].getAttribute('data-nutrients'));

nutrientsCheckboxes[i].innerHTML+= `<div data-${nutrientsCheckboxes[i].getAttribute('data-nutrients')}=${nutrientsCheckboxes[i].getAttribute('data-nutrients').toLowerCase()}-amount class="text-gray-900 bg-sky-400 absolute -top-8 flex flex-row gap-3 px-2 py-2 justify-center items-start hidden"
    >

        <label for= min${nutrientsCheckboxes[i].getAttribute('data-nutrients')} class="text-xs font-semibold">Min</label>

        <input data-min-amount="min-amount" class="w-8 h-4 text-xs py-1 border border-black outline-none" type="number" name = "min${nutrientsCheckboxes[i].getAttribute('data-nutrients')}" value="10">

        <label for= max${nutrientsCheckboxes[i].getAttribute('data-nutrients')} class="text-xs font-semibold">Max</label>

        <input data-max-amount="max-amount" class="w-8 h-4 text-xs py-1 border border-black outline-none" type="number" name='max${nutrientsCheckboxes[i].getAttribute('data-nutrients')}'>
    </div>`;


    nutrientsCheckboxes[i].childNodes[3].addEventListener("click",()=>{
        nutrientsCheckboxes[i].lastChild.classList.toggle('hidden');

        // console.log(nutrientsCheckboxes[i].childNodes);
    });

    // console.log(nutrient);


}

nutrientsCheckboxes[0].childNodes[3].addEventListener("click",()=>{
    nutrientsCheckboxes[0].childNodes[5].classList.toggle('hidden');

    // console.log(nutrientsCheckboxes[0].childNodes[5]);
});

// console.log(nutrientsForm);
// console.log(submitNutrientsForm);
// console.log('ff: \n',ff);


// console.log(nutrientsForm);
//----------------------------------------------------------------------------------------------

nutrientsForm.addEventListener("submit",(e)=>{
e.preventDefault();


const ff = new FormData(nutrientsForm,submitNutrientsForm);

// const yyy = document.querySelector("[data-Carbohydrates='Carbohydrates-amount']");

// console.log(" :",(yyy));

// console.log(ff);
const arrayOfAmounts = [];    
let leaveFirst = 0;

let amount,count;
for(let i of ff){
    [amount,count] = i;
    // console.log(i);

    // if(count!='on' && count){
        
    //     if(leaveFirst){
    //         // console.log(`&${amount}=${count}`);
    //         arrayOfAmounts.push(`&${amount}=${count}`);
    //     }else{
    //         // console.log(`${amount}=${count}`);
    //         arrayOfAmounts.push(`${amount}=${count}`);
    //     }

       
        
    // }

    let nutrientName;

    if(count == 'on' && count){

        [nutrientName] = i;
        console.log((nutrientName[0].toLowerCase()+nutrientName.slice(1)));

        //#############################################################

        // console.log(document.querySelector(`[data-${(nutrientName[0].toLowerCase()+nutrientName.slice(1))}= '${(nutrientName[0].toLowerCase()+nutrientName.slice(1))}-amount'] [data-min-amount='min-amount']`));
        
        //Bewlow not work for dashed-nutrients
        // const minValue = document.querySelector(`[data-${(nutrientName[0].toLowerCase()+nutrientName.slice(1))}= '${(nutrientName[0].toLowerCase()+nutrientName.slice(1))}-amount'] [data-min-amount='min-amount']`);

        //#####################################################################

        const minValue =document.querySelector(`[data-nutrients='${(nutrientName[0].toLowerCase()+nutrientName.slice(1))}'] [data-min-amount='min-amount']`);

        console.log(document.querySelector(`[data-nutrients='${(nutrientName[0].toLowerCase()+nutrientName.slice(1))}'] [data-min-amount='min-amount']`));

        minValue.value = 100;
        console.log(minValue.value);

        arrayOfAmounts.push(`&${amount}=${100}`);
        

    }

    leaveFirst++;
//   console.log("leaveFirst: ",leaveFirst);
    // console.log(i)

}
// console.log(new FormData(nutrientsForm,));

//console.log(document.querySelector("[data-fat='fat-amount']"));//Carbohydrates
arrayOfAmounts[0] = arrayOfAmounts[0].slice(1);

console.log(arrayOfAmounts);

const kk = new FormData(nutrientsForm);

for(let j of kk){
    console.log(j);
}
});