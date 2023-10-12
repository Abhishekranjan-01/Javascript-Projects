// Allergies Form
const allergiesForm = document.querySelector("#allergies-checkboxes");

//Allergies Form Filter li
const allergiesFilter = document.getElementById('allergies-filter');
 
//Expanding and Compressing On Clicking Allergies Option To Show Allergies Option As Checkboxes 
allergiesFilter.addEventListener('click',()=>{

    
    if(allergiesForm.classList.contains('-translate-x-full')){
        allergiesForm.classList.remove('-translate-x-full');
        setTimeout(()=>{
            allergiesForm.classList.remove('-z-10');
        },100);
        // Removing Rest Of The Opened Filter Forms
        for(let i=1; i<filterForms.length;i++){
            filterForms[i].classList.add('-z-10');
            filterForms[i].classList.add('-translate-x-full');
        }
        
    }else{
        allergiesForm.classList.add('-z-10');
        allergiesForm.classList.add('-translate-x-full');
        
    }
});

//Will Get Selected Allergies Options
allergiesForm.addEventListener('submit',(e)=>{

    e.preventDefault();
    allergiesForm.classList.add('-translate-x-full','-z-10');
});