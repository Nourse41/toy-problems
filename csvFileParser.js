const fs = require('fs');
const filepath = './files/cities.csv';

const reader = fs.createReadStream(filepath)

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
    line.NS = String(row[3]);
    line.LonD = Number(row[4]);
    line.LonM = Number(row[5]);
    line.LonS = Number(row[6]);
    line.EW = row[7];
    line.City = row[8];
    line.State = row[9]
    purchases.push(line);
  })
  // console.log(purchases)
})
