// Dependencies
var JsonRequest = require("../lib");

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
