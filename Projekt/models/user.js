var db = require('../modules/db');

var Schema = db.Schema;

var UserSchema = new Schema({
	//_id: Schema.Types.ObjectId,
	username: String,
	password: String,
	email: String,
	admin: Boolean,
});

module.exports = db.model('User', UserSchema);