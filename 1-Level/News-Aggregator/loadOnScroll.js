let i =0;   //'i' is counter which is responsible for getting position details for current article on viewport and loading new aritcle. 
window.addEventListener("scroll",loadArticle);

function resetCounter(){
    i=0;
    // For Scrolling Page To The Top
    window.scrollTo(0,0);
}

function loadArticle(){

    
    const sections = document.querySelectorAll('section');


    // console.log("Active State !");
  
    // console.log(sections.length);

    while(i<sections.length){

        try{
            // console.log(`Inside Try i: = ${i}`);
            // console.log(sections[i-1].getBoundingClientRect().top);
            // console.log("window inner height",window.innerHeight);
            // console.log("window outer height",window.outerHeight);
            
            //Will load new aritle when current article will go 69% top of the current viewport 
            if((sections[i].getBoundingClientRect().top) < (69*(window.innerHeight)/100)){
                sections[i+1].classList.remove('hidden');
                sections[i+1].classList.add("animate__animated",'animate__backInUp','duration-200','delay-200');

                i++;

                break;
                

            }
            // If Condition Not Matched For Loading New Artile Loop will end
            else{
            
                // i++;
                // console.log(`Condition Not Matched For Loading {else}: `,i);
                break;
            }
        }catch(error){
            // console.log(error);
            i++;
            // console.log(`After Catching :  ${i}`);
        }
        // console.log(`Before Loop End i: = ${i}`);

        }

}