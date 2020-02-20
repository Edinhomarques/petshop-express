const express = require('express');
const petController = require('../controllers/petController')

const router = express.Router();

router.get('/', petController.index);
router.get('/add/:nome', petController.add);
router.get('/search/:nome', petController.search);




module.exports = router;