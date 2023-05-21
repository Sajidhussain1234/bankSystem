import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useLocation } from "react-router-dom";

const Account = () => {

    const [accounts, setAccounts] = useState([]);
    const [newAccount, setNewAccount] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);


    const getAllAccounts = async () => {
        try {
            const res = await axios.get('http://localhost:3002/api/accounts/');
            console.log(res.data);
            const data = await res.data;
            // console.log("call1:", data)
            setAccounts(data);
            setIsLoading(false)

        } catch (error) {
            setIsLoading(false)
            setIsError(true)
            console.error(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const res = await axios.post('http://localhost:5000/api/accounts/', newAccount);
            const data = res.data;            
            setAccounts([...accounts, data])
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false)
            setIsError(true)
            console.error(error);
        }
    };

    const handleChange = (e) => {
        setNewAccount({ ...newAccount, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        getAllAccounts();
    }, [])

    if (isLoading) return (<div className="text-center mt-4">
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>)
    if (isError) return (<h4>Some thing went wrong...</h4>)



    return (
        <div>
            <div className='container'>
                <h3 className='mt-3'>Create Account </h3>
                <form onSubmit={handleSubmit} className='d-flex'>
                    <input type="text" className="form-control mx-2" id="accountNumber" name="accountNumber" placeholder='Account Number' onChange={handleChange} />
                    <input type="number" className="form-control mx-2" id="balance" name="balance" placeholder='Intial banalnce' onChange={handleChange} />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <hr />
            {/* Showing all accounts */}
            <div className='container'>
                <h3> All Accounts</h3>
                <div className="row row-cols-1 row-cols-md-4 g-6 my-2">
                    {
                        accounts.length ? (
                            <>
                                {accounts?.map((account) => {
                                    return (
                                        <div className="col my-2 " key={account._id}>
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
                                    )
                                })}
                            </>
                        ) : (
                            <div className='container text-center'>
                                <div className="text-center mt-4">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Account;



