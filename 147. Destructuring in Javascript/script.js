let person = {
    name: 'shihab',
    email: "shihab@gmail.com",
    address: {
        city: "Chandpur",
        country: "Bangladesh"
    }
};
/* let { name, email, address } = person;
console.log(name, email, address); */
let { name, email, address: { city, country } } = person;
console.log(city, country);