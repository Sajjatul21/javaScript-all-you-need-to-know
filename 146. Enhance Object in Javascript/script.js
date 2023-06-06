let a = 10, b = 20;

const obj = {
    a,
    b,
    print() {
        console.log(this);
    }
};
obj.print();