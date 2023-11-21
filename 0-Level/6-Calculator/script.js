const input = document.querySelector("input[type='text']");
const allNums = document.querySelectorAll("[data-nums='nums']");
const allClear = document.querySelector("[data-AC='AC']");
const del = document.querySelector("[data-DEL='DEL']");
const equal = document.querySelector("[data-EQUAL='EQUAL']");

const operators = document.querySelectorAll("[data-operator='operator']")


let arrayOfInputs = [];
let arrayOfTempInput = [];
let onlyDisplayInput = [];

let valueAlreadyContain = false;
//For Clearing Display & Array Of Inputs
function clearInputDisplay(){
    input.value="";
    arrayOfInputs = [];
    arrayOfTempInput = [];
    onlyDisplayInput = [];
    valueAlreadyContain = false;
}

//For Adding Element In Array Of Inputs(Main)
function pushToArrayOfInputs(){
    arrayOfInputs.push(parseFloat(arrayOfTempInput.join('')));
    // arrayOfInputs.push(arrayOfTempInput.slice(2));
    if(valueAlreadyContain){
        // Not Delete
    }else{
        arrayOfTempInput = [];
        valueAlreadyContain = false;
    }
   
}

//For Deleting One at Once
del.addEventListener(("click"),()=>{
arrayOfTempInput.pop();
// arrayOfInputs.pop();
onlyDisplayInput.pop();

input.value =  onlyDisplayInput.join('');
});

//Adding Events For Operator(+,-,*,/)
for(let operator of operators){
    operator.addEventListener(("click"),()=>{
        onlyDisplayInput.push(operator.textContent);
        input.value = onlyDisplayInput.join('');
        
        pushToArrayOfInputs();
        arrayOfInputs.push(operator.textContent);

    });
}

//For Deleting All At Once
allClear.addEventListener("click",()=>{clearInputDisplay();})


//Adding Event In Plus Operator
equal.addEventListener("click",()=>{

    if(valueAlreadyContain){
       arrayOfInputs.shift();
       console.log(arrayOfInputs);
       arrayOfInputs.push((parseFloat(arrayOfTempInput.slice(1).join(''))));
       console.log(arrayOfInputs);
       console.log(arrayOfTempInput);
       valueAlreadyContain = false;
    }else{
        arrayOfInputs.push((parseFloat(arrayOfTempInput.join(''))));
    }

console.log("EQ-me: ",arrayOfInputs);

for(let ip =0 ; ip < arrayOfInputs.length; ip++){
console.log(arrayOfInputs);
    

    while (arrayOfInputs.length >3) {
        // console.log(arrayOfInputs);
        console.log(ip);
        //+
        if(arrayOfInputs[ip] == '+'){
            const tempStore = (arrayOfInputs[0] + arrayOfInputs[2]);

            for(let i =0;i<3;i++){arrayOfInputs.shift();}

            arrayOfInputs.unshift(tempStore);
            console.log("+\t",arrayOfInputs);
            ip=0;
            break;
        }
        //-
        else if(arrayOfInputs[ip] == '-'){
            const tempStore = (arrayOfInputs[0] - arrayOfInputs[2]);

            for(let i=0 ; i<3; i++){arrayOfInputs.shift();}

            arrayOfInputs.unshift(tempStore);
            console.log("-\t",arrayOfInputs);
            ip=0;
            break;
        }

        //*
        else if(arrayOfInputs[ip] == '*'){
            const tempStore = (arrayOfInputs[0] * arrayOfInputs[2]);

            for(let i=0 ; i<3; i++){arrayOfInputs.shift();}

            arrayOfInputs.unshift(tempStore);
            console.log("*\t",arrayOfInputs);
            ip=0;
            break;
        }

        // /
       else if(arrayOfInputs[ip] == '/'){
            const tempStore = (arrayOfInputs[0] / arrayOfInputs[2]);

            for(let i=0 ; i<3; i++){arrayOfInputs.shift();}

            arrayOfInputs.unshift(tempStore);
            console.log("/\t",arrayOfInputs);
            ip=0;
            break;
        }

        else{break;}

    }
//---------------------------------------
    if(arrayOfInputs.length <= 3){
        for(let ip of arrayOfInputs){


            if(ip == '+'){

                const tempStore = (arrayOfInputs[0] + arrayOfInputs[2]);

                
                for(let i =0;i<3;i++){arrayOfInputs.shift();}
    
                arrayOfInputs.unshift(tempStore);

                onlyDisplayInput = [...arrayOfInputs];
                arrayOfTempInput = [...arrayOfInputs];

                valueAlreadyContain = true;

                input.value = onlyDisplayInput.join('');
                console.log(arrayOfInputs);
                break; 
               
            }
            //-
            if(ip == '-'){

                const tempStore = (arrayOfInputs[0] - arrayOfInputs[2]);

                
                for(let i=0 ; i<3; i++){arrayOfInputs.shift();}
    
                arrayOfInputs.unshift(tempStore);
                
                onlyDisplayInput = [...arrayOfInputs];
                arrayOfTempInput = [...arrayOfInputs];

                valueAlreadyContain = true;

                input.value =onlyDisplayInput.join('');
                console.log(arrayOfInputs);
                break;
            }
    
            //*
            if(ip == '*'){
                const tempStore = (arrayOfInputs[0] * arrayOfInputs[2]);
                
                for(let i=0 ; i<3; i++){arrayOfInputs.shift();}
    
                arrayOfInputs.unshift(tempStore);

                onlyDisplayInput = [...arrayOfInputs];
                arrayOfTempInput = [...arrayOfInputs];

                valueAlreadyContain = true;

                input.value =onlyDisplayInput.join('');

                console.log(arrayOfInputs);
                break;
            }
    
            // /
            if(ip == '/'){
                const tempStore = (arrayOfInputs[0] / arrayOfInputs[2]);

    
                for(let i=0 ; i<3; i++){arrayOfInputs.shift();}
    
                arrayOfInputs.unshift(tempStore);

                
                onlyDisplayInput = [...arrayOfInputs];
                arrayOfTempInput = [...arrayOfInputs];

                valueAlreadyContain = true;

                input.value =onlyDisplayInput.join('');

                console.log(arrayOfInputs);
                break;
            }


        }
        
    }
    //---------------------------------

            //+
            
   console.log(arrayOfInputs); 
}

});



for(let num of allNums){
// console.log(num);
num.addEventListener("click",()=>{


    if(num.textContent == '00'){
        console.log("yes: ",num.textContent);
        // arrayOfTempInput[0] = parseFloat(arrayOfTempInput[0] + '00');
    }

    arrayOfTempInput.push(num.textContent);
    onlyDisplayInput.push(num.textContent);
    
    input.value = onlyDisplayInput.join('');   
       
     console.log("te: ",arrayOfTempInput);
     console.log("mp: ",arrayOfInputs);

});

}



// arrayOfTempInput.push(num.textContent);

// console.log(arrayOfInputs);
// input.value=arrayOfInputs.join('');


// console.log(allNums);