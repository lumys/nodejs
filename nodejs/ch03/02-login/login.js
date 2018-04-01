var casper = require('casper').create({verbose: true, loglevel: "debug"});

// URL 및 로그인 정보 변수.
var url = "http://lumyz.tistory.com/manage/";
var id = "rladudughks@naver.com";
var password = "fnakdl198312@";

casper.start();

casper.open(url);

// Form Submit
casper.then(function(){
	casper.fill("#authForm", {
		loginId: id,
		password: password
	}, true);
});

// 로그인 후 수행.
casper.then(function(){
	var getComment = function() {
		// 페이지 내의 document 객체 사용.
		return document.querySelector("#mArticle .box_blog.box_graph > .count_visitor:nth-child(1) > dd").innerText;
	};
	console.log("오늘 방문자 수: " + this.evaluate(getComment)); // evaluate() 메소드.
});

casper.then(function() {
	var getGuestBook = function() {
		return document.querySelector("#mArticle .box_blog.box_graph > .count_visitor:nth-child(3) > dd").innerText;
	};
	console.log("주간 방문자 수: " + this.evaluate(getGuestBook));
});

casper.run();

