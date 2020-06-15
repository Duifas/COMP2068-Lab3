'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/thales', function (req, res) {
    res.render('thales', { description: ' is a student from Georgian College. He has been living in Canada for about 3 years now. He enjoys programming and reading books.' });
});

router.get('/monika', function (req, res) {
    res.render('monika', { description: " is Thales' mother. She is currently working in Belgium and learning Dutch to expand her vocabulary." });
});

router.get('/cristiano', function (req, res) {
    res.render('cristiano', { description: " is Thales' father. He is currently living and Brazil and enjoys cooking different meals everyday." });
});

router.get('/leandro', function (req, res) {
    res.render('leandro', { description: " is Thales' stepfather. He is living in Belgium along with his wife and son. He enjoys watching soccer games and making jokes." });
});

router.get('/joao', function (req, res) {
    res.render('joao', { description: " is Thales' little half-brother. He is studying Dutch in Belgium and enjoys spending time with his dog." });
});

router.get('/duda', function (req, res) {
    res.render('duda', { description: " is Thales' sister. She is studyin psychology in Brazil and likes to listen to music. She also has a weird fashion sense." });
});

module.exports = router;