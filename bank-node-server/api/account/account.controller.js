const Account = require("./account.model");

// Create a new account
const createAccount = async (req, res) => {
  const { accountNumber, balance } = req.body;
  try {
    const account = new Account({ accountNumber, balance });
    const newAccount = await account.save();
    res.status(201).json(newAccount);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get account balance
const getAccountBalance = async (req, res) => {
   const { accountNumber } = req.params;
  // console.log("accountNumber:", accountNumber);
  try {
    // const account = await Account.find((a) => a.accountNumber === accountNumber);
    const account = await Account.findOne({accountNumber: accountNumber });
    if (!account) {
      res.status(404).json({ error: "Account not found" });
    } else {
      res.json({ balance: account.balance });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

// Make a deposit
const makeDeposit = async (req, res) => {
  const { accountNumber } = req.params;
  const { amount } = req.body; 
  try { 
    const account = await Account.findOne({accountNumber: accountNumber });
    if (!account) {
      res.status(404).json({ error: "Account not found" });
    } else {
      account.balance += parseInt(amount)
      res.json({ message: "Deposit successful", balance: account.balance });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

// Make a withdrawal
const makeWithdrawal = async (req, res) => {
  const { accountNumber } = req.params;
  const { amount } = req.body;
  try {
    const account = await Account.findOne({accountNumber: accountNumber });
    if (!account) {
      res.status(404).json({ error: "Account not found" });
    } else if (account.balance < amount) {
      res.status(400).json({ error: "Insufficient balance" });
    } else {
      account.balance -= amount;
      res.json({ message: "Withdrawal successful", balance: account.balance });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get account transaction history
const getTransactionHistory = (req, res) => {
  const { accountNumber } = req.params;
  try {
    const account = Account.find((a) => a.accountNumber === accountNumber);
    if (!account) {
      res.status(404).json({ error: "Account not found" });
    } else {
      // Assume we have a transaction history array for each account
      const history = account.history || [];
      res.json(history);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createAccount,
  getAccountBalance,
  makeDeposit,
  makeWithdrawal,
  getTransactionHistory,
};
