var db = require("mongoose");

var uri = "mongodb+srv://admin:admin@cluster0-oldhd.mongodb.net/projekt?retryWrites=true&readPreference=secondary&replicaSet=your_replSet_name&ssl=true";

db.connect(uri,
	function(err, client) {
		if(err) {
			console.log("some error when db connection", err);
		}
	}
).then(function (respond) {
	if (respond != null) {
		console.log("mongodb connection successful");
	}
});

module.exports = db;