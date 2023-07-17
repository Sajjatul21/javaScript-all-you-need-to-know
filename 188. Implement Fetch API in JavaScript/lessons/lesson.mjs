/*
 const BASE_URL = "https://jsonplaceholder.typicode.com";

fetch(`${BASE_URL}/users/2`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        return Promise.resolve('Something');
    })
    .then(str => {
        console.log(str);
        return Promise.resolve('another promise');
    })
    .then(another => {
        console.log(another);
    })
    .catch(e => {
        console.log(e);
    });
    
*/
const BASE_URL = "https://jsonplaceholder.typicode.com";


function getRequest(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('get', url);
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let response = JSON.parse(xhr.response);
                    resolve(response);


                }
                else {
                    reject(new Error("error Occurred"));
                }
            }
        };
        xhr.send();
    });
}

let res = getRequest(`${BASE_URL}/users/2`);
console.log(res);