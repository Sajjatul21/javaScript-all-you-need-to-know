let s1 = Symbol();
let s2 = Symbol('test symbol');
// console.log(s1);
// console.log(s2);
console.log(s1 === s2);
// কোন একটা object / class কে privet করার জন্য আমরা ‍ symbol use করি।  
// ‍anam তৈরির ক্ষেত্রে আমরা symbole use করতে পারি।
let toss = {
    HEAD: Symbol("HEAD"),
    TAIL: Symbol("TAIL")
};
// name collition ক্ষেত্রে আমরা symbole use করতে পারি।
// ‍Symbole unique identification create করে । যেখানে আমাদের  unique identification দরকার আমরা সেখানে Symbole use করব।