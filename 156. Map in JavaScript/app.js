let map = new Map([
    ["a", 10],
    ["b", 20],
    ["c", 30],
]);
// update value 
map.set('d', 40);
// delete value
map.delete('b');
// get the value
console.log(map.get('a'));
console.log(map);
console.log(map.size);