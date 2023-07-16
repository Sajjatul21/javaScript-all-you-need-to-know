/* synchronous => existing or occurring at the same time -> যে কোন জিনিস িএকটা সেম সময়ে ঘটবে */
/*  
    What is Synchronous Programming? 
    Ans:- Synchronous basically means that you can only execute one thing at a time .
    synchronous programming এ  একটার পর একটা লাইন execute হবে। যেমন ১এর পর ২ , ২এর পর ৩।
*/

var a = 10;
var b = 20;
var result = a + b;
console.log(result);


var response = storeResult(result);  /*  ধরা যাক আমরা এই storeResult  function এর মাধ্যমে server/ database থেকে  ডাটা store করাতে চাচ্ছি। এর মানে হলে আমরা আমাদের সিস্টেম থেকে আরেকটা সিস্টেমে ডাটা েআনতে  চাচ্ছি।
এখন এটা করলে আমাদের ডাটা স্টোর করতে সময় লাগবে। এখন যতক্ষন না পর্যন্ত ডাটা আসে ততক্ষন সে wait করবে এবং ততক্ষন response এর কাছেও ডাটা আসবে না সে ততক্ষস কোন কাজ করবে পারবে  না। এর  পরের কোড গুলোও কোন কাজ করতে পারবে না  এটা synchronous programming এর problem*/
if (response.success) {
    console.log('successfully stored');
}
else {
    console.log('data store failed');
} 

/* synchronous programming এ লাইন বাই লাইন কোন execute হবে এখন কোন কোন execute হতে যদি ১ ঘন্টা লাগে তখন next line execute হবে না সে তখণ অপেক্ষা করবে  */