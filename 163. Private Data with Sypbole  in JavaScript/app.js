const _radius = Symbol();  // symbol make unique identyfire
const _name = Symbol();
class Circle {
    constructor(radius) {
        this[_radius] = radius;
        this[_name] = name;
    }
    draw() {
        console.log('Drawing.....');
    }
}
let c1 = new Circle(2, 'shihab');
console.log(c1);

console.log(Object.getOwnPropertyNames(c1));
console.log(Object.getOwnPropertySymbols(c1));
let key = Object.getOwnPropertySymbols(c1)[0];
console.log(c1[key]);