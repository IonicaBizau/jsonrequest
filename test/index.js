// Dependencies
var JsonRequest = require("../lib")
  , Lien = require("lien")
  ;

// Init lien server
var server = new Lien({
    host: "localhost"
  , port: 9000
});

// Add page
server.page.add("/", function (lien) {
    lien.end({
        Hello: "World"
    });
});

setTimeout(function () {
    JsonRequest("http://localhost:9000/", function (err, data) {
        console.log(err || data);
    });
}, 100);
