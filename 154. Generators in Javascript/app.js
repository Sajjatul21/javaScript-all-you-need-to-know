/* function* generate() {
    yield 1;
    yield 2;
    yield 3;
} 

let iterate = generate();
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next()); */



function* generate(collection) {
    for (let i = 0; i < collection.length; i++) {
        yield collection[i];
    }
}

const array = [11, 22, 33];
let iterate = generate(array);
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());