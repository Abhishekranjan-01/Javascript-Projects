// From Currency Which wll be Convered to Another Currency
const fromOption = document.querySelector('#from-rates option').value.toLowerCase();

// Form Selector
const form = document.querySelector('form');

// Select Element Of 'From'
const fromSelect = document.getElementById('from-rates');
// Select Element Of 'To
const toSelect = document.getElementById('to-rates');

// Show Last Updated Currency Date
const dateAsPer = document.getElementById('date');
// const time = document.getElementById('time');

// Amount Input Element
const amount = document.getElementById('amount');

// Swap Values Between Options 
const swapValues  = document.getElementById('swap-values');

// Show Exchange rates Of Selected Currency
const convertButton = document.querySelector('button[type = submit]');

// Handling API Response:- 'By Default It Will Fetch For (usd) & Api Response Show For inr'

const API = fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromOption}.json`);


    
API.then((response)=>{
    
    return(response.json());
    
    })
    .then((data)=>{
        // console.log(data);
    
        dateAsPer.textContent = `${data['date']}`;

        // console.log(`${data['date']}`);

        // Adding Currencies option Dynamically In (From) And (To) 'Select' Element By Appending The 'select' Element and adding 'option Element'
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

    })
        .catch((error)=>{
        console.log("Something went wrong");
        console.log(error);
})


// Event Listner On Swap-Value Button
swapValues.addEventListener(('click'),(e)=>{

    e.preventDefault();

    // Getting All The Currencies from 'From' In Array
    const fromOption = document.querySelectorAll('#from-rates option');
    // Getting All The Currencies from 'To' In Array
    const toOption = document.querySelectorAll('#to-rates option');

    // Getting Values Entered In Form
    const formData = new FormData(form,swapValues);

    // console.log(formData.entries());

    const formEnteries = [];

    // Inserting The Form Enteries In 'formEnteries'
    for(let data of formData.entries()){
        // console.log(data);
        formEnteries.push(data);
    }
    // console.log(formEnteries);
    
    // Swapping The Values from 'To' To 'From'
    for(let option of fromOption){
        if(option.value === formEnteries[1][1])
        {
            option.value = formEnteries[2][1];
            option.textContent = formEnteries[2][1];
            console.log(option);
        }
  
    }

    // Swapping The Values from 'From' To  'To'
    for(let option of toOption){
        if(option.value === formEnteries[2][1])
        {
            option.value = formEnteries[1][1];
            option.textContent = formEnteries[1][1];
            console.log(option);
        }
  
    }

    
});


// Convert Button To Know Exchange Rates
form.addEventListener(('click'),(e)=>{
     
    e.preventDefault();
    
    //Getting Form Data Of Selected Currencies On HTML Page
    const formData = new FormData(form,convertButton);
    // console.log(formData.entries());

    const formEnteries = [];

    for(let data of formData.entries()){
        // console.log(data);
        formEnteries.push(data);
    }
    console.log(formEnteries[1][1].toLowerCase());
//------------------------------------------------------

// Fetching The Selected Currency Values
    const API2 = fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${formEnteries[1][1].toLowerCase()}.json`);


    let  responseObject = undefined;
    
    
API2.then((response)=>{
    
    return(response.json());
    
    })
    .then((data)=>{
        // console.log(data);
        responseObject = data;
        // console.log(responseObject);

        // Setting The Values Returned By Response from API
        dateAsPer.textContent = `${data['date']}`;

        // console.log(`${data['date']}`);
        // From Amount
        const fromAmountCrr = document.querySelector('#from-amount-crr');
        // Input Amont Element
        const amount = document.querySelector('#amount');

        fromAmountCrr.textContent = `${amount.value}`
        // To Amount 
        const toAmountCrr = document.querySelector('#to-amount-crr');
        // console.log(toAmountCrr);
        
        // console.log(responseObject);

        // console.log(formEnteries);
        // console.log(formEnteries[2][1].toLowerCase());

        toAmountCrr.textContent = `${responseObject[formEnteries[1][1].toLowerCase()][formEnteries[2][1].toLowerCase()] * amount.value} `;
        
    })
        .catch((error)=>{
        console.log("Something went wrong");
        console.log(error);
        })

        // Updating Output Currency Name (Mentioned In Black Color On HTML Page)

        const fromCrr2 = document.getElementById('From-crr');
        const toCrr2 = document.getElementById('To-crr');

       fromCrr2.textContent = `${formEnteries[1][1].toUpperCase()}`;
       toCrr2.textContent = `${formEnteries[2][1].toUpperCase()}`; 
        // setTimeout(()=>{
        //     console.log("\nResponse Object Copy:-\t",responseObject);
        // },100)
    })
        