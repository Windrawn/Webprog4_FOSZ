function login(objectRepository, req, res, callback) {
	hashedUser = {
		username: req.body.username,
		password: objectRepository.sha512.sha512(req.body.password).toUpperCase()
	}

	objectRepository.modelUser.findOne(hashedUser, function(next) {
		console.log('Bejelentkezési kérelem');
	}).exec(function (err, response) {
		if (response != null) {
			console.log('Sikeres Bejelentkezés');
			callback(response);
		}
		else {
			console.log('Sikertelen Bejelentkezés!');
			console.log(response);
			return res.redirect('/login');
		}
	})
}

module.exports = login;