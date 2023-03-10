/*
  Inputs: takes in a string of chars
  Output: returns true if the string is a palindrome
  Constraints: could be long string and only consists of chars
  Edge Cases:
        - could be an empty string
        - could contain non-alpa chars and lower/upper
*/

const fs = require('fs');
const input = process.argv[2];
const reader = fs.createReadStream(input)

const validChars = ["a", "b", "c", "e", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const isPalindrome = function(s) {
    let cleanString = "";

    if (s.length === 0 ) { return true; }


    for (var i = 0; i < s.length; i ++) {
        let lowerCaseChar = s[i].toLowerCase()
        if (validChars.includes(lowerCaseChar)) {
          cleanString += lowerCaseChar;
        }
      }

    for (var i = 0; i < cleanString.length/2; i++) {
      var p1 = i;
      var p2 = cleanString.length - (i + 1);

      if (cleanString[p1] !== cleanString[p2]) {
        return false;
      }

    }

    return true;
};

reader.on('error', (error) => {
  console.log('error parsing input', error)
})

reader.on('data', (chunk) => {
  const data = chunk.toString();
  console.log(isPalindrome(data));
})


