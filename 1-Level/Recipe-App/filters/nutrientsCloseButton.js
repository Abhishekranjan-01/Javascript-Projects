const searchByNutrients = document.getElementById('search-by-nutrients');

console.log(searchByNutrients);

searchByNutrients.addEventListener('click',()=>{
    nutrientsForm.classList.toggle('hidden');
})