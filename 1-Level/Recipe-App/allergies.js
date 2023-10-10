console.log("Allergies Script");

//Allergies Form
const allergiesForm = document.querySelector("#allergies-checkboxes");

//Allergies Form Filter li
const allergiesFilter = document.getElementById('allergies-filter');


//Expand and Compress On Clicking Allergies Option To Show Allergies Option As Checkboxes 
allergiesFilter.addEventListener('click',()=>{

    
    document.getElementById('allergies-checkboxes').classList.toggle('-translate-x-full');

    //Showing and Hiding Allergies Option Menu 
    if(document.getElementById('allergies-checkboxes').classList.contains('-z-10')){
        
        setTimeout(()=>{
            document.getElementById('allergies-checkboxes').classList.remove('-z-10');
        },500);

    
    }else{
        document.getElementById('allergies-checkboxes').classList.add('-z-10');
    }

});


//Closing Allergies Option
document.getElementById('allergies-close').addEventListener('click',()=>{

    document.getElementById('allergies-checkboxes').classList.toggle('-translate-x-full');
    document.getElementById('allergies-checkboxes').classList.add('-z-10');
 
})

//Will Get Slected Allergies Options
allergiesForm.addEventListener('submit',(e)=>{

    e.preventDefault();

    console.log(document.querySelectorAll("input[type='checkbox']"));


    document.getElementById('allergies-checkboxes').classList.add('-translate-x-full','-z-10');
})
