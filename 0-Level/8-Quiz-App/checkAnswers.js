function questionOne(e){

    const questionOneOptions = document.querySelectorAll("[data-questions='Options_for_Q-1'] li")

    // Checking for the Seclected Answer Is Right Or Not
    if(e.target.innerText !== "Inheritance"){

        // Marking Red For The Incorrect Answer
        e.target.classList.add('bg-red-600');
        //Marking Green For The Correct Answer
        questionOneOptions[2].classList.add('bg-lime-500');
    }
    else{
        //Marking Green If The Selected Answer Is Correct
        questionOneOptions[2].classList.add('bg-lime-500');
    }


    for(option of questionOneOptions){
        
        option.removeAttribute("onClick");

    }
}
