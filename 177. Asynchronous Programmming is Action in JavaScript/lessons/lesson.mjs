console.log('I am Line One');

setTimeout(() => {
    console.log('I am Line Two');
}, 3000);


setTimeout(() => {
    console.log('I am Line Three');
}, 0);

console.log('I am Line Four');

setTimeout(() => {
    console.log('I am Line Five');
}, 1000);

 /*     JavaScript asynchronous 
        Asynchronous মানে হলো যার কাজ যখন শেষ হবে সে তখন আউটপুট দিয়ে দিবে, কেউ  কার জন্য বসে থাকবে না।
 */