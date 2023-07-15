const _radius = Symbol();  // symbol make unique identyfire
const _name = Symbol();
const _draw = Symbol();
class Circle {
    constructor(radius) {
        this[_radius] = radius;
        this[_name] = name;

    }
    [_draw]() {
        console.log('Drawing.....');
    }
}
let c1 = new Circle(2, 'shihab');
console.log(c1);

