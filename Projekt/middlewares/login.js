function login(objectRepository) {
	console.log('1')
	return function(req, res, next) {

		hashedUser = {
			username: req.body.username,
			//password: objectRepository.sha512.sha512(req.body.password).toUpperCase()
			password: req.body.password
		}
		
		/*objectRepository.modelUser.findOne(hashedUser, 'username',
			function(err, user){
				if(user == null){
					console.log('nincs ilyen felhasznalo');
					return res.redirect('/login');
				}
				else {
					return res.redirect('/');
				}
			}
		)*/
		/*
		objectRepository.modelUser.find({username: "admin"}, function (err, docs) {
			if (Array.isArray(docs) && docs.length) {
				console.log(docs)
				return res.redirect('/');
			}
			else {
				return res.redirect('/login');
			}
		})*/
		objectRepository.modelUser.find(hashedUser).then(function (response) {
			if (Array.isArray(response) && response.length) {
				console.log(response);
				return res.redirect('/');
			}
			else {
				console.log(response);
				return res.redirect('/login');
			}
		})
	}
}

module.exports = login;