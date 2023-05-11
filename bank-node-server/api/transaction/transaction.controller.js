const Transaction = require("./transaction.model");
const Account = require("../account/account.model");

const createTransaction = async (req, res) => {
  console.log(req.body);
  const { account, transactionType, amount } = req.body;
  try {
    const acnt = await Account.findOne({ _id: account });
    if (!acnt) {
      res.status(404).json({ error: "Account not found" });
    } else if (transactionType === "withdrawal") {
      if (acnt.balance < amount) {
        res.status(400).json({ error: "Insufficient balance" });
      } else {
        acnt.balance -= parseInt(amount);
        await acnt.save();
        // res.json({ message: "Withdrawal successful", balance: acnt.balance });
        const transaction = new Transaction({
          account,
          transactionType,
          amount,
        });
        await transaction.save();
        res
          .status(201)
          .json({ message: "Transaction created successfully.", transaction,  TransactionType: "Withdrawal ", remainingBalance: acnt.balance });
      }
    } else {
      acnt.balance += parseInt(amount);
      await acnt.save();
      // res.json({ message: "Deposit successful", balance: acnt.balance });
      const transaction = new Transaction({
        account,
        transactionType,
        amount,
      });
      await transaction.save();
      res
        .status(201)
        .json({ message: "Transaction created successfully.", transaction, TransactionType: "deposit ", currentBalance: acnt.balance });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while creating the transaction." });
  }
};

const getTransactionById = async (req, res) => {
  const Id = req.params.id;

  try {
    // const transaction = await Transaction.findById(transactionId).populate('accountNumber');
    const transaction = await Transaction.findById(Id);
    console.log("id")
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found." });
    }
    res.status(200).json({ transaction });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching the transaction." });
  }
};

const getTransactionsByAccountNumber = async (req, res) => {
  const accountNumber = req.params.accountNumber;
  console.log(accountNumber);

  try {
    const transactions = await Transaction.find({ account: accountNumber });
    if (!transactions.length) {
      return res.status(404).json({ message: "Transaction not found." });
    }
    
    res.status(200).json({ transactions });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching the transactions." });
  }
};

module.exports = {
  createTransaction,
  getTransactionById,
  getTransactionsByAccountNumber,
};
