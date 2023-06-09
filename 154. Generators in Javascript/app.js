function* generate() {
    yield 1;
    yield 2;
    yield 3;
}
let iterate = generate();
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());