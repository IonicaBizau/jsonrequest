# jsonrequest [![Support this project][donate-now]][paypal-donations]

A tiny library for requesting and getting JSON resources.

## Installation

```sh
$ npm i -g jsonrequest
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

 - [`ipinfo`](https://github.com/IonicaBizau/node-ipinfo)

 - [`proxyneedle`](https://github.com/selfrefactor/proxyneedle#readme) by Dejan Toteff

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2014

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md