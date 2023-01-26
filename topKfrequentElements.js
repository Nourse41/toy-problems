/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/*
  Input: Takes in an array of numbers and a number representing amount to return
  Output: Returns the K most frequent numbers found in the nums array as an array
  Constrants: time complexity
  Edge Cases:
    - array length could be from 1 to very large
    - each number could be a very large or small negative/positive number
    - gardanteed answer is unqie
    - k is range
*/

var hashToArray = (hashMap) => {
  result = [];

  for (var key in hashMap) {
      // if index is already occupied, add key to existing array, or create array at index of key
      result[hashMap[key]] ? result[hashMap[key]] = result[hashMap[key]].concat([key]) : result[hashMap[key]] = [key];
  }

  return result;
}


var topKFrequent = function(nums, k) {
  let hashMap = {};
  let results = []

  // iterate over nums array and add to hashMap
  nums.forEach((number) => {
      // if number exists in hashMap increment it or create new key with value of 1
      hashMap[number] ? hashMap[number]++ : hashMap[number] = 1;
  });

  // to hashMap into array
  let arrayHash = hashToArray(hashMap);

  // iterate over array hash in reverse k number of times while pushing values to result
  for (var i = arrayHash.length -1; i >= arrayHash.length - k; i--) {
      if (arrayHash[i].length > 1) {
          arrayHash[i].forEach((num) => {
              results.push(parseInt(num));
              i--;
          })
      } else {
          results.push(parseInt(arrayHash[i][0]));
      }
  }

  // return result array
  return results;
};