function makeWords(text) {
    try {
        let str = text.trim();
        let words = str.split(' ');
        return words;
    }
    catch (e) {
        // console.log(e);
        // console.dir(e);
        // console.log(e.message);
        console.log('Please Provide a valid Text');
    }
}
let words = makeWords(5432);
console.log(words);