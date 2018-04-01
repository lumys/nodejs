// module load
var request = require('request');
var fs = require('fs');

// URL Setting
var url = "http://jpub.tistory.com/";
var savepath = "test.html";

// download
request(url).pipe(fs.createWriteStream(savepath));