![](http://i.imgur.com/Mt5qcZ5.png)

jsonrequest
===========
A tiny library for requesting and getting JSON resources.

# Installation
```sh
$ npm install jsonrequest
```

# Example
```js
// Dependencies
var JsonRequest = require("jsonrequest")

// GET request
JsonRequest("http://localhost:9000/", function (err, data) {
    console.log(err || data);
});

// POST request
JsonRequest({
    url: "http://localhost:9000/hello"
  , method: "POST"
  , data: {
        "some": "data"
    }
}, function (err, data) {
    console.log(err || data);
});
```

# Documentation
### `JsonRequest(options, data, callback)`
Creates the http(s) request and parses the response.

#### Params
- **String|Object** `options`: A string representing the request url or an object passed to the `tinyreq` function.
- **Object** `data`: The request data object.
- **Function** `callback`: The callback function.

#### Return
- **Object** The request object.

# How to contribute
1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

# License
See the [LICENSE](./LICENSE) file.
