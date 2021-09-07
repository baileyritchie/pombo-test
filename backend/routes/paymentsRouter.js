const express = require('express');
const paymentsController = require('../controllers/paymentsController');

const router = express.Router();

router.post('/agent-banks', paymentsController.registerBank);
router.get('/agent-banks', paymentsController.listBanks);
router.delete('/agent-banks',paymentsController.deleteBanks);


module.exports = router;