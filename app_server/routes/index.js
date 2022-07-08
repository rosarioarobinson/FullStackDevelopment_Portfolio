const express = require('express');
const router = express.Router();
// Adding to pass request for the site default starting page over to the new main controller
const ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;
