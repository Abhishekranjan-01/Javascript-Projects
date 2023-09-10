const fromOption = document.querySelector('#from-rates option').value.toLowerCase();

console.log(fromOption);

const API = fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromOption}.json`);
// 
const fromSelect = document.getElementById('from-rates');
const toSelect = document.getElementById('to-rates');

const dateAsPer = document.getElementById('date');
// const time = document.getElementById('time');

const amount = document.getElementById('amount');
const swapValues  = document.getElementById('swap-values');

// Handling API Response
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
                fromSelect.append(fromOption);  
            }

            // To
            if(rate == 'INR'){
            // Don't Add In Option list
            }
            else{
                const toOption = document.createElement('option');
                toOption.textContent = `${rate.toUpperCase()}`
        
                toSelect.append(toOption);  
            }

        }


    })
        .catch((error)=>{
        console.log("Something went wrong");
        console.log(error);
        })


swapValues.addEventListener(('click'),(e)=>{

    const fromOption = document.querySelector('#from-rates option');
    const toOption = document.querySelector('#to-rates option');
    console.log("From Option : ",fromOption);   
    console.log("To Option : ",toOption);  
    
    
    let tempString = fromOption.textContent;
    let tempValue = fromOption.value;


    fromOption.textContent = toOption.textContent ;
    toOption.textContent = tempString; 


    fromOption.value = toOption.value;
    toOption.value = tempValue;
    
    
});