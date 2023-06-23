//Closure is when a funciton is able to remember and access it's lexical scope even when that function executing outside it's lexical scope


//able to remember and access it's lexical scope
// when that function executing outside it's lexical scope

/* function test() {
    const msg = "I am Learning Lexical Scope and Closure";
    function sayMsg() {
        console.log(msg);
    }
    sayMsg();
}
test(); */


function test() {
    const msg = "I am Learning Lexical Scope and Closure";

    return function () {
        console.log(msg);
    };
}
const sayMsg = test();
// console.log(sayMsg)
sayMsg();