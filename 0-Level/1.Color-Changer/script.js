const colors = document.querySelectorAll('[data-color-container] div');
const body = document.querySelector('body');
const button = document.querySelector('button');
const reset = document.querySelector('[data-reset]');

// button.textContent = body.style.background;
let hexValue = '#ffffff';


// Events On All 5 Color Divs
for(let i of colors){
 
    i.addEventListener('click',(e)=>{

    const styleObject=getComputedStyle(i);
    const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`    
        
        // console.log((temp.backgroundColor));
        console.log((i.style));
        body.style.backgroundColor = styleObject.backgroundColor;
        button.textContent = styleObject.backgroundColor;
        hexValue = rgb2hex(styleObject.backgroundColor);
        // console.log(hexValue);
        
    })

}

// Event On Button Rgb/hex Button

button.addEventListener('click',()=>{

    
    let textContent = button.textContent;

    textContent[0] == 'r' ? (button.textContent = hexValue) 
    : ((button.textContent = getComputedStyle(body).backgroundColor));

})

//Event On Reset-Button
reset.addEventListener('click',()=>{
body.style.backgroundColor = 'rgb(255, 255, 255)';

button.textContent = 'rgb(255, 255, 255)';
})