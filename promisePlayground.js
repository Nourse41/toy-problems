const https = require('https');
let url = process.argv[2];

const myPromise = new Promise((resolve, reject) => {
  https.get(url, (res) => {
    let body = "";

    res.on("data", (chunk) => {
      body += chunk;
      crossO
      resolve(body)
    });

    res.on("end", () => {
      try {
        // process JSON here
      } catch (error) {
        console.error(error.message);
      };
    });
  })
});


let handleFulfilled = (res) => {
  console.table(res)
}

let handleRejection = (err) => {
  console.log(err)
}

myPromise
  .then(handleFulfilled, handleRejection)

