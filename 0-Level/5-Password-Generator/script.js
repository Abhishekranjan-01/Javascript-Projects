const form = document.querySelector('form');
// Input Element Selected For Displaying For Random Password
const displayRandomPassoword = document.querySelector("input[name=password]");
// Copyt To Clipboard Button
const copyToClipboardButton = document.querySelector("[data-button='copy-to-clipboard']");
// Array Of Special Symbols
const specialSymbols = ['!',"\"","#","$","%","&","\'","(",")","*","+",",","-","/",":",";","<","=",">","?","@"];


// For Generating Random Numbers Between Two Numbers
function randomNumbersBetween(min, max)
{ // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

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
    
    // For Counting Numbers Of Filters
    let formLength = 0;
    //For Storing Random Password
    let randomPassword=[];
    // For Stroing Password Length
    let passwordLength=[];

    for(let data of formValues)
    {
        if(formLength == 0){
            // Storing Password Length
           passwordLength = Math.abs(parseInt(data[1]));
           
           if(data[1] < 0){

            // If Input Length Is Negative Then Converting It In Positive On HTML
            document.querySelector("[name='Password-Length']").value = passwordLength; 

           }
        } 
         //Adding Filters In Array Which Are Selected By User  
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
    // No Filter Is Applied
    if(formLength == 1){alert("Please Select Atleast One Filter");} 

    // Generating Random Values
    for(let count=0; count < passwordLength; count++)
    {
        const tempValue = arrayOfGenerateRandoms[generateRandomNumber(0,(arrayOfGenerateRandoms.length-1))]();
        randomPassword.push(tempValue)
    }

    displayRandomPassoword.value = randomPassword.flat().join("");

    copyToClipboardButton.classList.remove("bg-gray-100");
    copyToClipboardButton.classList.remove("text-gray-900");

    copyToClipboardButton.classList.add('bg-gray-800');
    copyToClipboardButton.classList.add("hover:bg-gray-700");
    copyToClipboardButton.classList.add("text-gray-200");
    
});

// Clipboard Event For Copying
copyToClipboardButton.addEventListener("click",()=>{

    navigator.clipboard.writeText(displayRandomPassoword.value).then(
        () => {
          /* clipboard successfully set */
        //   console.log("clipboard successfully set");
          copyToClipboardButton.classList.remove("bg-gray-800");
          copyToClipboardButton.classList.remove("hover:bg-gray-700");
          copyToClipboardButton.classList.remove("text-gray-200");
 
          
          copyToClipboardButton.classList.add("bg-gray-100");          
          copyToClipboardButton.classList.add("text-gray-900");
        },
        () => {
          /* clipboard write failed */
          alert("clipboard write failed");
        },
      );
});