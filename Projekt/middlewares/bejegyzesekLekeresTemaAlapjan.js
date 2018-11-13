var a;

function bejegyzesekLekeresTemaAlapjan(objectRepository, tema, callback) {
		objectRepository.Bejegyzesekmodel.find({tema: tema})
		.exec(function (err, response) {
			if (Array.isArray(response) && response.length) {
				console.log(response[0]);
				console.log(response[0].username);
				a = response;
				callback(a);
			}
			else {
				console.log("Hiba a bejegyzes lekeresben");
			}
		})
		return null;
}

module.exports = bejegyzesekLekeresTemaAlapjan;