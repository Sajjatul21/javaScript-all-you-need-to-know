/* const delay = s => new Promise((resolve) => setTimeout(resolve, s * 1000));
delay(2).then(() => console.log('2 second delay'));
delay(1).then(() => console.log('1 second delay'));
delay(3).then(() => console.log('3 second delay'));
delay(2).then(() => console.log('2 second delay'));
delay(5).then(() => console.log('5 second delay')); */


/* let p1 = Promise.resolve('test');
// console.log(p1);
p1.then((v) => {
    console.log(v);
});

let p2 = Promise.reject('REJECT');
p2.catch((e) => console.log(e)); */

let p1 = Promise.resolve('One');
let p2 = Promise.resolve('Two');
let p3 = Promise.resolve('Three');

let promiseArr = [p1, p2, p3];     /* Promise.all argument আকারে array গ্রহন করে তাই আমরা promise গুলাকে array এর মধ্যে রাখলাম */
Promise.all(promiseArr)
    .then(arr => {
        console.log(arr);
    });