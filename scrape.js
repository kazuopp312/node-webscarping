const request = require('request');
const cheerio = require('cheerio');

request('https://expressjs.com/ja/guide/routing.html', (error,
response, html) => {
  if(!error && response.statusCode == 200) {
    const $ = cheerio.load(html)

    const siteHeading = $('.site-heading');

    const output = siteHeading.find('h2').text();

    console.log(output);
  }
});