/* const xhr = new XMLHttpRequest();
xhr.open('get', 'https://jsonplaceholder.typicode.com/users');

xhr.onreadystatechange = function (event) {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            let users = JSON.parse(xhr.response);
            console.log(users);
        }
        else {
            console.log(xhr.status);
        }
    }
};
xhr.send(); */

function getRequest(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('get', url);

    xhr.onreadystatechange = function (event) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {

                let response = JSON.parse(xhr.response);
                callback(null, response);
            }
            else {
                callback(xhr.status, null);
            }
        }
    };
    xhr.send();

}
getRequest('https://jsonplaceholder.typicode.com/users', (err, res) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(res);
    }
});
