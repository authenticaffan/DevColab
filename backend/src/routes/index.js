const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.get('/', (req, res) => {
    res.send('Hello, World!');
});

router.post('/data', dataController.handleData);

module.exports = router;
