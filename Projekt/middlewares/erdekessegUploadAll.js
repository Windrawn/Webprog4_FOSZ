function erdekessegUploadAll(objectRepository, callback) {

	var ObjectID = require('mongodb').ObjectID;

    var doc1 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.1',
		tartalom: 'A fekete–vörös teknőctarka, vagy a fehér–fekete–vörös kalikó színű macskák gyakorlatilag minden esetben nőstények, míg a tiszta vörös macskák mintegy 90 százaléka kandúr. Ennek oka, hogy egy X-kromoszómán csak vörös, vagy csak fekete szín öröklődhet. Mivel a nőstény macskáknak 2 „X” nemi kromoszómájuk van, ők az egy X-kromoszómás kandúrokkal ellentétben lehetnek egyszerre vörösök és feketék.',
		kep: 'nincs.png'
	};
var doc2 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.2',
		tartalom: 'A macskák a legnépszerűbb állatok az Egyesült Államokban. Becslésre 88 millió macskát, és 74 millió kutyát nevelnek.',
		kep: 'nincs.png'
	};
var doc3 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.3',
		tartalom: 'Akár egy 32 méteres zuhanást is túlélhetnek.',
		kep: 'nincs.png'
	};
var doc4 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.4',
		tartalom: 'Az alaszkai Talkeetna városában a polgármester nem más, mint egy macska, neve Stubbs.',
		kep: 'nincs.png'
	};
var doc5 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.5',
		tartalom: 'Egy másik indult a tavalyi polgármesteri választáson Mexikóvárosban.',
		kep: 'nincs.png'
	};
var doc6 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.6',
		tartalom: 'Amikor grimaszolnak, általában ízlelnek. Különleges légzéskontrolljuk van, mely során ízlelik-érzékelik a levegőt.',
		kep: 'nincs.png'
	};
var doc7 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.7',
		tartalom: 'Kutatások kimutatták, hogy a macskatartás harmadára csökkenti a sztrók és szívinfarktus veszélyét.',
		kep: 'nincs.png'
	};
var doc8 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.8',
		tartalom: 'A világ leghosszabb példánya 122 centiméteres.',
		kep: 'nincs.png'
	};
var doc9 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.9',
		tartalom: 'A világ leggazdagabbja 13 millió dollárt ér: gazdája minden vagyonát ráhagyta halála előtt.',
		kep: 'nincs.png'
	};
var doc10 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.10',
		tartalom: 'A legrégibb, a YouTube-ra feltöltött macskás videó 1894-ben készült.',
		kep: 'nincs.png'
	};
var doc11 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.11',
		tartalom: 'Az 1960-as években a CIA kémkedésre használt egy cicát, apró mikrofont és rádió-adóvevőt helyeztek el benne – túlélte a műtétet, de elütötte egy taxi az első küldetésén.',
		kep: 'nincs.png'
	};
var doc12 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.12',
		tartalom: 'A nőstények általában jobb-, a kandúrok “balkezesek”.',
		kep: 'nincs.png'
	};
var doc13 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.13',
		tartalom: 'Agyuk 90%-ban hasonlít a miénkhez.',
		kep: 'nincs.png'
	};
var doc14 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.14',
		tartalom: 'Közel azonos szekciók irányítják az érzelmeket a macskák és az emberek agyában.',
		kep: 'nincs.png'
	};
var doc15 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.15',
		tartalom: 'Tilos volt macskát ölni az ókori Egyiptomban, mivel uralmuk alá vonták a patkánypopulációt.',
		kep: 'nincs.png'
	};
var doc16 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.16',
		tartalom: 'A 15. században VIII. Ince pápa elrendelte a macskák megölését, démoni állatoknak kiáltotta ki őket.',
		kep: 'nincs.png'
	};
var doc17 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.17',
		tartalom: 'Egy legenda szerint a macskák úgy jöttek létre, hogy egy oroszlán Noé bárkáján tüsszentett, és kettő kibújt belőle.',
		kep: 'nincs.png'
	};
var doc18 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.18',
		tartalom: 'Bajszukkal derítik ki, átférnek-e egy résen.',
		kep: 'nincs.png'
	};
