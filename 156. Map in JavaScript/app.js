let map = new Map([
    ["a", 10],
    ["b", 20],
    ["c", 30],
]);
// update value 
map.set('d', 40);
map.set({ name: "Shihab" }, 50);
// delete value
map.delete('b');
// get the value
/* console.log(map.get('a'));
console.log(map);
console.log(map.size);

console.log(map.values());
console.log(map.keys());
console.log(map.entries()) */


/* for (let [key, value] of map) {
    console.log(key, value);
} */

map.forEach((key, value) => {
    console.log(key, value);
});