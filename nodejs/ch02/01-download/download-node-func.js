// 다운로드 함수 실행.
download(
		"http://jpub.tistory.com/",
		"spring.html",
		function() { console.log("ok, spring."); }
	);

// 다운로드 함수 실행.
download(
		"http://jpub.tistory.com/537",
		"angular.html",
		function() { console.log("ok, angular."); }
	);

// url의 파일을 savepath에 다운로드하는 함수.
function download(url, savepath, callback) {
	// 사용 모듈 정의.
	var http = require('http');
	var fs = require('fs');
	var outfile = fs.createWriteStream(savepath);

	var req = http.get(url, function(res) {
		res.pipe(outfile);
		res.on('end', function() {
			outfile.close();
			callback();
		});
	});
}