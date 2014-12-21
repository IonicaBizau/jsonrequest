// Dependencies
var Http = require("http")
  , Ul = require("ul")
  , Url = require("url")
  , QueryString = require("querystring")
  ;

/**
 * JsonRequest
 * Creates an HTTP request using the options passed in the first parameter.
 * Then the callback function is called (with `error` and `data` parameters).
 *
 * @name JsonRequest
 * @function
 * @param {String|Object} options A string being the request url or an object containing the following fields:
 *
 *  - `url` (String): The request url.
 *  - `method` (String): The request method.
 *  - `data` (Object): The request POST data.
 *
 * @param {Function} callback The callback function.
 * @return {Object} The request object.
 */
var JsonRequest = module.exports = function (options, callback) {

    // Handle options as string
    if (typeof options === "string") {
        options = {
            url: options
        };
    }

    var parsed = Url.parse(options.url)
      , defaults = Ul.clone(parsed)
      , request = null
      , _done = false
      , body = ""
      ;

    defaults.method = "GET";
    defaults.headers = { "Content-Type": "application/json" };

    // Merge options
    options = Ul.merge(defaults, options);

    // Unique callback
    function opt_callback(err, data) {
        if (_done) { return; }
        _done = true;
        callback(err, data);
    }

    // Handle post data
    if (options.data) {
        options.data = QueryString.stringify(options.data);
        options.headers["Content-Length"] = options.data.length;
    }

    // Create the request
    request = Http.request(options, function(res) {
        res.setEncoding("utf8");
        body = ""
        res.on("data", function (data) {
            body += data.toString();
        }).on("error", function (e) {
            opt_callback(e, null);
        }).on("end", function () {
            try {
                body = JSON.parse(body);
            } catch (e) {}
            opt_callback(null, body);
        });
    }).on("error", function (e) {
        opt_callback(e, null);
    });

    // Handle post data
    if (options.data) {
        request.write(options.data);
    }

    request.end();
    return request;
};
