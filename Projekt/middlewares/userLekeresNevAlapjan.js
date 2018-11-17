var a;

function userLekeresNevAlapjan(objectRepository, username, callback) {
		objectRepository.modelUser.findOne({username: username}, "_id username email admin")
		.exec(function (err, response) {
			if (Array.isArray(response) && response.length) {
				a = response;
				callback(a);
			}
			else {
				console.log("Hiba a bejegyzes lekeresben");
			}
		})
		return null;
}

module.exports = userLekeresNevAlapjan;