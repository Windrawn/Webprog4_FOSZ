function fajtakUploadAll(objectRepository, callback) {

	var ObjectID = require('mongodb').ObjectID;

    var doc1 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Fajták',
		cim: 'Abesszin',
		tartalom: 'Egy cicafajta',
		kep: '../public/img/fajtak/abesszin.jpg'
	};
	var doc2 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Fajták',
		cim: 'Alpinelynx',
		tartalom: 'Egy cicafajta',
		kep: '../public/img/fajtak/alpinelynx.jpg'
	};
    var doc3 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Fajták',
		cim: 'Amerikaidrotszoru',
		tartalom: 'Egy cicafajta',
		kep: '../public/img/fajtak/amerikaidrotszoru.jpg'
	};
	var doc4 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Fajták',
		cim: 'Bengali',
		tartalom: 'Egy cicafajta',
		kep: '../public/img/fajtak/bengali.jpg'
	};
    var doc5 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Fajták',
		cim: 'Bristol',
		tartalom: 'Egy cicafajta',
		kep: '../public/img/fajtak/bristol.jpg'
	};
	var doc6 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Fajták',
		cim: 'Britrovidszoru',
		tartalom: 'Egy cicafajta',
		kep: '../public/img/fajtak/britrovidszoru.jpg'
	};
    var doc7 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Fajták',
		cim: 'Burma',
		tartalom: 'Egy cicafajta',
		kep: '../public/img/fajtak/burma.jpg'
	};
	var doc8 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Fajták',
		cim: 'Burmilla',
		tartalom: 'Egy cicafajta',
		kep: '../public/img/fajtak/burmilla.jpg'
	};
    var doc9 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Fajták',
		cim: 'Colorpointrovidszoru',
		tartalom: 'Egy cicafajta',
		kep: '../public/img/fajtak/colorpointrovidszoru.jpg'
	};
	var doc10 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Fajták',
		cim: 'Devonrex',
		tartalom: 'Egy cicafajta',
		kep: '../public/img/fajtak/devonrex.jpg'
	};
    var doc11 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Fajták',
		cim: 'Doniszfinx',
		tartalom: 'Egy cicafajta',
		kep: '../public/img/fajtak/doniszfinx.jpg'
	};
	var doc12 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Fajták',
		cim: 'Egyiptomimau',
		tartalom: 'Egy cicafajta',
		kep: '../public/img/fajtak/egyiptomimau.jpg'
	};
    var doc13 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Fajták',
		cim: 'Hocipos',
		tartalom: 'Egy cicafajta',
		kep: '../public/img/fajtak/hocipos.jpg'
	};
	var doc14 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Fajták',
		cim: 'Japancsonkafarku',
		tartalom: 'Egy cicafajta',
		kep: '../public/img/fajtak/japancsonkafarku.jpg'
	};
    var doc15 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Fajták',
		cim: 'Kanaani',
		tartalom: 'Egy cicafajta',
		kep: '../public/img/fajtak/kanaani.jpg'
	};
	var doc16 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Fajták',
		cim: 'Karthauzi',
		tartalom: 'Egy cicafajta',
		kep: '../public/img/fajtak/karthauzi.jpg'
	};
    var doc17 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Fajták',
		cim: 'Mainecoon',
		tartalom: 'Egy cicafajta',
		kep: '../public/img/fajtak/mainecoon.jpg'
	};
	var doc18 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Fajták',
		cim: 'Manx',
		tartalom: 'Egy cicafajta',
		kep: '../public/img/fajtak/manx.jpg'
	};
    var doc19 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Fajták',
		cim: 'Norvegerdei',
		tartalom: 'Egy cicafajta',
		kep: '../public/img/fajtak/norvegerdei.jpg'
	};
	var doc20 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Fajták',
		cim: 'Oroszkek',
		tartalom: 'Egy cicafajta',
		kep: '../public/img/fajtak/oroszkek.jpg'
	};
    var doc21 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Fajták',
		cim: 'Perzsa',
		tartalom: 'Egy cicafajta',
		kep: '../public/img/fajtak/perzsa.jpg'
	};
	var doc22 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Fajták',
		cim: 'Ragdoll',
		tartalom: 'Egy cicafajta',
		kep: '../public/img/fajtak/ragdoll.jpg'
	};
    var doc23 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Fajták',
		cim: 'Skotlogofulu',
		tartalom: 'Egy cicafajta',
		kep: '../public/img/fajtak/skotlogofulu.jpg'
	};
	var doc24 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Fajták',
		cim: 'Szavanna',
		tartalom: 'Egy cicafajta',
		kep: '../public/img/fajtak/szavanna.jpg'
	};
    var doc25 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Fajták',
		cim: 'Szfinx',
		tartalom: 'Egy cicafajta',
		kep: '../public/img/fajtak/szfinx.jpg'
	};
	var doc26 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Fajták',
		cim: 'Sziami',
		tartalom: 'Egy cicafajta',
		kep: '../public/img/fajtak/sziami.jpg'
	};
    var doc27 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Fajták',
		cim: 'Sziberiai',
		tartalom: 'Egy cicafajta',
		kep: '../public/img/fajtak/sziberiai.jpg'
	};
	var doc28 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Fajták',
		cim: 'Tiffany',
		tartalom: 'Egy cicafajta',
		kep: '../public/img/fajtak/tiffany.jpg'
	};
    var doc29 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Fajták',
		cim: 'Torokangora',
		tartalom: 'Egy cicafajta',
		kep: '../public/img/fajtak/torokangora.jpg'
	};
	var doc30 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Fajták',
		cim: 'York',
		tartalom: 'Egy cicafajta',
		kep: '../public/img/fajtak/york.jpg'
	};


    objectRepository.Bejegyzesekmodel.create(doc1)
    objectRepository.Bejegyzesekmodel.create(doc2)
    objectRepository.Bejegyzesekmodel.create(doc3)
    objectRepository.Bejegyzesekmodel.create(doc4)
    objectRepository.Bejegyzesekmodel.create(doc5)
    objectRepository.Bejegyzesekmodel.create(doc6)
    objectRepository.Bejegyzesekmodel.create(doc7)
    objectRepository.Bejegyzesekmodel.create(doc8)
    objectRepository.Bejegyzesekmodel.create(doc9)
    objectRepository.Bejegyzesekmodel.create(doc10)
    objectRepository.Bejegyzesekmodel.create(doc11)
    objectRepository.Bejegyzesekmodel.create(doc12)
    objectRepository.Bejegyzesekmodel.create(doc13)
    objectRepository.Bejegyzesekmodel.create(doc14)
    objectRepository.Bejegyzesekmodel.create(doc15)
    objectRepository.Bejegyzesekmodel.create(doc16)
    objectRepository.Bejegyzesekmodel.create(doc17)
    objectRepository.Bejegyzesekmodel.create(doc18)
    objectRepository.Bejegyzesekmodel.create(doc19)
    objectRepository.Bejegyzesekmodel.create(doc20)
    objectRepository.Bejegyzesekmodel.create(doc21)
    objectRepository.Bejegyzesekmodel.create(doc22)
    objectRepository.Bejegyzesekmodel.create(doc23)
    objectRepository.Bejegyzesekmodel.create(doc24)
    objectRepository.Bejegyzesekmodel.create(doc25)
    objectRepository.Bejegyzesekmodel.create(doc26)
    objectRepository.Bejegyzesekmodel.create(doc27)
    objectRepository.Bejegyzesekmodel.create(doc28)
	objectRepository.Bejegyzesekmodel.create(doc29)
    objectRepository.Bejegyzesekmodel.create(doc30)
}

module.exports = fajtakUploadAll;