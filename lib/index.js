// Dependencies
var Tinyreq = require("tinyreq")
  , Ul = require("ul")
  ;

/**
 * JsonRequest
 * Creates an HTTP request using the options passed in the first parameter.
 * Then the callback function is called (with `error` and `data` parameters).
 *
 * @name JsonRequest
 * @function
 * @param {String|Object} options A string representing the request url or an object passed to the `tinyreq` function.
 * @param {Object} data The request data object.
 * @param {Function} callback The callback function.
 * @return {Object} The request object.
 */
var JsonRequest = module.exports = function (options, data, callback) {

    // Handle options as string
    if (typeof options === "string") {
        options = {
            url: options
        };
    }

    if (typeof data === "function") {
        callback = data;
        data = undefined;
    }

    options.data = options.data || data;

    // Stringify the data
    if (typeof options.data === "object") {
        options.data = JSON.stringify(options.data);
    }

    if (options.data) {
        options.method = "POST";
    }

    options = Ul.merge(options, {
        headers: {
            "Content-Type": "application/json"
        }
    });

    return Tinyreq(options, callback);
};
