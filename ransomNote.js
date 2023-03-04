function checkMagazine(mag, note) {
  let magHash = {}, noteHash = {}, res = "Yes";

  // map magazine to hash
  for (var i = 0; i < mag.length; i++) {
      magHash[mag[i]] ? magHash[mag[i]]++ : magHash[mag[i]] = 1;
  }

  // map note to hash
  for (var i = 0; i < note.length; i++) {
      noteHash[note[i]] ? noteHash[note[i]]++ : noteHash[note[i]] = 1;
  }

  // iterate over note
  for (var key in noteHash) {
      // if word count of note is more than magazine count
      if (magHash[key] === undefined || noteHash[key] > magHash[key]) {
          // return "No"
          res = "No";
      }
  }

  // return "Yes"
  console.log(res);
}


let mag = [ 'ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts' ];
let note = [ 'ive', 'got', 'some', 'coconuts' ];

console.log(checkMagazine(mag, note));