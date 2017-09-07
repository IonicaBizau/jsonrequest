"use strict"

const tinyreq = require("tinyreq")
    , ul = require("ul")
    , noop = require("noop6")

/**
 * jsonRequest
 * Creates the http(s) request and parses the response.
 *
 * @name jsonRequest
 * @function
 * @param {String|Object} options A string representing the request url or an object passed to the `tinyreq` function.
 * @param {Object} data The request data object.
 * @param {Function} callback The callback function.
 * @return {Object} The request object.
 */
module.exports = function jsonRequest (options, data, callback) {

    // Handle options as string
    if (typeof options === "string") {
        options = {
            url: options
        }
    }

    if (typeof data === "function") {
        callback = data
        data = undefined
    }

    options.data = options.data || data

    // Stringify the data
    if (typeof options.data === "object") {
        options.data = JSON.stringify(options.data)
    }

    options = ul.deepMerge(options, {
        headers: {
            "Content-Type": "application/json"
        }
    })

    const maybeCallback = callback ? (err, body, res) => {
        if (err) {
            return callback(err, body, res)
        }
        if (body) {
            try {
                body = JSON.parse(body)
            } catch (e) {
                return callback(e, body, res)
            }
        }
        callback(null, body, res)
    } : noop

    const prom = tinyreq(options, maybeCallback).then(body => {
        return JSON.parse(body)
    })
    prom.catch(noop)
    return prom
}
