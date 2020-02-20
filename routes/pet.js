const express = require('express');


const router = express.Router();

router.get('/', (req, res) => {
    res.send('Petshop DH em express (agora da pra vender)')
});




module.exports = router;