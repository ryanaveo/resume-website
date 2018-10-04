const rp      = require("request-promise"),
      cheerio = require("cheerio");

const options = {
	uri: "https://www.reddit.com/r/listentothis/",
	transform: function (body) {
		return cheerio.load(body);
	}
};

rp(options)
	.then(($) => {
		console.log($);
	})
	.catch((err) => {
		console.log(err);
	})

