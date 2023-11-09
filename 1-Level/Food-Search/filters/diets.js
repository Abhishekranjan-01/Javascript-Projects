//Diet Form Filter li
const dietsFilter = document.getElementById('diets-filter');
// Allergies Form
const dietsForm = document.getElementById('diets-checkboxes');

//Expanding and Compressing On Clicking Allergies Option To Show Allergies Option As Checkboxes 
dietsFilter.addEventListener('click',()=>{

    if(dietsForm.classList.contains('-translate-y-full')){
        dietsForm.classList.remove('-translate-y-full');
        setTimeout(()=>{
            dietsForm.classList.remove('hidden');
        },100);

        // Removing Rest Of The Opened Filter Forms
        for(let i=0; i<filterForms.length;i++){
            if(i!=1){
                filterForms[i].classList.add('hidden');
                filterForms[i].classList.add('-translate-y-full');
                console.log("all removed");
            }

        }
                
    }else{
        dietsForm.classList.add('hidden');
        dietsForm.classList.add('-translate-y-full');
        
    }
    console.log("Diet Filter Clicked");
});

//Will Get Selected Diet Options
dietsForm.addEventListener('submit',(e)=>{

    e.preventDefault();
    dietsForm.classList.add('-translate-y-full','hidden');
});