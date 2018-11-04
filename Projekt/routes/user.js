var express = require('express');
var router = express.Router();
var modelUser = new require('../models/user');
var MWlogin = new require('../middlewares/login');
var sha512 = require('js-sha512');

var objectRepository = {
    sha512: sha512,
	modelUser: modelUser
}

router.post(
    '/postLogin',
    function (req, res) {console.log('Bejelentkezési kérelem');},
    MWlogin.login(objectRepository),
    function(req, res) {
		res.render('pages/home')
	}
)

module.exports = router;