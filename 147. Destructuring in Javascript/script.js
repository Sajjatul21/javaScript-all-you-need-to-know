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


// array decstructuring 

let array = [1, 2, 3, 4, 5, 6, 7];
let [first, second, , , , , last] = array;
console.log(first, second, last);
