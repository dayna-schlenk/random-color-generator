// Generates random number between 0 and 255
function randomNum() {
    return Math.floor(Math.random() * (255 - 0) + 0);
}

// Applies random number to rgb sequence
let newRgb = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
console.log(newRgb);