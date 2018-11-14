var express = require('express');
var router = express.Router();
var modelUser = new require('../models/user');
var MWlogin = new require('../middlewares/login');
var sha512 = require('js-sha512');

var objectRepository = {
    sha512: sha512,
    modelUser: modelUser
}

router.get('/login', function (req, res) {
	res.render('pages/login');
});

router.post('/postLogin',
    function (req, res) {
        MWlogin(objectRepository, req, res, function (result) {
            req.session.user = result.username;
            req.session.login = true;
            res.redirect('/');
        })
    }
)


module.exports = router;