import { middleweare } from "./middleWare.js";

const form = document.querySelector("form");

const arrayOfDataOnForms = [];

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const formData = new FormData(form);

    for(let data of formData){
        console.log();
        arrayOfDataOnForms.push(data[1]);
    }

    console.log(formData.entries());


});