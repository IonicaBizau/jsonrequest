// Dependencies
var JsonRequest = require("../lib")
  , Lien = require("lien")
  , Assert = require("assert")
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
    server._isRunning = true;
});

it("should wait until the server starts", function (cb) {
    if (server._isRunning) {
        return cb();
    }
    server.on("load", function (err) {
        Assert.equal(err, null);
        cb();
    });
});

it("should support data passing in the second argument", function (cb) {
    JsonRequest("http://localhost:9000/", function (err, data) {
        Assert.equal(err, null);
        Assert.deepEqual(data, {
            "Hello": "World"
        });
        cb();
    });
});

it("should support data passing in the options object", function (cb) {
    JsonRequest({
        url: "http://localhost:9000/hello"
      , data: {
            foo: "bar"
        }
    }, function (err, data) {
        Assert.equal(err, null);
        Assert.deepEqual(data, {
            method: "post"
          , data: {
                foo: "bar"
            }
        });
        cb();
    });
});

it("should support get method and https protocol", function (cb) {
    JsonRequest("https://status.github.com/api.json", function (err, data) {
        Assert.equal(err, null);
        Assert.equal(data.constructor === Object, true);
        cb();
    });
});
