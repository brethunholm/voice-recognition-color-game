import {isValidColor} from './colors.js'
export function logWords(results) {
    console.log(results[results.length-1][0].transcript)
}

export function handleResult({results}) {
    logWords(results);
    const words = results[results.length - 1][0].transcript;
    // lowercase everything
    let color = words.toLowerCase();
       // strip any spaces 
       color = color.replace(/\s/g, '');
    //  check if words said are valid color
    if(!isValidColor(color)) return; // that's  all folks 
    // if it is show thw UI for that 
    const colorSpan = document.querySelector(`.${color}`);
    colorSpan.classList.add('got');
    console.log(colorSpan);
    console.log('this is a valid color');
    console.log(color);
    // change the background color
    document.body.style.backgroundColor = color;

}