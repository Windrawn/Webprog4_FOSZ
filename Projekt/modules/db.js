var db = require("mongoose");

var uri = 'mongodb+srv://admin:<admin>@cluster0-oldhd.mongodb.net/test?retryWrites=true'

db.connect(uri, function () {
	console.log("mongodb successfully connected");
});

if (db.connect == null) {console.log("mongodb connection UNSUCCESSFUL");}

module.exports = db;