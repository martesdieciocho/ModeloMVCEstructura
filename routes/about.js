var express = require('express');
var router = express.Router();
const aboutController = require('../controllers/aboutController');

/* GET about page. */
router.get('/', aboutController.about);

module.exports = router;
