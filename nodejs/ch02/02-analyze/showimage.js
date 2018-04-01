// module load
var client = require('cheerio-httpcli');
var urlType = require('url');

// download
var url = "https://ko.wikipedia.org/wiki/" + encodeURIComponent("강아지");
var param = {};

function urlResolved(baseURL, dateURL) {
	var resultURL = urlType.resolve(baseURL, dateURL);
	return resultURL;
}

client.fetch(url, param, function(err, $, res) {
	if (err) { console.log("error"); return; }

	$("img").each(function(idx) {
		var alt = $(this).attr('alt');
		var src = $(this).attr('src');

		console.log(alt);

		src = urlResolved(url, src);
		console.log(" ==> " + src + "\n");
	});


});
