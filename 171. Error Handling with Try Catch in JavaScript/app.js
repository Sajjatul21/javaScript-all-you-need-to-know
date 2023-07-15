function makeWords(text) {
    try {
        let str = text.trim();
        let words = str.split(' ');
        return words;
    }
    catch (e) {
        console.log(e);
    }
}
let words = makeWords(5432);
console.log(words);