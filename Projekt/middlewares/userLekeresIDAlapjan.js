var a;

function userLekeresIDAlapjan(objectRepository, id, callback) {
		objectRepository.modelUser.find({_id: id}, "_id username email admin")
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

module.exports = userLekeresIDAlapjan;