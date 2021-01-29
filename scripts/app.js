let formData = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}

let newUser = {...formData, id: 2345, isAdmin: false};
// combines formData with new data - id and isAdmin