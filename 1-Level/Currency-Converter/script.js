// const API = fetch(`http://data.fixer.io/api/latest?access_key=04176d61884bb3d89c9d92189ccb638b`);

const fromSelect = document.getElementById('from-rates');

const toSelect = document.getElementById('to-rates');

API.then((response)=>{
    return(response.json());
}).then((data)=>{
    console.log(data);
    
    
    for(rate of Object.keys(data['rates']))
    {
        // From
        const fromOption = document.createElement('option');
        console.log(Object.keys(data['rates']).length);
        // console.log(rate);
        if(rate == 'USD'){
            // Do Nothing
        }
        else{
            option.textContent = `${rate}`
            select.append(option);  
        }
        // To
        const toOption = document.createElement('option');
        console.log(Object.keys(data['rates']).length);
        // console.log(rate);
        if(rate == 'USD'){
            // Do Nothing
        }
        else{
            option.textContent = `${rate}`
            select.append(option);  
        }


    }

    const op1 = document.querySelector('option');
    console.log(op1.value);
    // console.log(data['rates']['INR']);
}).catch((error)=>{
    console.log("Something went wrong");
    console.log(error);
})

/*

const details = fetch(`https://restcountries.com/v3.1/name/india?fields=name,capital,currencies
`)
    .then((response)=> response.json())
        .then((data)=>{


            console.log(data);
            // if(data.length > 1){
            //     return(Object.keys(data[0]['currencies'])[0])
            // }
            // else{
            //     return(Object.keys(data['currencies'])[0])
            // }
        }).then((exactMatch)=>{console.log(exactMatch);})
            .catch((error)=>{
                console.log("Something went wrong");
            })

            */