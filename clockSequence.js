// count how many times 3 or more identical numbers in a row during a 24 hour cycle on a digital clock
const clockDigitCount = () => {
  // create count
  let count = 0;

  for (var hour = 1; hour <= 12; hour++) {
    // loop 60 times
    for (var min = 0; min < 60; min++) {
      // convert current time to string
      let currHour = hour < 10 ? `0` + String(hour) : String(hour);
      let currMin = min < 10 ? `0` + String(min) : String(min);
      let time = currHour + currMin;

      // check if 3+ identical numbers in a row
      var maxSequence = 0;
      var currSequence = 1;
      for (var i = 0; i < time.length - 1; i++) {
        if (time[i] === time[i + 1]) {
          currSequence++;
        } else {
          currSequence = 1;
        }
        maxSequence = Math.max(maxSequence, currSequence)
      }
      console.log(time)
      // increment counter
      if (maxSequence >= 3) {
        count++;
      }
    }
  }

  // return count
  return count * 2;
}

console.log(clockDigitCount());