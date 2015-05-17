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
server.page.add(/^\/$/, function (lien) {
    lien.end({
        Hello: "World"
    });
})

// Handle "/hello"
server.page.add(/^\/hello$/, function (lien) {
    lien.end({
        method: lien.method
      , data: lien.data
    });
});

server.on("load", function (err) {
    if (err) { throw err; }
    JsonRequest("http://localhost:9000/", function (err, data) {
        console.log(err || data);
        JsonRequest("http://localhost:9000/hello", {
            foo: "bar"
        }, function (err, data) {
            console.log(err || data);
            JsonRequest("https://status.github.com/api.json", function (err, data) {
                console.log(err || data);
                process.exit(0);
            })
        });
    });
});
