// Allergies Form
const allergiesForm = document.querySelector("#allergies-checkboxes");

//Allergies Form Filter li
const allergiesFilter = document.getElementById('allergies-filter');
 
//Expanding and Compressing On Clicking Allergies Option To Show Allergies Option As Checkboxes 
allergiesFilter.addEventListener('click',()=>{

    
    if(allergiesForm.classList.contains('-translate-y-full')){
        allergiesForm.classList.remove('-translate-y-full');
        setTimeout(()=>{
            allergiesForm.classList.remove('hidden');
        },100);
        // Removing Rest Of The Opened Filter Forms
        for(let i=1; i<filterForms.length;i++){
            filterForms[i].classList.add('hidden');
            filterForms[i].classList.add('-translate-y-full');
        }
        
    }else{
        allergiesForm.classList.add('hidden');
        allergiesForm.classList.add('-translate-y-full');
        
    }
});

//Will Get Selected Allergies Options
allergiesForm.addEventListener('submit',(e)=>{

    e.preventDefault();
    allergiesForm.classList.add('-translate-y-full','hidden');
    // allergiesForm.classList.add('-translate-x-full','-z-10');
});