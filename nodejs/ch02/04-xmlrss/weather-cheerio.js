// 기상청 기상예보 RSS
var RSS = "http://www.weather.go.kr/weather/forecast/mid-term-rss3.jsp";

// module load
var client = require('cheerio-httpcli');

// RSS 다운로드.
client.fetch(RSS, {}, function(err, $, res) {
	if (err) { console.log("error"); return; }

	var city = $("location:nth-child(1) > city").text();
	$("location:nth-child(1) > data").each(function(idx) {

		var tmEF = $(this).find('tmEF').text();
		var wf = $(this).find('wf').text();
		var tmn = $(this).find('tmn').text();
		var tmx = $(this).find('tmx').text();

		console.log(city + " " + tmEF + " " + wf + " " + tmn + " " + tmx);


	});
});