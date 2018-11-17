var a;

function bejegyzesekLekeresIDAlapjan(objectRepository, id, callback) {
		objectRepository.Bejegyzesekmodel.find({_id: id})
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

module.exports = bejegyzesekLekeresIDAlapjan;