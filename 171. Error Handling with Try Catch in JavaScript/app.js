function makeWords(text) {
    let str = text.trim();
    let words = str.split(' ');
    return words;
}
let words = makeWords(5432);
console.log(words);