const _radius = Symbol();  // symbol make unique identyfire
class Circle {
    constructor(radius) {
        this[_radius] = radius;
    }
    draw() {
        console.log('Drawing.....');
    }
}
let c1 = new Circle(2);
console.log(c1._radius);
