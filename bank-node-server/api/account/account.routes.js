const express = require('express');
const router = express.Router();
const controller = require('./account.controller');


// Create a new account
router.post('/', controller.createAccount);

// Get account balance
router.get('/balance/:accountNumber', controller.getAccountBalance);

// Make a deposit
router.post('/deposit/:accountNumber', controller.makeDeposit);

// Make a withdrawal
router.post('/withdraw/:accountNumber', controller.makeWithdrawal);

// Get account transaction history
router.get('/history/:accountNumber', controller.getTransactionHistory);

module.exports = router;
