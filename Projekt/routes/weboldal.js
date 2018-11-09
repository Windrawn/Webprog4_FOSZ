var express = require('express');

var router = express.Router();

//kezdőlap (van rész amihez nem kell bejelentkezni)
router.get('/', function (req, res) {
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
          res.redirect("/");
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

router.get('/bejegyzes', function (req, res) {
	res.render('pages/bejegyzes');
});

router.get('/bejegyzesek', function (req, res) {
	res.render('pages/sajat/bejegyzesek');
});


module.exports = router;