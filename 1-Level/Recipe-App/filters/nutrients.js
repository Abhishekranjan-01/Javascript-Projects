const nutrientsForm = document.getElementById('nutrients-form');
const submitNutrientsForm = document.querySelector("[data-nutrients='submit']");

console.log(nutrientsForm);
// console.log('ff: \n',ff);


// console.log(nutrientsForm);


nutrientsForm.addEventListener("submit",(e)=>{
e.preventDefault();


// const ff = new FormData(nutrientsForm,submitNutrientsForm);

console.log(new FormData(nutrientsForm,submitNutrientsForm));

})
