let prices = [9.99, 1.50, 19.99, 49.99, 30.50];
// figure out total amount of what I've bought
// you could run a for loop, as one approach

// or, you can use reduce (same idea)

let total = prices.reduce((total, price) => {
    return total + price;
})