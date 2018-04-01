// module load
var client = require('cheerio-httpcli');

// download
var url = "http://jpub.tistory.com";
var param = {};

client.fetch(url, param, function(err, $, res) {
	if (err) { console.log("error"); return; }

	// link
	$("a").each(function(idx) {
		var text = $(this).text();
		var href = $(this).attr('href');
		console.log(text + " : " + href);
	});

});