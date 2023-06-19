/* function Reactangle(width, height) {
    this.width = width;
    this.height = height;
}
Reactangle.prototype.draw = function () {
    console.log(this);
    console.log('Drawing....');
};
let react1 = new Reactangle(12, 15);  */

class Reactangle {
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