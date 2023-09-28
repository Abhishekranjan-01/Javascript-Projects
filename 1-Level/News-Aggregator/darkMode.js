const darkModeButton = document.getElementById('dark-mode');

darkModeButton.addEventListener("click",()=>{

    const body = document.body;

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


//Check Dark Mode Status and Implement If It Exist On Body

function darkModeStatus(){
// For Maintaining Dark Mode If Body Contains
setTimeout(()=>{

    const body = document.body;
  
    if(body.classList.contains('darkColor')){
      console.log(body.classList.contains('darkColor'));
      const articleSections = document.querySelectorAll('section');
  
      for(let article of articleSections ){
        console.log(article);
        article.classList.add('darkSection','softWhite');
        // article.classList.remove('bg-gray-200');
      }
    }
  console.log("Status Checking Done");
  },1000);
  
}