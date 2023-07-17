/* promise হচ্ছে  js এর constructor function । যেই function টা ব্যবহার করে আমরা একটা promise object তৈরি করে থাকি ।
   যে function/ constructor make করার জন্য আমাদের একটা argument আকারে callback function  দিতে হয়, এবং callBack function
   এর ভিতরে 2 টা টার্ম থাকতে পারে resolve অথবা reject ।
*/
let p1 = new Promise((resolve, reject) => {

});
console.log(p1);