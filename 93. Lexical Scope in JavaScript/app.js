var x = 44;

function test() {
    // var x = 33
    function nested() {
        console.log(x);
    }
    nested();
}
test();