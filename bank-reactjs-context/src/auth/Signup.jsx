import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { AuthContext } from "../context/auth"


const Signup = () => {

    const [newUser, setNewUser] = useState({});    
    const [confirmPassword, setConfirmPassword] = useState(); 
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const context = useContext(AuthContext);
    const { authTokenStore } = context;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const response = await axios.post('http://localhost:3002/api/auth/signup', newUser);
            const authToken = response.data.authToken;
            setIsLoading(false);
            alert('Account created successfully')
            authTokenStore(authToken);
        } catch (error) {
            setIsLoading(false)
            setIsError(true)
            console.error(error);
        }
    };

    const handleChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };  


    if (isLoading) return (<div className="text-center mt-4">
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>)
    if (isError) return (<h4>Some thing went wrong...</h4>)

    return (
        <div className='container'>
            <h3 className='mt-3 text-center'>Signup Form </h3>
            <div className='d-flex justify-content-center'>
                <form onSubmit={handleSubmit} className='row my-3 shadow p-3 mb-5 bg-body rounded' style={{ width: "38%" }} >

                    <div className='col-md-6'>
                        <input type="text" className="form-control my-3" id="firstName" name="firstName" placeholder='First Name' onChange={handleChange} />
                    </div>
                    <div className='col-md-6'>
                        <input type="text" className="form-control my-3" id="lastName" name="lastName" placeholder='Last Name' onChange={handleChange} />
                    </div>
                    <div>
                        <input type="email" className="form-control my-3" id="email" name="email" placeholder='Email' onChange={handleChange} />
                    </div>
                    <div>
                        <input type="number" className="form-control my-3" id="mobileNumber" name="mobileNumber" placeholder='Mobile Number' onChange={handleChange} />
                    </div>
                    <div>
                        <input type="password" className="form-control my-3" id="password" name="password" placeholder='Password' onChange={handleChange} />
                    </div>
                    <div>
                        <input type="password" className={`form-control my-3 ${newUser.password === confirmPassword ? '' : 'is-invalid'}` } id="confirmPassword"  name="confirmPassword" placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary my-2 w-100">Signup</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Signup;





