import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from "../../context/user"
import axios from 'axios'



const User = () => {

    const [file, setFile] = useState(null);
    const [imgURL, setImgURL] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);


    const context = useContext(UserContext);
    const { user, getUser } = context;
    // console.log(user);

    // const getUser = async() =>{
    //     const authToken = localStorage.getItem('token');              
    //     try {
    //         setIsLoading(true); 
    //         const response = await axios.get("http://localhost:3002/api/auth/getuser", {
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "atoken": authToken
    //             }
    //         });
    //         const user = await response.data.user;
    //         console.log("User:",user);
    //         setUser(user)
    //         setIsLoading(false)

    //     } catch (error) {
    //         setIsLoading(false)
    //         console.log(error)
    //         if(error.response.request.status){
    //             console.log("Please, Login before use!")
    //             alert("Please, Login before use!")
    //         } else {
    //             setIsError(true);                 
    //         }
    //     }
    // }




    // if (isLoading) return (<div className="text-center mt-4">
    // <div className="spinner-border text-primary" role="status">
    //     <span className="visually-hidden">Loading...</span>
    // </div>
    // </div>)
    // if (isError) return (<h4>Some thing went wrong...</h4>)


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(file)
        if (file) {
            const formData = new FormData();
            formData.append('image', file);
            const formDataObject = Object.fromEntries(formData.entries());
            console.log(formDataObject);
            try {
                setIsLoading(true);
                const response = await axios.put(`http://localhost:3002/api/users/${user._id}`, formData);
                const data = response.data;
                console.log(data)
                setIsLoading(false);
                getUser(); // When new image uploaded again call getUser() function to update image.
            } catch (error) {
                setIsLoading(false)
                setIsError(true)
                console.error(error);
            }
        };
    }

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

     


    return (
        <>
       { 
       user.image &&
    //    <img src={`http://localhost:3002/public/users/images/${user.image}`} className="img-fluid rounded mx-auto d-block w-25" alt="profile image" />
    <img src={`http://localhost:3002/public/users/images/${user.image}`} class="rounded-circle img-fluid  mx-auto d-block shadow-4" style={{width: "200px", height: "200px"}}
  alt="Avatar" />
       }            
            <div className="container">
                <div className="container my-3 col-md-3">
                    <div className="mb-2">
                        <form onSubmit={handleSubmit}>
                           <strong> <label htmlFor="image" className="form-label"> {user.image? "Edit" : "Upload"} picture</label> </strong>
                            <input className="form-control" type="file" id="image" name="image" onChange={handleFileChange} />
                            <button type="submit" className="btn btn-primary my-2 w-100">Upload</button>
                        </form>
                    </div>
                </div>
                <hr />
                <h3> User Detail</h3>
                <div className="card mb-5">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            Name: <strong>{user.firstName} {user.lastName}</strong> <br />
                            Email: <strong>{user.email}</strong> <br />
                            Contact No: <strong>{user.mobileNumber}</strong><br />

                        </li>
                    </ul>
                </div>
            </div>

        </>
    );

}

export default User;
