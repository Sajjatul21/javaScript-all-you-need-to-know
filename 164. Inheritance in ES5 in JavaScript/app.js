class Shape {
    draw() {
        console.log("Drawing......");
    }
}



class Rectangle {
    constructor(width, height){
        this.width = width
        this.height = height
    }

    calculate(){
        return this.width * this.height
    }
}