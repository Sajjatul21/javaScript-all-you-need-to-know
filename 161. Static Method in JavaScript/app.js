/* function Reactangle(width, height) {
    this.width = width;
    this.height = height;
}
Reactangle.prototype.draw = function () {
    console.log(this);
    console.log('Drawing....');
};
let react1 = new Reactangle(12, 15);  */

/* class Reactangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    draw() {
        console.log('Drawing.......');
    }
}
const react1 = new Reactangle(23, 55);
console.log(react1);
 */

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    print() {
        console.log(this.name, this.email);
    }
    static create(str) {
        let person = JSON.parse(str);
        return new Person(person.name, person.email);
    }
}

let str = '{"name":"Sajjatul Islam","email":"sajjatul@example.com"}';

let p1 = Person.create(str);
console.log(p1);
console.log(p1 instanceof Person);
p1.print();