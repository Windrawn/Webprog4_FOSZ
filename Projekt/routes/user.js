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

router.get('/users', function (req, res) {
	//User listát vár az oldal
	res.render('pages/admin/users', {users: []});
});

router.get('/user/:mod', function (req, res) {
	res.render('pages/admin/user', {mod: "" });
});

router.get('/user/:mod/:id', function (req, res) {
	//egy user vár az oldal
	res.render('pages/admin/user', {mod: "" ,user: {} });
});

router.post('/postUser', function (req, res) {
	//user feltöltése adatbázisba
});

router.get('/userdelete/:id', function (req, res) {
	res.redirect('/users');
});

module.exports = router;