var doc19 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.19',
		tartalom: 'Az első űrben járt macska francia volt, a Felicette névre hallgatott, és túlélte az utazást.',
		kep: 'nincs.png'
	};
var doc20 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.20',
		tartalom: 'Egy macska felfedezte, hogy gazdája mellrákos.',
		kep: 'nincs.png'
	};
var doc21 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.21',
		tartalom: 'Ha egy macska meghalt az ókori Egyiptomban, a gazdái leborotválták a szemöldöküket, hogy kifejezzék gyászukat.',
		kep: 'nincs.png'
	};
var doc22 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.22',
		tartalom: 'Az Egyesült Államokban és Magyarországon a fekete macska a balszerencse jele, az Egyesült Királyságban és Ausztráliában viszont a szerencséé.',
		kep: 'nincs.png'
	};
var doc23 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.23',
		tartalom: 'Az egyiptomi mau a legrégebbi macskafajta.',
		kep: 'nincs.png'
	};
var doc24 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.24',
		tartalom: 'A férfi gazdik szerencsésebbek a szerelemben, mivel általában érzékenyebbek.',
		kep: 'nincs.png'
	};
var doc25 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.25',
		tartalom: 'Mikor döglött állatot hoznak neked, azt akarják mondani: “nesze, te szerencsétlen, pocsék vadász vagy”.',
		kep: 'nincs.png'
	};
var doc26 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.26',
		tartalom: 'A legnagyobb alom 19 kiscicából állt.',
		kep: 'nincs.png'
	};
var doc27 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.27',
		tartalom: 'Meg tudják inni a tengervizet, a veséjük kiszűri a sót.',
		kep: 'nincs.png'
	};
var doc28 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.28',
		tartalom: 'Nem érzik az édes ízeket – sosem tudják meg, milyen finom egy muffin!',
		kep: 'nincs.png'
	};
var doc29 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.29',
		tartalom: 'Isaac Newton találta fel a macskaajtót, mivel saját macskája, Spithead állandóan félbeszakította a fénnyel való kísérleteit, mikor nyitogatta az ajtót.',
		kep: 'nincs.png'
	};
var doc30 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.30',
		tartalom: 'Nikola Teslát cicája, Macak inspirálta az elektromosság kutatására, miután bundája megrázta.',
		kep: 'nincs.png'
	};
var doc31 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.31',
		tartalom: 'A kismacskák egyhetes koruktól álmodnak, és azért alszanak olyan sokat, mert alvás közben nőnek.',
		kep: 'nincs.png'
	};
var doc32 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.32',
		tartalom: 'Évente négymillió példányt esznek meg Ázsiában.',
		kep: 'nincs.png'
	};
var doc33 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.33',
		tartalom: 'Azért nem tudnak lemászni a fákról, mert karmaik egy irányba mutatnak. Csak akkor tudnak lejönni, ha olyan irányban próbálnak meg lekeveredni onnan, ahogy felmentek.',
		kep: 'nincs.png'
	};
var doc34 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.34',
		tartalom: '24 példányból készül el egyetlen kabát.',
		kep: 'nincs.png'
	};
var doc35 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.35',
		tartalom: 'A középkorban a boszorkánysággal azonosították őket, Európa-szerte dobálták őket máglyatűzbe, ünnepnapokon pedig azzal celebráltak, hogy templomtornyokról vetették őket a halálba.',
		kep: 'nincs.png'
	};
var doc36 = {
		_id: new ObjectID(),
		username: 'admin',
		tema: 'Érdekességek',
		cim: 'Érdekesség no.36',
		tartalom: 'Extrémérzékenyek a vibrációkra: a földrengéseket 15 perccel az emberek előtt tudják észlelni.',
		kep: 'nincs.png'
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
    objectRepository.Bejegyzesekmodel.create(doc31)
    objectRepository.Bejegyzesekmodel.create(doc32)
    objectRepository.Bejegyzesekmodel.create(doc33)
    objectRepository.Bejegyzesekmodel.create(doc34)
    objectRepository.Bejegyzesekmodel.create(doc35)
    objectRepository.Bejegyzesekmodel.create(doc36)

}

module.exports = erdekessegUploadAll;