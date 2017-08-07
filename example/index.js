// Dependencies
const request = require("../lib");

request({
    url: "https://api.github.com/users/IonicaBizau",
    headers: {
        "User-Agent": "JsonRequest"
    }
}).then(data => {
    console.log(data);
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
}).catch(err => {
    console.error(err);
});

// Make a request to GitHub API
request("https://ionicabizau.net/api/articles", (err, data) => {
    console.log(err || data);
});
