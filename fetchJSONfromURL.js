const https = require('https');
let url = process.argv[2];

https.get(url, (res) => {
  let body = "";

  res.on("data", (chunk) => {
    body += chunk;

    // console.log(body)
    let json = JSON.parse(body);
    console.log(json)
  });

  res.on("end", () => {
    try {
      // process JSON here
    } catch (error) {
      console.error(error.message);
    };
  });
})
  .on("error", (error) => {
    console.error(error.message);
  })
