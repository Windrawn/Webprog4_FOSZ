var express = require('express');
var router = express.Router();



//kezdőlap (van rész amihez nem kell bejelentkezni)
router.get('/', function (req, res) {
	res.render('pages/home');
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

module.exports = router;