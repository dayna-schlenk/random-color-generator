// Generates random number between 0 and 255
function randomNum() {
    return Math.floor(Math.random() * (255 - 0) + 0);
}

// Testing button
let btn = document.querySelector("#color-changer");

btn.onclick = function() {
    // Applies random number to rgb sequence
    let newRgb = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;

    // Apply color to background
    document.body.style.backgroundColor = newRgb;

    // Change h1 to indicate rgb
    document.querySelector("h1").innerText = newRgb;
}