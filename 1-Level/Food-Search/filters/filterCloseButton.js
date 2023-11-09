const filterForms = document.querySelectorAll("[data-filter-form='filter-form']")

const formCloseButtons = document.querySelectorAll("[data-filter-close='filter-close']");

//Closing Filter Form
function closeFilterForms(){
    for(let filterForm of filterForms){
        filterForm.classList.add('-translate-x-full');
        filterForm.classList.add('-z-10');
    }
}

for(let formCloseButton of formCloseButtons){
    
    formCloseButton.addEventListener('click',()=>{
        closeFilterForms(); 
    });
}
