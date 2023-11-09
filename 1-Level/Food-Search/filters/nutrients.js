const nutrientsForm = document.getElementById('nutrients-form');
const submitNutrientsForm = document.querySelector("[data-nutrients='submit']");

const nutrientsCheckboxes = document.querySelectorAll('#nutrients-form [data-nutrients]');
let searchResultExistAlready = false;


for(let i = 1 ; i < nutrientsCheckboxes.length; i++){
   

    
nutrientsCheckboxes[i].classList.add('relative');
// console.log(nutrientsCheckboxes[i].getAttribute('data-nutrients'));

nutrientsCheckboxes[i].innerHTML+= `<div data-${nutrientsCheckboxes[i].getAttribute('data-nutrients')}=${nutrientsCheckboxes[i].getAttribute('data-nutrients').toLowerCase()}-amount class="text-gray-900 bg-sky-400 absolute -top-8 flex flex-row gap-3 px-2 py-2 justify-center items-start hidden"
    >

        <label for= min${nutrientsCheckboxes[i].getAttribute('data-nutrients')} class="text-xs font-semibold">Min</label>

        <input data-min-amount="min-amount" class="w-8 h-4 text-xs py-1 border border-black outline-none" type="number" name = "min${nutrientsCheckboxes[i].getAttribute('data-nutrients')}" value="0">

        <label for= max${nutrientsCheckboxes[i].getAttribute('data-nutrients')} class="text-xs font-semibold">Max</label>

        <input data-max-amount="max-amount" class="w-8 h-4 text-xs py-1 border border-black outline-none" type="number" name='max${nutrientsCheckboxes[i].getAttribute('data-nutrients')}'>
    </div>`;


    nutrientsCheckboxes[i].childNodes[3].addEventListener("click",()=>{
        nutrientsCheckboxes[i].lastChild.classList.toggle('hidden');

       
    });
}

nutrientsCheckboxes[0].childNodes[3].addEventListener("click",()=>{
    nutrientsCheckboxes[0].childNodes[5].classList.toggle('hidden');

    // console.log(nutrientsCheckboxes[0].childNodes[5]);
});

const checkboxedNutrients = [];


nutrientsForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    const ff = new FormData(nutrientsForm,submitNutrientsForm);

    const arrayOfAmounts = [];    
    let leaveFirst = 0;

    let amount,count;
    for(let i of ff){
        [amount,count] = i;

        let nutrientName;
        console.log("ot:\t\t",i);
        if(count == 'on' && count)
        {

            [nutrientName] = i;
            // console.log("i: \t\t",i);
            // console.log("am: ",amount,"count: ",count);
                console.log((nutrientName[0].toLowerCase()+nutrientName.slice(1)));


            const minValue =document.querySelector(`[data-nutrients='${(nutrientName[0].toUpperCase()+nutrientName.slice(1))}'] [data-min-amount='min-amount']`);
            // console.log(i);
            // console.log(document.querySelector(`[data-nutrients='${(nutrientName[0].toUpperCase()+nutrientName.slice(1))}'] [data-min-amount='min-amount']`));

            if(minValue.value < 10)
            {
                minValue.value = 10;
            }
       
            // console.log(minValue.value);

            arrayOfAmounts.push(`&${amount}=${100}`);

            if(amount == "Carbohydrates")
            {
                checkboxedNutrients.push(`carbs`);
            }else
            {
            checkboxedNutrients.push(`${amount[0].toLowerCase()}${amount.slice(1)}`);
            }
            continue;
        }else
        {
           // count=0;
            [nutrientName] = i;
            // console.log("am: ",amount,"count: ",count);

            // console.log((nutrientName[0].toLowerCase()+nutrientName.slice(1)));
            // console.log("i: \t\t",i);
            
            // console.log(document.querySelector(`[data-nutrients='${(nutrientName[0].toUpperCase()+nutrientName.slice(1))}']`));
            

            const testInput = document.getElementsByName(`${i[0]}`);
            // testInput[0].value=0;
            // console.log(testInput[0]);
            
            // const minValue =document.querySelector(`[data-nutrients='${(nutrientName[0].toUpperCase()+nutrientName.slice(1))}'] [data-min-amount='min-amount']`);
            
            // minValue.value=0;
            // console.log("am: ",amount,"count: ",count);

        }

        leaveFirst++;
        //console.log("leaveFirst: ",leaveFirst);
        // console.log(i)
    }

    //Deleting All Elements Of ArrayOfAmounts Before Updating
    for(let i = arrayOfAmounts.length ;i>0 ;i--)
    {
        console.log(arrayOfAmounts.length,"---   ",arrayOfAmounts.pop());
    }

    const kk = new FormData(nutrientsForm);
    console.log("\n\n----",kk,"\n\n----");
    let leaveOne = 0;

    for(let j of kk)
    {
        
        console.log("FD:\t\t",j);
        //leaveOne++;
        let [amount,count] = j;
        if(amount && (count!="on" && count!=""))
        {
        
            if(leaveOne){
                //console.log("0: ",j[0],"1: ",j[1]); 
                arrayOfAmounts.push((`&${j[0]}=${j[1]}`)); 
            }else
            {
            // console.log("E0: ",j[0],"E1: ",j[1]); 
            arrayOfAmounts.push((`${j[0]}=${j[1]}`)); 
            }
            leaveOne++;
        }
    }

    // console.log(arrayOfAmounts.join(''));

    const API = fetch(`https://api.spoonacular.com/recipes/findByNutrients?${arrayOfAmounts.join('')}&apiKey=0a6207fb88e042d9b928a78699a52e5b`);

    // console.log("---------",API,"--------");

    API.then((response)=> 
    {
        console.log(response);
        //console.log(response);
        try
        {
            if(response.ok)
            {
                console.log(response.ok);
                return (response.json());
            }
            else
            {
            throw ("Please Check Your Network Connection");
            }
        }   
        catch(Error)
        {
        alert(Error);
        }
   
    }).then((data)=>
    {
        console.log(data);
        
            if(data.length == 0){
                alert("No Food Found With Selected Amount Of Nutrients");
            }else{
                console.log(data[0]);
                addNutrientsApiResult(data);
                searchResultExistAlready = true;
            }
    
        console.log("\n\nFetching In Progress\n\n\n");
    }).catch((error)=>
    {
        alert("Please Check Your Network Connection : 157",error);
        console.log("Please Check Your Network Connection : 157\n\n",error);
        console.log(error);
    })
});


