var db = require('../modules/db');

var Schema = db.Schema;

var BejegyzesekSchema = new Schema({
	_id: Schema.Types.ObjectId,
	username: {type: String},
	tema: {type: String},
	cim: {type: String},
	tartalom: {type: String},
	kep: {type: String}
},

{ collection : 'bejegyzesek' });

module.exports = db.model('Bejegyzesek', BejegyzesekSchema);