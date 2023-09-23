const darkModeButton = document.getElementById('dark-mode');
const body = document.body;


darkModeButton.addEventListener("click",()=>{

    darkModeButton.classList.contains('yellowAndWhite') ?
     (darkModeButton.classList.remove('yellowAndWhite')
     ,
     body.classList.remove('darkColor')) : 
     (darkModeButton.classList.add('yellowAndWhite'),
     body.classList.add('darkColor'));

    const articleSections = document.querySelectorAll('section');

    // For Adding and Removing Dark Mode Classes
    if(articleSections[0].classList.contains('darkSection')){
        for(let articleSection of articleSections){
            articleSection.classList.remove('darkSection');
            articleSection.classList.remove('softWhite');

        }
    }
    else{
        
        for(let articleSection of articleSections){
            articleSection.classList.add('darkSection');
            articleSection.classList.add('softWhite');
        }
    }

})

