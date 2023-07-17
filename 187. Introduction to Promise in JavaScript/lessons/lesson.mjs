/* promise হচ্ছে  js এর constructor function । যেই function টা ব্যবহার করে আমরা একটা promise object তৈরি করে থাকি ।
   যে function/ constructor make করার জন্য আমাদের একটা argument আকারে callback function  দিতে হয়, এবং callBack function
   এর ভিতরে 2 টা টার্ম থাকতে পারে resolve অথবা reject ।
*//* 
let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'One');
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Two');
});

p1.then((v) => {
    console.log(v);
}); // .catch((e)=>{
//     console.log(e)
// }) 

p1.then((v) => {
    console.log(v);
}); */

// promise use case 

function getIPhone(isPassed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isPassed) {
                resolve('I have Got an Iphone'); /* এই argument টাকে আমরাে then block এ পাবে  */
            }
            else {
                reject(new Error('You have Failed')); /* এই argument টাকে আমরাে catch block এ পাবে  */
            }
        }, 2000);
    });
}

getIPhone(true)
    .then((res) => {
        console.log(res);
    })
    .catch((e) => {
        // console.log(e);
        console.log(e.message);
    });

/* 
getIPhone(false)
    .then((res) => {
        console.log(res);
    })
    .catch((e) => {
        // console.log(e);
        console.log(e.message);
    }); */