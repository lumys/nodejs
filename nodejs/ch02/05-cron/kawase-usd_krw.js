// 환율 API URL
var API = "http://api.aoikujira.com/kawase/get.php?code=USD&format=json";
// module load
var request = require('request');
var fs = require('fs');

// Web API request
request(API, function(err, response, body) {
	// HTTP error Check...
	if (err || response.statusCode != 200) {
		console.log("ERROR", err); return;
	}

	// JSON을 JS객체로 변환.
	var r = JSON.parse(body);
	var krw = r["KRW"];

	// 환율을 파일에 저장(파일명에는 날짜 표기)
	var t = new Date();
	var fname = "USD_KRW_" + t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDay() + ".txt";

	var text = "1usd=" + krw + "krw";
	console.log(text);

	fs.writeFile(fname, text);

});
