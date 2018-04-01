//  module load
var client = require('cheerio-httpcli');

// download
var url = "http://jpub.tistory.com";
var param = {};

client.fetch(url, param, function(err, $, res) {
	// error check
	if (err) { console.log("Error:" , err); return;  }

	// print - download result
	var body = $.html();
	console.log(body);
});