import React, { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { AlertContext } from "../context/alert";

const UserContext = createContext();

const UserState = (props) => {
    const [user, setUser] = useState({});
    const [account, setAccount] = useState({});
    const [transactions, setTransactions] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const context = useContext(AlertContext)
    const {showAlert} = context;

    let navigate = useNavigate();

    const getUser = async () => {
        const authToken = localStorage.getItem('token');

        try {
            if (!authToken) {
                navigate('/login');
                // Display a message indicating the user is not logged in
                console.log('You are not logged in! Please, Login before use.'); 
                showAlert("You are not logged in! Please, Login before use")              
            } else {
                setIsLoading(true);
                const response = await axios.get("http://localhost:3002/api/auth/getuser", {
                    headers: {
                        "Content-Type": "application/json",
                        "atoken": authToken
                    }
                });
                const user = await response.data.user;
                setUser(user);
                console.log("user",user)
                setIsLoading(false);
            }
        } catch (error) {
            setIsLoading(false);
            console.log(error);
            if (error.request.status === 404) {
                console.error("Not Found!");
                alert("Not Found!");
            } else if (error.request.status === 401) {
                console.log("Please! Login before use.")
                // alert("Please! Login before use.")
            } else {
                setIsError(true);
            }
        }
    };

    const getAccount = async () => {
        const id = user._id;
        try {
            setIsLoading(true);
            const response = await axios.get(`http://localhost:3002/api/accounts/user/${id}`);
            const data = response.data;
            setAccount(data);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.error(error.response);
            if (error.response.status === 404) {
                console.log("Not Found!");
                alert("Not Found!");
            } else {
                setIsError(true);
            }
        }
    };


    const getAllTransactions = async () => {
        // const id = "645b9d022d7596d3d17ab579";
        const id = account._id;
        console.log("account ID:", id)

        try {
            setIsLoading(true);
            const res = await axios.get(`http://localhost:3002/api/transactions/account/${id}`);
            const data = await res.data.transactions;
            setTransactions(prevTransactions => [...prevTransactions, ...data]);
            // setTransactions([...transactions, data]);
            setIsLoading(false)

        } catch (error) {
            setIsLoading(false);
            console.log(error);
            if (error.request.status === 404) {
                console.error("Not Found!");
                alert("Not Found!");
            } else if (error.request.status === 401) {
                console.log("Please! Login before use.")
                alert("Please! Login before use.")
                // navigate("/"); 
            } else {
                setIsError(true);
            }
        }
    };
    useEffect(() => {
        getUser();
    }, []);

    useEffect(() => {
        if (user._id) {
            getAccount();
        }
    }, [
        user,
         transactions]);

    useEffect(() => {
        if (account._id) {
            getAllTransactions();
        }
    }, [account._id]);

    // if (isLoading) return (<div className="text-center mt-4">
    //     <div className="spinner-border text-primary" role="status">
    //         <span className="visually-hidden">Loading...</span>
    //     </div>
    // </div>)
    if (isError) return (<h4>Some thing went wrong...</h4>)

    return (
        <UserContext.Provider value={{ user, getUser, getAccount, account, transactions, setTransactions }}>
            {props.children}
        </UserContext.Provider>
    );
};

export { UserContext, UserState };
