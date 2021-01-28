// function rollDie(numSides = 6) {
//     return Math.floor(Math.random() * numSides) + 1;
// }

function greet(person, msg="Hey there", punc="!") {
    console.log(`${msg}, ${person}${punc}`);
}

// we gave msg a default value
// order matters, however; always have default params come second, third, etc - after any params that are not default

greet("Rosa")
// Hey there, Rosa!

greet("Rosa", "Hiya", "!!!!")
// Hiya, Rosa!!!!