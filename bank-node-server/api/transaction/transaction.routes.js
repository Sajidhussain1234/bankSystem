const express = require("express");
const router = express.Router();
const transactionController = require("./transaction.controller");

//Route:01 /Make new transactions
router.post("/", transactionController.createTransaction);

//Route:02 /Get single by /transaction/:Id 
router.get("/:id", transactionController.getTransactionById);

//Route:03 /GET all transactions by /transactions/account/:accountNumber
router.get("/:accountNumber", transactionController.getTransactionsByAccountNumber);

module.exports = router;

