import React,{useState, useEffect} from 'react'
import axios from 'axios'; 
import {Link, useLocation} from "react-router-dom";

const Account = () => {

    const [newMerchant, setNewMerchant] = useState({});

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const response = await axios.post('http://localhost:3001/api/merchant', newMerchant);
            console.log('Response:', response); 
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false)
            setIsError(true)
            console.error(error);
        }    
    }; 

    const handleChange = (e) => {
        setNewMerchant({ ...newMerchant, [e.target.name]: e.target.value });
    };

    if (isLoading) return (<h4>Merchant is adding...</h4>)
    if (isError) return (<h4>Some thing went wrong...</h4>)

  return (
    <div>
        <div className='container'>
            <h3 className='mt-3'>User </h3>            
        </div>
    </div>
  )
}

export default Account;



