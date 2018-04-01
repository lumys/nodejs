// 링크를 분석해서 다운로드(node.js)
// module load
var client = require('cheerio-httpcli');
var request = require('request');
var urlType = require('url');
var fs = require('fs');
var path = require('path');

// common setting
// link search lev
var LINK_LEVEL = 3;
// 기준 URL 페이지.
// var TARGET_URL = "http://nodejs.jp/nodejs.org_ja/docs/v0.10/api/"; 존재하지않는 페이지.
var TARGET_URL = "https://nodejs.org/dist/latest-v8.x/docs/api/";
var list = {};

// main process
downloadRec(TARGET_URL, 0);

// 지정 URL을 최대 LEVEL 단계까지 다운로드.
function downloadRec(url, level) {
	// max lev
	if (level >= LINK_LEVEL) return;

	// 이미 다운받은 사이트는 무시.
	if (list[url]) return;
	list[url] = true;

	// 외부페이지 무시.
	var us = TARGET_URL.split("/");
	us.pop();
	var base = us.join("/");
	if (url.indexOf(base) < 0) return;

	// HTML 취득.
	client.fetch(url, {}, function(err, $, res) {
		// 링크된 페이지를 취득
		$("a").each(function(idx) {
			// <a> 태그의이 링크를 획득
			var href = $(this).attr('href');
			if (!href) return;

			// 상대 경로를 절대 경로로 변환.
			href = urlType.resolve(url, href);

			// '#' 이후를 무시 (a.html#aa와 a.html#bb는 같다.)
			href = href.replace(/\#.+$/, ""); // 말피의 #를 제거.
			downloadRec(href, level + 1);
		});

		// 페이지 저장(파일명 지정)
		if (url.substr(url.length - 1, 1) == '/') {
			url += "index.html";
		}

		var savepath = url.split("/").slice(2).join("/");
		checkSaveDir(savepath);
		console.log(savepath);
		fs.writeFileSync(savepath, $.html());
	});
}

// 저장할 디렉토리의 존재유무 확인.
function checkSaveDir(fname) {
	// 디렉토리 부분만 검출.
	var dir = path.dirname(fname);

	// 디렉토리를 재귀적으로 생성.
	var dirlist = dir.split("/");
	var p = "";
	for (var i in dirlist) {
		p += dirlist[i] + "/";
		if (!fs.existsSync(p)) {
			fs.mkdirSync(p);
		}
	}

}