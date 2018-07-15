const https = require('https');
const apiKey = require('../config.js').apiKey;

let getPark = (parkCode, cb) => {

  let url = `https://developer.nps.gov/api/v1/parks?` + `parkCode=${parkCode}&api_key=${apiKey}`;

  https.get(url, (res) => {
    console.log(res.statusCode + ': ' + res.statusMessage);
    var body = '';

    res.on('data', (chunk) => {
      body += chunk;
    });

    res.on('end', () => {
      cb(body);
    });
  });
};

module.exports.getPark = getPark;
