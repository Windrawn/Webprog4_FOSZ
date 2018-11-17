function bejegyzesHozzaadas(objectRepository, req, res, callback) {

	var ObjectID = require('mongodb').ObjectID;

	var newDocument = {
		_id: new ObjectID(),
		username: req.body.username,
		tema: req.body.tema,
		cim: req.body.cim,
		tartalom: req.body.tartalom,
		kep: req.body.kep
	};

	var a;

	objectRepository.Bejegyzesekmodel.create(newDocument)
	.then(function (err) {
		if(!err) {
			console.log('Sikeresen hozzaadva!');
			callback();
		}
	})
}

module.exports = bejegyzesHozzaadas;