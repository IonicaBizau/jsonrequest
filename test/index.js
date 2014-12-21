// Dependencies
var JsonRequest = require("../lib")
  , Lien = require("lien")
  ;

// Init lien server
var server = new Lien({
    host: "localhost"
  , port: 9000
});

// Handle "/"
server.page.add("/", function (lien) {
    lien.end({
        Hello: "World"
    });
}).add("/hello", function (lien) {
    lien.end({
        Hello: "Mars"
    });
});

setTimeout(function () {
    JsonRequest("http://localhost:9000/", function (err, data) {
        console.log(err || data);
        JsonRequest({
            url: "http://localhost:9000/"
          , pathname: "/hello"
        }, function (err, data) {
            console.log(err || data);
            process.exit(0);
        });
    });
}, 100);