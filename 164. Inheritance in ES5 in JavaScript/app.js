class Shape {
    constructor(color) {
        this.color = color;
    }
    draw() {
        console.log("Drawing......");
    }
}



class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculate() {
        return this.width * this.height;
    }
}

let r = new Rectangle(4, 5);
console.log(r);
r.draw();