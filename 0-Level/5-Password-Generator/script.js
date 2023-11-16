const form = document.querySelector('form');

// For Generating Random Numbers Between Two Numbers
function randomNumbersBetween(min, max)
{ // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
  
const specialSymbols = ['!',"\"","#","$","%","&","\'","(",")","*","+",",","-","/",":",";","<","=",">","?","@"];

// For Generating Random UpperCase
const generateRandomUppercase = ()=> (String.fromCharCode(randomNumbersBetween(65,90)));

// For Generating Random LowerCase
const generateRandomLowercase = ()=> (String.fromCharCode(randomNumbersBetween(97,122)));

// For Generating Random Numbers
const generateRandomNumber = (min=0,max=9) => Math.floor(Math.random() * (max - min + 1) + min);

// For Generating Random Symbols
const generateRandomSymbol = ()=> specialSymbols[generateRandomNumber(0,20)];


form.addEventListener("submit",(e)=>
{
    e.preventDefault();
    const arrayOfGenerateRandoms = [];
    const formValues = new FormData(document.querySelector('form'),document.querySelector('button[type=submit]'));
    
    let formLength = 0;
    let randomPassword=[];
    let passwordLength=[];
    for(let data of formValues)
    {
        console.log(data);
        if(formLength == 0){
           passwordLength = parseInt(data[1]);
        //    console.log("dd:\t\t",typeof(data[1]));
        //    console.log("dd:\t\t",typeof(data[1]));
        }    
        if(data[0] == 'generateRandomUppercase'){
            arrayOfGenerateRandoms.push(generateRandomUppercase);
           }

        if(data[0] == 'generateRandomLowercase'){
            arrayOfGenerateRandoms.push(generateRandomLowercase);
        }

        if(data[0] == 'generateRandomNumber'){
            arrayOfGenerateRandoms.push(generateRandomNumber);
        }

        if(data[0] == 'generateRandomSymbol'){
            arrayOfGenerateRandoms.push(generateRandomSymbol);
        }
        
        formLength++;     
        
    }    
    if(formLength == 1){alert("Please Select Atleast One Filter");} 

    console.log("clicked happend");


    for(let count=0; count < passwordLength; count++)
    {
        // const tempValue = arrayOfGenerateRandoms.map((generate)=> generate());
        const tempValue = arrayOfGenerateRandoms[generateRandomNumber(0,(arrayOfGenerateRandoms.length-1))]();

        randomPassword.push(tempValue)
        // console.log("count:- \t",randomPassword);
    }

    console.log("rp: \t",randomPassword.flat().join(""));
    const displayRandomPassoword = document.querySelector("input[name=password]");
    displayRandomPassoword.value = randomPassword.flat().join("");

console.log("\n\n\n\narf ul: ",arrayOfGenerateRandoms);

});