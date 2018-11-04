function login(objectRepository) {
	return function(req, res, next) {

		hashedUser = {
			username: req.body.username,
			password: objectRepository.sha512.sha512(req.body.password).toUpperCase()
		}
		
		objectRepository.modelUser.findOne(hashedUser, 'username',
			function(err, user){
				if(!user){
					console.log('nincs ilyen felhasznalo');
					return res.redirect('/login');
				}
				return next();
			}
		);
	}

}

module.exports.login = login;