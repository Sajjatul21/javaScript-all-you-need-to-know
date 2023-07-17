const BASE_URL = "https://jsonplaceholder.typicode.com/";
fetch(`${BASE_URL}/users/1`)
    .then(res => {
        console.log(res);
    })
    .catch(e => {
        console.log(e);
    });