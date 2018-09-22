const express = require('express');
const router = express.Router();

const main = require('../controllers/main');
const ctrlFootball = require('../controllers/ctrlFootball');
const ctrlGoldenBall = require('../controllers/ctrlGoldenBall');

var ctrlMain = require('../controllers/main');
/* GET home page. */
router.get('/', ctrlMain.index());
router.get('/football', ctrlFootball.winnerlist);
router.get('/goldenball', ctrlGoldenBall.winnerlist);

module.exports = router;
