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

        <input data-min-amount="min-amount" class="w-8 h-4 text-xs py-1 border border-black outline-none" type="number" name = "min${nutrientsCheckboxes[i].getAttribute('data-nutrients')}" value="0">

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


nutrientsForm.addEventListener("submit",(e)=>{
e.preventDefault();


const ff = new FormData(nutrientsForm,submitNutrientsForm);


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


        const minValue =document.querySelector(`[data-nutrients='${(nutrientName[0].toUpperCase()+nutrientName.slice(1))}'] [data-min-amount='min-amount']`);

        console.log(document.querySelector(`[data-nutrients='${(nutrientName[0].toUpperCase()+nutrientName.slice(1))}'] [data-min-amount='min-amount']`));

        if(minValue.value < 10){
            minValue.value = 10;
        }
       
        console.log(minValue.value);

        arrayOfAmounts.push(`&${amount}=${100}`);
        

    }

    leaveFirst++;
//   console.log("leaveFirst: ",leaveFirst);
    // console.log(i)

}
// console.log(new FormData(nutrientsForm,));

//console.log(document.querySelector("[data-fat='fat-amount']"));//Carbohydrates
// arrayOfAmounts[0] = arrayOfAmounts[0].slice(1);

// console.log(arrayOfAmounts);


//Deleting All Elements Of ArrayOfAmounts Before Updating
for(let i = arrayOfAmounts.length ;i>0 ;i--){
    console.log(arrayOfAmounts.length,"---   ",arrayOfAmounts.pop());
}

const kk = new FormData(nutrientsForm);

let leaveOne = 0;

for(let j of kk){

    //leaveOne++;
    let [amount,count] = j;
    if(amount && (count!="on" && count!="")){
        
        if(leaveOne){
        //    console.log("0: ",j[0],"1: ",j[1]); 
        arrayOfAmounts.push((`&${j[0]}=${j[1]}`)); 
        }else{
            // console.log("E0: ",j[0],"E1: ",j[1]); 
            arrayOfAmounts.push((`${j[0]}=${j[1]}`)); 
        }
        
        leaveOne++;
    }


    
}

console.log(arrayOfAmounts.join(''));

const API = fetch(`https://api.spoonacular.com/recipes/findByNutrients?${arrayOfAmounts.join('')}&apiKey=0a6207fb88e042d9b928a78699a52e5b`);

API.then((response)=> response)
.then((value)=>{
    setTimeout(()=>{
        console.log(value);
        value.json().then((data)=>{
            if(data.length == 0){
                alert("No Food Found With Such Amount Of Nutrients");
            }
            console.log(data[0]);
            addNutrientsApiResult(data);
        });
    },5000)
    console.log("\n\nFetching In Progress\n\n\n");
})
.catch((error)=>{
    console.log("Something Went Wrong");
})

});


function addNutrientsApiResult(data){
    const nutrientsResultSection = document.getElementById('nutrients-api-result');

    const nutrientsOneByOne = document.querySelector("[data-nutrients-details='nutrients-details']");


// console.log(nutrientsOneByOne);
console.log("Nutrient One By One\n");
    // console.log(nutrientsResultSection);
    // console.log("*/*/*\n\n",data);

    for(let dataX of data){
        
    nutrientsResultSection.innerHTML+=`<div class="flex justify-center">
    <img class="" src=${dataX['image']} alt="Image Not Available">
</div>

<div>
    <h1 class="text-2xl text-yellow-500">${dataX['title']}</h1>
</div>`;
const dataXnutrients = Object.entries(dataX);

console.log(dataXnutrients);
for(let dataXX of dataXnutrients){
    console.log(dataXX);
    if(dataXX[0] =='id' || dataXX[0] == 'title' || dataXX[0] == 'image' || dataXX[0] == 'imageType'){
        //Do Nothing
        continue;
    }else{
        const nutriOneByOne = document.createElement("div");

        nutriOneByOne.classList.add("flex","justify-evenly","w-full","text-left","text-gray-200");
        nutriOneByOne.innerHTML += `   <h2 class="text-left">${dataXX[0]}</h2>
                                       <h2 class="text-left">${dataXX[1]}</h2>`;
                                 
            nutrientsResultSection.append(nutriOneByOne);
    }

    // break;
}


    }
}