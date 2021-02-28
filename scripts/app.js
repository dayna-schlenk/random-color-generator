// Create 100 new button elements with JS only

// loop to create a button 100 times
for (let i = 0; i < 100; i++) {
    // Create new empty button element
    let newBtn = document.createElement("button");

    // Add text to the button
    newBtn.innerText = "Hello";

    // Add button to the container
    document.getElementById("container").appendChild(newBtn);
}