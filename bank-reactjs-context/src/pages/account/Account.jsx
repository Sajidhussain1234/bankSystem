import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { UserContext } from "../../context/user"

const Account = () => {
    const [newAccount, setNewAccount] = useState({});
    // const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const context = useContext(UserContext);
    const { account } = context;
    // console.log("Account", account);

    // getAccount();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // try {
        //     setIsLoading(true);
        //     const response = await axios.post('http://localhost:3002/api/accounts/', newAccount);
        //     const data = response.data;
        //     setAccounts([...accounts, data])
        //     setIsLoading(false);
        // } catch (error) {
        //     console.error(error);
        //     setIsLoading(false)
        //     setIsError(true);
        // }
    };

    const handleChange = (e) => {
        setNewAccount({ ...newAccount, [e.target.name]: e.target.value });
    };


    // if (isLoading) return (<div className="text-center mt-4">
    //     <div className="spinner-border text-primary" role="status">
    //         <span className="visually-hidden">Loading...</span>
    //     </div>
    // </div>)
    if (isError) return (<h4>Some thing went wrong...</h4>)



    return (
        <div>
            {/* <div className='container'>
                <h3 className='mt-3'>Create Account </h3>
                <form onSubmit={handleSubmit} className='d-flex'>
                    <input type="text" className="form-control mx-2" id="accountNumber" name="accountNumber" placeholder='Account Number' onChange={handleChange} />
                    <input type="number" className="form-control mx-2" id="balance" name="balance" placeholder='Intial banalnce' onChange={handleChange} />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <hr /> */}
            {/* Showing all accounts */}
            <div className='container'>
                <h3> Account Detail</h3>
                <div className="card" >
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            Account id:  <strong> {account._id} </strong> <br />
                            Account Number:<strong> {account.accountNumber} </strong> <br />
                            Balance:<strong> {account.balance} </strong>
                        </li>
                    </ul>
                </div>               
            </div>
        </div>
    )
}

export default Account;



