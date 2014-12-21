var Http = require("http")
  , Ul = require("ul")
  , Url = require("url")
  ;

var JsonRequest = module.exports = function (options, callback) {

    // Handle options as string
    if (typeof options === "string") {
        options = {
            url: options
        };
    }

    var parsed = Url.parse(options.url)
      , defaults = Ul.clone(parsed)
      ;

    defaults.method = "GET";
    defaults.headers = { "Content-Type": "application/json" };

    // Merge options
    options = Ul.merge(defaults, options);

    // Unique callback
    var _done = false;
    function opt_callback(err, data) {
        if (_done) { return; }
        _done = true;
        callback(err, data);
    }

    // Create the request
    Http.request(options, function(res) {
        res.setEncoding("utf8");
        res.on("data", function (data) {
            try {
                data = JSON.parse(data);
            } catch (e) {}
            opt_callback(null, data);
        });
    }).on("error", function (e) {
        opt_callback(e, null);
    }).end();
};
