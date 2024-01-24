const div = document.querySelector("div span");

window.addEventListener("keypress",(e)=>{
    
    div.textContent = e.key;
});