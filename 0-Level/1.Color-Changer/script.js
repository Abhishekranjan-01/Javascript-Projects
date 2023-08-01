const colors = document.querySelectorAll('[data-color-container] div');
const body = document.querySelector('body');
const button = document.querySelector('button');

// button.textContent = body.style.background;
let hexValue = '#ffffff';

console.log(colors);

for(let i of colors){
    
    
    i.addEventListener('click',(e)=>{

    const styleObject=getComputedStyle(i);
    const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`    
        
        // console.log((temp.backgroundColor));
        console.log((i.style));
        body.style.backgroundColor = styleObject.backgroundColor;
        button.textContent = styleObject.backgroundColor;
        hexValue = rgb2hex(styleObject.backgroundColor);
        console.log(hexValue);
        
    })

}

// Event On Button

button.addEventListener('click',()=>{

    
    let textContent = button.textContent;

    textContent[0] == 'r' ? (button.textContent = hexValue) 
    : (button.textContent = getComputedStyle(body).backgroundColor);

    // console.log(textContent[0],":  ",body.style.backgroundColor);
    // console.log(body.style.backgroundColor);
    // console.log(getComputedStyle(body).backgroundColor);
    
    console.log(button.textContent[0]);
    console.log(button.textContent);
})