function bejegyzesektema(objectRepository, tema) {
	return function(req, res, next) {

		Tema = {
			tema: tema
		}

		objectRepository.Bejegyzesekmodel.find(Tema, function(next) {
			console.log('Tema elemek kerelem'); return next;
		}).then(function (response) {
			if (Array.isArray(response) && response.length) {
				console.log('Sikeres kerelem!');
				
				return bejegyzesek;
			}
		})
	}
}

module.exports = bejegyzesektema;