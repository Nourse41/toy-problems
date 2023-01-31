// takes in two strings as an input (v1 & v2)

// output: returns -1 if.... version 1 is less than version two
//         returns 0 if.... version 1 equal version two
//         returns 1  if version 1 is greater than version two


// input [major].[minor].[patch].[build]

// Input parameters: (String("2"), String("2.0")) ---> 0
// Input parameters: (String("2"), String("2.0.0")) ---> 0
// Input parameters: (String("2.1.0"), String("2.0.1")) --> 1
// Input parameters: (String("2"), String("2.0.0.0.1")) ---> -1

let VersionCompare = ( version1, version2 ) => {
  // split input strings in to arrays of numbers
  let ver1Arr = version1.split('.');
  let ver2Arr = version2.split('.');

  // iterate 5 times
  for (var i = 0; i < 5; i++) {
    // turn into number and if undefined set to 0
    let ver1num = parseInt(ver1Arr[i]) ? parseInt(ver1Arr[i]) : 0;
    let ver2num = parseInt(ver2Arr[i]) ? parseInt(ver2Arr[i]) : 0;

    // if any number in version 1 is smaller than version2... return -1
    if (ver1num < ver2num) {
      return -1;
    // if any number in version 1 is larger than version2... return 1
    } else if (ver1num > ver2num) {
      return 1;
    }
  }
  // return 0 (no larger or smaller comparisons)
  return 0;
}

console.log(VersionCompare('2.1.1.1.3','2.1.1.1.2'))