/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/*
  Inputs: takes in an array of strings
  Output: returns an array of arrays grouped together by matching anagrams
  Constrants: time complexity? --> ask?
  Egde Cases:
    - at least one string to many strings in input array
    - each string in the array could have a length from 0-100
    - array of strings are all lowercase english words
*/

var groupAnagrams = function(strs) {
  // create hashMap -- key === stored string | value === array of input string
  let hashMap = {};
  // create result array
  let resultArray = [];

  // iterate over input array
  strs.forEach((string) => {
      // turn current string into stored string
      var sortedString = string.split('').sort().join('');
      // if key of sorted exisits
      if (hashMap[sortedString] !== undefined) {
          // concat array at key of stored string with current string
          hashMap[sortedString] = hashMap[sortedString].concat([string]);
      // else
      } else {
          // create array with string at key of stored string
          hashMap[sortedString] = [string];
      }
  })

  // for each key in hashMap
  for (var key in hashMap) {
      // push value at key to result array
      resultArray.push(hashMap[key]);
  }
  // return result array
  return resultArray;
};