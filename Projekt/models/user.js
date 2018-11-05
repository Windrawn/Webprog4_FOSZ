var db = require('../modules/db');

var Schema = db.Schema;

var UserSchema = new Schema({
	_id: Schema.Types.ObjectId,
	username: {type: String},
	password: {type: String},
	email: {type: String},
	admin: {type: Boolean},
},
{ collection : 'user' });

module.exports = db.model('User', UserSchema);