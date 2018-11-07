var express = require('express');

var router = express.Router();

router.get('/', function (req, res) {
	res.render('pages/login');
});


router.get('/pages/home', function (req, res) {
	
	res.render('pages/home');

	
});

router.get('/login', function (req, res) {
	res.render('pages/login');
});


router.get('/logout', function(req, res) {
  req.session.destroy(function(err){  
        if(err){  
            console.log(err);
        }  
        else  
        {  
          console.log('Sikeresen Kijelentkezés!');
          res.redirect("/login");
        }  
    });
});

router.get('/tema', function (req, res) {
	res.render('pages/temak/tema');
});

router.get('/fajtak', function (req, res) {
	res.render('pages/temak/fajtak');
});

router.get('/betegsegek', function (req, res) {
	res.render('pages/temak/betegsegek');
});

router.get('/erdekessegek', function (req, res) {
	res.render('pages/temak/erdekessegek');
});

router.get('/bejegyzesek', function (req, res) {
	res.render('pages/bejegyzes');
});


module.exports = router;