function sayMyName(name) {
    let result;
    setTimeout(() => {
        result = name;
        console.log('I have done......');
    });
    return result;
}
let output = sayMyName('Sajjatul Islam');
console.log(output);