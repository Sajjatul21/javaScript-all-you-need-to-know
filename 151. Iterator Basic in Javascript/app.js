/* const arr = [1, 2, 3, 4];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);

} */

function createIterator(collection) {
    let index = 0;
    return {
        next() {
            return {
                done: index >= collection.length,
                value: collection[index++]
            };
        }
    };
}
const arr = [1, 2, 3, 4];
let iterate = createIterator(arr);
// console.log(iterate);
console.log(iterate.next());
console.log(iterate.next());
console.dir(iterate.next);
