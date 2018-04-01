// module load
var fs = require('fs');

// 디렉토리를 동기적으로 실행.
console.log("mkdir 실행.");
fs.mkdirSync("test-sync");
console.log("mkdir 완료.");
