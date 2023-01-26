/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/*
Input: takes in two strings
Output: returns true if two strings are anagrams
Contrants: strings will be at least 1 char long and shorter than very large
Edge Case:
*/

// create function that turns string into an object of char count
const stringToCountObj = (string) => {
  // create an result object
  let result = {};

  // iterate over string
  for (var i = 0; i < string.length; i++) {
    // if key doesnt exist on object
    if (result[string[i]] === undefined) {
      // create key with value of one
      result[string[i]] = 1;
    } else {
      // increment key count
      result[string[i]]++;
    }
  }
  // return result object
  return result;
};

let isAnagram = function(s, t) {
    // if input string lengths don't match, return false
    if (s.length !== t.length) {
        return false;
    }

    // turn input strings into count objects
    const sCount = stringToCountObj(s);
    const tCount = stringToCountObj(t);

    // iterate over first object and compare each key value
    for (var key in sCount) {
      // key doesnt exisit
      if (tCount[key] === undefined) {
          return false;
      // if count does not match
      } else if (tCount[key] !== sCount[key]) {
          return false;
      }
    }

    // return true
    return true;
};