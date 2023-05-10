const express = require("express");
const cors = require('cors');
const morgan = require('morgan'); 
const connectToMongoDB = require('./config/database')
// const allRoutes = require('./all.routes')
const port = 5000;
const app = express();

connectToMongoDB();

// middleware
// middleware (if we want to use api body content then we should must add this middleware)
app.use(express.json());
// cors() method is used to handle cors policy. -: 'http://localhost:3000' has been blocked by CORS policy:
app.use(cors());
app.use(morgan("tiny"));

// Route for accounts
app.use("/api/accounts", require("./api/account/account.routes"));
 
// Route for transaction
app.use("/api/transactions", require("./api/transaction/transaction.routes"));


// default route
app.get("/", (req, res) => {
  res.send("Default route");
  res.status(500).send(error);
});


app.listen(port, () => {
  console.log(`Server is running successfully on port ${port}`);
});
