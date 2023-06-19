// যখন একটা scope এর বিতরে আরেকটা scope থাকে তখন আমরা তাকে nested scope বলি।
// nested scope তৈরির করার একটা way তাহলো function diclaration

var x = 55;
function test() {
    var x = 45;
    console.log(x);
    function nested() {
        var y = 65;
        console.log(x);
    }
    console.log(y);
    nested();
}
test();