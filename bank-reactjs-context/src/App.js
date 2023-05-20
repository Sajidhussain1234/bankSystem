import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import User from "./components/User";
import Account from "./components/Account";
import Transaction from "./components/Transaction";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import AuthState from "./context/AuthState";

function App() {
  return (
    <>
      <AuthState>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home key="home" />} />
            <Route exact path="/user" element={<User key="user" />} />
            <Route exact path="/account" element={<Account key="account" />} />
            <Route
              exact
              path="/transaction"
              element={<Transaction key="transaction" />}
            />
            <Route exact path="/about" element={<About key="about" />} />
            <Route exact path="/login" element={<Login key="login" />} />
            <Route exact path="/signup" element={<Signup key="signup" />} />
          </Routes>
        </Router>
      </AuthState>
    </>
  );
}

export default App;
