const fs = require('fs');
const filepath = process.argv[2];
const reader = fs.createReadStream(filepath)

const removeQuotes = (s) => {
  let res = ``;
  for (var i = 0; i < s.length; i++) {
    if ( s[i] !== `'` && s[i] !== `"` && s[i] !== ` `) {
      res += s[i];
    }
  }
  return res;
}


reader.on('error', (error) => {
    // handle error
    console.log('error', error);
  })

reader.on('data', (chunk) => {
  console.log(typeof chunk)
  let rows = chunk.toString().split('\n').slice(1);
  let purchases = [];

  rows.forEach((row) => {
    row = row.split(',');
    let line = {};

    // "LatD", "LatM", "LatS", "NS", "LonD", "LonM", "LonS", "EW", "City", "State"
    line.LatD = Number(row[0]);
    line.LatM = Number(row[1]);
    line.LatS = Number(row[2]);
    line.NS = removeQuotes(row[3]);
    line.LonD = Number(row[4]);
    line.LonM = Number(row[5]);
    line.LonS = Number(row[6]);
    line.EW = removeQuotes(row[7]);
    line.City = removeQuotes(row[8]);
    line.State = removeQuotes(row[9]);
    purchases.push(line);
  })
  console.table(purchases);
})


