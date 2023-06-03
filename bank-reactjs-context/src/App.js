import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Home from "./pages/home/Home";
import User from "./pages/user/User";
import Account from "./pages/account/Account";
import Transaction from "./pages/transaction/Transaction";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import About from "./pages/about/About";
import { AuthState } from "../src/context/auth";
import { UserState } from "../src/context/user";
import { AlertState } from "./context/alert";
import Alert from "./components/Alert";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <Router>
        <Layout/>
        {/* <AlertState>
          <AuthState>
            <UserState>
              <Navbar />
              <Alert />
              <Routes>
                <Route exact path="/" element={<Home key="home" />} />
                <Route exact path="/user" element={<User key="user" />} />
                <Route
                  exact
                  path="/account"
                  element={<Account key="account" />}
                />
                <Route
                  exact
                  path="/transaction"
                  element={<Transaction key="transaction" />}
                />
                <Route exact path="/about" element={<About key="about" />} />
                <Route exact path="/login" element={<Login key="login" />} />
                <Route exact path="/signup" element={<Signup key="signup" />} />
              </Routes>
            </UserState>
          </AuthState>
        </AlertState> */}
      </Router>
    </>
  );
}

export default App;
