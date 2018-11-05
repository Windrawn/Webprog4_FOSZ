var db = require("mongoose");

var uri = "mongodb+srv://admin:admin@cluster0-oldhd.mongodb.net/projekt?retryWrites=true&readPreference=secondary&replicaSet=your_replSet_name&ssl=true";
//var uri = 'mongodb+srv://admin:admin@cluster0-shard-00-01-oldhd.mongodb.net:27017/projekt'

db.connect(uri,
	function(err, client) {
		console.log("mongodb connection SUCCESSFUL");
	}
);

module.exports = db;