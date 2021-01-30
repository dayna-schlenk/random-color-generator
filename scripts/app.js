const user = {
    email: 'dayna.schlenker@gmail.com',
    firstName: 'Dayna',
    lastName: 'Schlenker',
    born: 1993,
    city: 'Bloomington',
    state: "IL"
};

// Old way
function fullName(user) {
    return `${user.firstName} ${user.lastName}`
}

// Returns "Dayna Schlenker"

// New way, with destructuring
function fullName(user) {
    const {firstName, lastName} = user;
    return `${firstName} ${lastName}`;
}

// Returns the same

// Destructure on the way into the function - much shorter option
function fullName({firstName, lastName}) {
    return `${firstName} ${lastName}`;
}

// Returns the same