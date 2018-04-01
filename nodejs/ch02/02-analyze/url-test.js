// url module load
var urlType = require('url');

// url resolved
var base = "http://kujirahand.com/url/test/index.html";
var u1 = urlType.resolve(base, 'a.html');
console.log("u1 = " + u1);

var u2 = urlType.resolve(base, '../b.html');
console.log("u2 = " + u2);

var u3 = urlType.resolve(base, '/c.html');
console.log("u3 = " + u3);