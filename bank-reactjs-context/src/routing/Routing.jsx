import React from 'react'
import { BrowserRouter as Routes, Route } from "react-router-dom";
import Home from '../pages/home/Home';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import Transaction from '../pages/transaction/Transaction';
import Account from '../pages/account/Account';
import User from '../pages/user/User';
import About from '../pages/about/About';

const Routing = () => {
    return (
        <div>
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
        </div>
    )
}

export default Routing; 