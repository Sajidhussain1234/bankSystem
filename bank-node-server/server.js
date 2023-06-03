const express = require("express");
const cors = require('cors');
const morgan = require('morgan'); 

const path = require('path'); // For accessing image from backend


// Only require in server.js. all .env variables are avaiable everywhere in backend project
require('dotenv').config(); 
const connectToMongoDB = require('./config/database');

const app = express();
const port = process.env.PORT;



//Method to make connection with mongodb
connectToMongoDB();

//============================= Middleware =================================

// This is middleware for accessing image from static folder of backend
app.use('/public', express.static(path.join(__dirname, 'public')));

// middleware (if we want to use api body content then we should must add this middleware)
app.use(express.json());
// cors() method is used to handle cors policy. -: 'http://localhost:----' has been blocked by CORS policy:
app.use(cors());
app.use(morgan("tiny"));



// Route for accounts
app.use("/api/accounts", require("./api/account/account.routes"));

// Route for transaction
app.use("/api/transactions", require("./api/transaction/transaction.routes"));

// Route for user
app.use("/api/users", require("./api/user/user.routes"));

// Route for auth
app.use("/api/auth", require("./api/auth/auth.routes"));


// default route
app.get("/", (req, res) => {
  res.send("Default route");
  res.status(500).send(error);
});

app.listen(port, () => {
  console.log(`Server is running successfully on port ${port}`);
});
