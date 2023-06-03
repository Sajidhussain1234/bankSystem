import React from 'react'
import { BrowserRouter as Routes, Route } from "react-router-dom";
import About from '../pages/about/About'
import { AuthState } from "../context/auth";
import { UserState } from "../context/user";
import { AlertState } from "../context/alert";
import Navbar from '../components/common/Navbar';
import Alert from '../components/Alert';
import Home from '../pages/home/Home';
import User from '../pages/user/User';
import Account from '../pages/account/Account';
import Transaction from '../pages/transaction/Transaction';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import Routing from '../routing/Routing';


const Layout = () => {
  return (
    <div>
        <AlertState>
          <AuthState>
            <UserState>
              <Navbar />
              <Alert />
              <Routing />              
            </UserState>
          </AuthState>
        </AlertState>
    </div>
  )
}

export default Layout