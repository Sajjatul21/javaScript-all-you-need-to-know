function makeWords(text) {
    let str = text.trim();
    let words = str.split(' ');
    return words;
}
let words = makeWords('           I am Shihab Hossain             ');
console.log(words);