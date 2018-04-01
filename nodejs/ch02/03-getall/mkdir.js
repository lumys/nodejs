// module load
var fs = require('fs');

// make folder
console.log("mkdir 실행.");
fs.mkdir("test", function() {
	console.log("폴더 생성 완료.");
});

console.log("mkdir 실행 완료. 결과대기.");