function addNutrientsApiResult(data){
    const nutrientsResultSection = document.getElementById('nutrients-api-result');
    if(searchResultExistAlready){
        console.log("\nAlready Exist\n");
        nutrientsResultSection.innerHTML="";
        
    console.log("\n\nDone Removing \n\n");
    }

    // const nutrientsOneByOne = document.querySelector("[data-nutrients-details='nutrients-details']");

    for(let dataX of data)
    {
        
        nutrientsResultSection.innerHTML+=`<div class="flex justify-center">
            <img class="rounded-lg mt-4" src=${dataX['image']} alt="Image Not Available">
        </div>

        <div>
            <h1 class="text-center text-2xl text-yellow-500 my-4 px-4">${dataX['title']}</h1>
        </div>`;
        const dataXnutrients = Object.entries(dataX);
        
        for(let dataXX of dataXnutrients)
        {
            console.log(dataXX);
            if(dataXX[0] =='id' || dataXX[0] == 'title' || dataXX[0] == 'image' || dataXX[0] == 'imageType'){
                //Do Nothing
                continue;
            }
            else
            {
                const nutriOneByOne = document.createElement("div");
                nutriOneByOne.classList.add("flex","w-full","text-left","px-10","text-gray-200","justify-between","md:px-[35%]");
                
                   let checkboxedNutrientsExist = false;
                // console.log(dataXX[0],"  :  ",checkboxedNutrients);
                   for(let i=0;i<checkboxedNutrients.length;i++){
                    if(dataXX[0] == checkboxedNutrients[i]){
                        checkboxedNutrientsExist = true;
                        break;
                    }
                    else{
                        checkboxedNutrientsExist = false;
                    }
                   }

                   if(checkboxedNutrientsExist){
                    nutriOneByOne.innerHTML += `<h2 class="text-left px-2 rounded-md font-semibold " style="background-color:#4cd137;">${dataXX[0]}</h2>
                    <h2 class="text-left px-2 rounded-md font-semibold " style="background-color:#4cd137;">${dataXX[1]}</h2>`;

                   }else
                   {                         
                        nutriOneByOne.innerHTML += `<h2 class="text-left">${dataXX[0]}</h2>
                        <h2 class="text-left">${dataXX[1]}</h2>`;
                        // continue;
                    }
                      // break;                                 
                    nutrientsResultSection.append(nutriOneByOne);
            }
            // break;
        }
    }
}