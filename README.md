# jsonrequest [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Travis](https://img.shields.io/travis/IonicaBizau/node-jsonrequest.svg)](https://travis-ci.org/IonicaBizau/node-jsonrequest/) [![Version](https://img.shields.io/npm/v/jsonrequest.svg)](https://www.npmjs.com/package/jsonrequest) [![Downloads](https://img.shields.io/npm/dt/jsonrequest.svg)](https://www.npmjs.com/package/jsonrequest) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> A tiny library for requesting and getting JSON resources.

## Installation

```sh
$ npm i --save jsonrequest
```

## Example

```js
// Dependencies
var JsonRequest = require("jsonrequest");

// Make a request to GitHub API
JsonRequest("https://api.github.com/users/IonicaBizau", function (err, data) {
    console.log(err || data);
});
// => {
//   "login": "IonicaBizau",
//   "id": 2864371,
//   "avatar_url": "https://avatars.githubusercontent.com/u/2864371?v=3",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/IonicaBizau",
//   "html_url": "https://github.com/IonicaBizau",
//   "followers_url": "https://api.github.com/users/IonicaBizau/followers",
//   ...
// }
```

## Documentation

### `JsonRequest(options, data, callback)`
Creates the http(s) request and parses the response.

#### Params
- **String|Object** `options`: A string representing the request url or an object passed to the `tinyreq` function.
- **Object** `data`: The request data object.
- **Function** `callback`: The callback function.

#### Return
- **Object** The request object.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`bnotify`](https://github.com/IonicaBizau/bnotify)

 - [`gh.js`](https://github.com/IonicaBizau/gh.js)

 - [`homebridge-domotiga`](https://github.com/Samfox2/homebridge-domotiga#readme) by Sam Fox

 - [`ipinfo`](https://github.com/IonicaBizau/node-ipinfo)

 - [`proxyneedle`](https://github.com/selfrefactor/proxyneedle#readme) by Dejan Toteff

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md