const express = require("express");

const app = express();

// Route for accounts
app.use("/api/accounts", require("./account/account.routes"));
 
// Route for transaction
app.use("/api/transactions", require("./transaction/transaction.routes"));



