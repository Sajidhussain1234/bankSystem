import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Account = () => {
    const [transactions, setTransactions] = useState([])
    const [newTransaction, setNewTransaction] = useState({})

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);


    const getAllTransactions = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/transactions/');
            // console.log(res.data);
            const data = await res.data;
            setTransactions(data);
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
            const res = await axios.post('http://localhost:5000/api/transactions/', newTransaction);
            const data = res.data.transaction;
            // console.log(data);
            setTransactions([...transactions, data]); 
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false)
            setIsError(true)
            console.error(error);
        }
    };

    const handleChange = (e) => {
        setNewTransaction({ ...newTransaction, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        getAllTransactions();
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
                <h3 className='mt-3'>Create Transaction </h3>
                <form onSubmit={handleSubmit} className='d-flex'>
                    <input type="text" className="form-control mx-2" id="account" name="account" placeholder='Account id' onChange={handleChange} />
                    <input type="number" className="form-control mx-2" id="amount" name="amount" placeholder='Amount' onChange={handleChange} />
                    <select className="form-select" aria-label="Default select example" name="transactionType" onChange={handleChange}>
                        <option defaultValue>select transaction type</option>
                        <option value="deposit">deposit</option>
                        <option value="withdrawal">withdrawal</option>
                    </select>
                    <button type="submit" className="btn btn-primary mx-2">Submit</button>
                </form>
            </div>
            <hr />
            {/* Showing all transactions */}
            <div className='container'>
            <h3> All Transactions</h3>
                <div className="row row-cols-1 row-cols-md-4 g-6 my-2">
                    {
                        transactions.length ? (
                            <>
                                {transactions?.map((transaction) => {
                                    return (
                                        <div className="col my-2 " key={transaction._id}>
                                            <div className="card" >
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">
                                                        Transaction id:  <strong> {transaction._id} </strong> <br />
                                                        Account id:  <strong> {transaction.account} </strong> <br />
                                                        Type:<strong> {transaction.transactionType} </strong> <br />
                                                        Transaction Amount:<strong> {transaction.amount} </strong>
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



