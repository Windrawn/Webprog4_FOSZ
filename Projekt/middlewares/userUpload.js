var ObjectID = require('mongodb').ObjectID;

function userUpload(objectRepository) {
	return function(req, res, next) {

		hashedUser = {
			_id = new ObjectID(),
			username: req.body.username,
			password: objectRepository.sha512.sha512(req.body.password).toUpperCase(),
			email: req.body.email,
			admin: req.body.admin
		}

		objectRepository.modelUser.insert(hashedUser, function(next) {
			console.log('User hozzaadas'); return next;
		}).then(function (response) {
			if (Array.isArray(response) && response.length) {
				console.log('Sikeres hozzaadas');
				return res.redirect('/');
			}
			else {
				console.log('Sikertelen hozzaadas!');
				return res.redirect('/');
			}
		})
	}
}

module.exports = userUpload;