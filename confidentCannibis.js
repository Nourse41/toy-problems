// if either number is 33
// if both numbers sum to 33
// if either number can be subtracted to 33

const magicNumber33 = (a, b) => {
  if (a === 33 || b === 33) {
    return true;
  } else if (a + b === 33) {
    return true;
  } else if (a - b === 33 || b - a === 33) {
    return true;
  } else {
    return false;
  }
}

console.log('magicNumber33(0,33) =', magicNumber33(0,33));
console.log('magicNumber33(3,30) =', magicNumber33(3,33))
console.log('magicNumber33(36,3) =', magicNumber33(36,3))
console.log('magicNumber33(3,33) =', magicNumber33(3,33))
console.log('magicNumber33(36,3) =', magicNumber33(36,3))
console.log('magicNumber33(36,-3) =', magicNumber33(36,-3))
console.log('magicNumber33(0,-3) =', magicNumber33(0,-3))


