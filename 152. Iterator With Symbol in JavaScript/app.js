const arr = [1, 2, 3];
function createIterator(collection) {
    let i = 0;
    return {
        next() {
            return {
                done: i >= collection.length,
                value: collection[i++]
            };
        }
    };
}

console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
