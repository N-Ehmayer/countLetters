var letter = process.argv[2].split(' ').join('').toLowerCase();
console.log(letter);
var letterCount = {};

function countLetter(word) {
  for (var i = 0; i < word.length; i++) {
    if (letterCount[word[i]]) {
      letterCount[word[i]]++;
    } else {
      letterCount[word[i]] = 1;
    }
  }
  return letterCount;
}

countLetter(letter);
console.log(letterCount);
