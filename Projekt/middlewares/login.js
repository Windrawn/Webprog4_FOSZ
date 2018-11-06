function login(objectRepository) {
	return function(req, res, next) {

		hashedUser = {
			username: req.body.username,
			password: objectRepository.sha512.sha512(req.body.password).toUpperCase()
		}

		objectRepository.modelUser.find(hashedUser, function(next) {
			console.log('Bejelentkezési kérelem'); return next;
		}).then(function (response) {
			if (Array.isArray(response) && response.length) {
				return res.redirect('/');
			}
			else {
				return res.redirect('/login');
			}
		})
	}
}

module.exports = login;