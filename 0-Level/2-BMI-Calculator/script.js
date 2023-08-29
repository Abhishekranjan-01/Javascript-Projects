const heightInput = document.querySelector('[name=Height]');
const WeightInput = document.querySelector('[name=Weight]');

const calculateButton = document.querySelector('[type=submit]') ;

const InputContainer = document.querySelector('form');

const result = document.querySelector('[data-result]')

console.log(InputContainer);

// Message For UnderWeight
const Underweight = document.createElement('h4');
Underweight.style.color = 'Yellow';
Underweight.style.textAlign = 'center';
Underweight.textContent = '(Under Weight)';
// Message For Normal Range
const Normal = document.createElement('h4');
Normal.style.color = '#009432';
Normal.style.textAlign = 'center';
Normal.textContent = '(Normal Range)';
// Message For  OverWeight
const OverWeight = document.createElement('h4');
OverWeight.style.color = '#EA2027';
OverWeight.style.textAlign = 'center';
OverWeight.textContent = '(Over Weight)';

InputContainer.addEventListener('submit',(e)=>{

    e.preventDefault();

    console.log("Form Submited");
    // console.log(e);


     const BMI = WeightInput.value/(Math.pow((heightInput.value/100),2));
    //  For Underweight

    // console.log(BMI.toPrecision(2));
    result.innerHTML= `<h2>Your BMI Is ${BMI.toPrecision(4)}</h2>`;
    
    if(BMI < 18.6){
        result.append(Underweight);
    }
    else if(BMI >= 18.6 && BMI <=24.9){
        result.append(Normal);
    }
    else{
        result.append(OverWeight);
    }
});