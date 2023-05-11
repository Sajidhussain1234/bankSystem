const express = require("express");
const router = express.Router();
const controller = require("./transaction.controller");

//Route:01 /Make new transactions
router.post("/", controller.createTransaction);

//Route:02 /Get single by /transaction/:Id 
router.get("/:id", controller.getTransactionById);

//Route:03 /GET all transactions by /transactions/account/:accountNumber
router.get("/accountNumber/:accountNumber", controller.getTransactionsByAccountNumber); 
// /accountNumber/:accountNumber  intensionally add accountNumber with api endpoint to differnitiate from above id api endpoint

module.exports = router;

