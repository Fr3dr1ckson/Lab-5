const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');

const transliterate = (word, bigLetters) => {
    const dictionary = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'ґ': 'g', 'д': 'd', 'е': 'e', 'є': 'ie',
        'ж': 'zh', 'з': 'z', 'и': 'y', 'і': 'i', 'ї': 'i', 'й': 'i', 'к': 'k', 'л': 'l',
        'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
        'ф': 'f', 'х': 'h', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ь': '', 'ю': 'iu', 'я': 'ia'
    };

    const symbols = [',','.','?','!',' ',"'",'/',':',';', '\"'];
    let result = '';
    for (let i = 0; i < word.length; i++) {
        if (dictionary[word[i]]) {
            result += bigLetters.includes(i) ? firstBigLetter(dictionary[word[i]]) : dictionary[word[i]];
        }
        else if (symbols.includes(word[i])) {
            result += word[i]
        }
    }
    return result;
}

inputText.addEventListener('input', function() {
    let inputWord = this.value
    let bigLetters = saveIndexOfBigLetters(inputWord)
    inputWord = inputWord.toLowerCase()
    outputText.value = transliterate(inputWord, bigLetters);
});

function saveIndexOfBigLetters(word){
    let bigLetters = [];
    for(let i = 0; i< word.length; i++){
        if (isBigLetter(word[i])) bigLetters.push(i)
    }
    return bigLetters
}
function isBigLetter(letter){
    return letter !== letter.toLowerCase();
}

function firstBigLetter(word) {
    if(word.length > 1){
        return word[0].toUpperCase() + word.slice(1);
    }
    return word.toUpperCase()
}
