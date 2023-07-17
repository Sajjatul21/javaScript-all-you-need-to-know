/* const delay = s => new Promise((resolve) => setTimeout(resolve, s * 1000));
delay(2).then(() => console.log('2 second delay'));
delay(1).then(() => console.log('1 second delay'));
delay(3).then(() => console.log('3 second delay'));
delay(2).then(() => console.log('2 second delay'));
delay(5).then(() => console.log('5 second delay')); */


let p1 = Promise.resolve('test');
// console.log(p1);
p1.then((v) => {
    console.log(v);
});