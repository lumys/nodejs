// module load
var client = require('cheerio-httpcli');
var urlType = require('url');


// download
var url = "http://jpub.tistory.com";
var param = {};

function urlResolved(baseURL, dateText, dateURL) {
	var resultURL = urlType.resolve(baseURL, dateURL);
	return dateText + " = " + resultURL;
}

client.fetch(url, param, function(err, $, res) {
	if (err) { console.log("error"); return; }

	// link
	$("a").each(function(idx) {
		var text = $(this).text();
		var href = $(this).attr('href');

		console.log(text + " : " + href);

		var result = urlResolved(url, text, href);

		console.log(" ==> " + result + "\n");

	});

});