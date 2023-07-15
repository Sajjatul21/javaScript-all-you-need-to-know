function changeToInt(v) {
    let result = Number.parseInt(v);
    // if (result === NaN) {  
    if (!result) {
        return 'Please Provide a value which is able to convert in Integer';

    }
    return result;
}
const result = changeToInt('fdfdassda32.534');
console.log(result);