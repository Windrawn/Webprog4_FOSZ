var db = require("../modules/db");

var Schema = db.Schema;

var UserSchema = new Schema({
	username: {type: String, required: true, index: {unique: true}},
	password: {type: String, required: true},
	email: {type: String, required: true},
	admin: {type: Boolean, required: true}
});

module.exports = db.model('User', UserSchema);