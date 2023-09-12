const fromOption = document.querySelector('#from-rates option').value.toLowerCase();

console.log(fromOption);


// 
const fromSelect = document.getElementById('from-rates');
const toSelect = document.getElementById('to-rates');

const dateAsPer = document.getElementById('date');
// const time = document.getElementById('time');

const amount = document.getElementById('amount');
const swapValues  = document.getElementById('swap-values');

const convertButton = document.querySelector('button[type = submit]');


// console.log(convertButton);

// Handling API Response


const API = fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromOption}.json`);


    
API.then((response)=>{
    
    return(response.json());
    
    })
    .then((data)=>{
        console.log(data);
    
        dateAsPer.textContent = `${data['date']}`;


        console.log(`${data['date']}`);


        for(rate of Object.keys(data[`${fromOption}`]))
        {
            // From
            if(rate == 'USD'){
            // Don't Add In Option list
            }
            else{
                const fromOption = document.createElement('option');
                fromOption.textContent = `${rate.toUpperCase()}`
                fromOption.value = rate.toUpperCase()
                fromSelect.append(fromOption);  
            }

            // To
            if(rate == 'INR'){
            // Don't Add In Option list
            }
            else{
                const toOption = document.createElement('option');
                toOption.textContent = `${rate.toUpperCase()}`
                toOption.value = rate.toUpperCase()
                toSelect.append(toOption);  
            }

        }

        // Updating Values
        // const fromOption = document.querySelector('#from-rates option').value.toLowerCase();
        //  fromCrr.textContent = `${fromOption.value.toUpperCase()}`;
        //  console.log(fromCrr);

    })
        .catch((error)=>{
        console.log("Something went wrong");
        console.log(error);
        })













// Event Listner On Swap-Value Button
swapValues.addEventListener(('click'),(e)=>{

    e.preventDefault();


    const fromOption = document.querySelector('#from-rates option');
    const toOption = document.querySelector('#to-rates option');
    // console.log("From Option : ",fromOption);   
    // console.log("To Option : ",toOption);  
    
    const form = document.querySelector("form");

    const formData = new FormData(form,convertButton);


    // console.log(formData.entries());

    const formEnteries = [];

    for(let data of formData.entries()){
        // console.log(data);
        formEnteries.push(data);
    }
    console.log(formEnteries);
    

    fromOption.value = formEnteries[1][1];
    fromOption.textContent = formEnteries[1][1];
    
    toOption.value = formEnteries[2][1]; 
    toOption.textContent = formEnteries[2][1]; 

    console.log(fromOption);
    console.log(toOption);
    // fromOption.value = toOption.value;
    // toOption.value = tempValue;
    
    
});


convertButton.addEventListener(('click'),(e)=>{
     e.preventDefault();
    


    const fromOption = document.querySelector('#from-rates option').value.toLowerCase();
    const toOption = document.querySelector('#to-rates option').value.toLowerCase();

    const fromCrr = document.getElementById('From-crr');


    // ------------------------------------------------------------


    console.log("Form Data \n\n");


    const form = document.querySelector("form");

    const formData = new FormData(form,convertButton);


    // console.log(formData.entries());

    const formEnteries = [];

    for(let data of formData.entries()){
        // console.log(data);
        formEnteries.push(data);
    }
    console.log(formEnteries[1][1].toLowerCase());
//------------------------------------------------------
    const API2 = fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${formEnteries[1][1].toLowerCase()}.json`);


    let  responseObject = undefined;
    
    
API2.then((response)=>{
    
    return(response.json());
    
    })
    .then((data)=>{
        console.log(data);
        responseObject = data;
        // console.log(responseObject);
        dateAsPer.textContent = `${data['date']}`;

        console.log(`${data['date']}`);

        const fromOptionKeys = document.querySelector('#from-rates option').value.toLowerCase();
       


    })
        .catch((error)=>{
        console.log("Something went wrong");
        console.log(error);
        })



    
        // Updating Values
        const fromOption2 = document.querySelector('#from-rates option').value.toLowerCase();
        const fromCrr2 = document.getElementById('From-crr');
        const toCrr2 = document.getElementById('To-crr');
       fromCrr2.textContent = `${formEnteries[1][1].toUpperCase()}`;
       toCrr2.textContent = `${formEnteries[2][1].toUpperCase()}`; 
    //    console.log(fromCrr2);
        // console.log(fromOption2.toUpperCase());
        

        setTimeout(()=>{
            console.log("\nResponse Object Copy:-\t",responseObject);
        },100)
    })
        