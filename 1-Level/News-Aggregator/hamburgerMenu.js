const sideBar = document.getElementById('hamburger-menu');
const  hamburgerButton = document.querySelector('[role=button]');

hamburgerButton.addEventListener('click',()=>{

    if(sideBar.classList.contains('max-md:-translate-x-full')){
        sideBar.classList.remove('max-md:-translate-x-full');
       
    }
    else{
        
        sideBar.classList.add('max-md:-translate-x-full');
   
    }

});