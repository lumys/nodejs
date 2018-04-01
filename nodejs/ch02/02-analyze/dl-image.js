// module load
var client = require('cheerio-httpcli');
var request = require('request');
var fs = require('fs');
var urlType = require('url');

// savedir auto mkdir
var savedir = __dirname + "/img";
if (!fs.existsSync(savedir)) {
	fs.mkdirSync(savedir);
}

// URL Setting
var url = "https://ko.wikipedia.org/wiki/" + encodeURIComponent("강아지");
var param = {};

function urlResolved(baseURL, dateURL) {
	var resultURL = urlType.resolve(baseURL, dateURL);
	return resultURL;
}

// Get HTML File
client.fetch(url, param, function(err, $, res) {
	if (err) { console.log("error"); return; }

	// img 링크 추출하여 각 링크에 대해 함수 수행.
	$("img").each(function(idx) {
		var src = $(this).attr('src');
		// link resolved.
		src = urlResolved(url, src);

		// savefilename set
		var fname = urlType.parse(src).pathname;
		fname = savedir + "/" + fname.replace(/[^a-zA-Z0-9\.]+/g, '_');

		// download
		request(src).pipe(fs.createWriteStream(fname));

	});
});