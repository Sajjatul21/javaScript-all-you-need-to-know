/* let set = new Set([1, 2, 3]);
console.log(set); */


let set = new Set([1, 2, 3]);
set.add(4);
set.add(5);
set.add(1);
set.add(2);
console.log(set.has(2));
console.log(set);
