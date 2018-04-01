var casper = require('casper').create({verbose: true, logLevel: "debug"});

// URL 및 로그인 정보 변수.
var url = "http://lumyz.tistory.com/manage/";
var id = "rladudughks@naver.com";
var password = "fnakdl198312@";

casper.start();

casper.open(url);

// 로그인.
casper.then(function() {
	casper.fill("#authForm", {
		loginId: id,
		password: password
	}, true);
});

// 마우스 클릭.
casper.then(function() {
	// 선택지에 해당하는 요소 확인 후 클릭.
	var path = "#blogInfo > ul > li:nth-child(2) > span.txt > a";
	if (casper.exists(path)) {
		casper.mouseEvent('click', path);
	}
	casper.wait(3000);
});

casper.then(function() {
	casper.capture('capture.png', {
		top:0, left:0, width:1024, height:768
	});
});

casper.run();
