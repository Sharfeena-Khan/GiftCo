import React, { useState } from "react";
import Layout from "../core/Layout";
import {  Redirect, Link } from "react-router-dom"
// import { signin } from "../auth";
import { signin, authenticate, isAuthenticated } from '../auth';  // Remove any trailing space here


import backgroundImage from "../Assets/1000_F_656034241_gxvRXuHBGkzp6rnyrFwuWmLQtYmBmelo-transformed-transformed.jpeg";
// import { click } from "@testing-library/user-event/dist/click";

import {API} from "../config"
// import { Redirect } from "react-router-dom/cjs/react-router-dom.min";




const Signin = () =>{
  
    const [values, setValue] = useState({
        email: "",
        password: "",
        error: "",
        loading: false, 
        redirectToReferrer : false // Fixed typo here
      });
      

  const {  email, password, loading, error, redirectToReferrer  } = values
  const { user } = isAuthenticated()
  const handleChange = name=>event=>{
    setValue({...values, error:false, [name]: event.target.value} )
  }

 

  const clickSubmit = (event)=>{
    event.preventDefault()
    setValue({...values, error: false, loading :true})
    signin({email,password})
    .then(data=>{
      if (!data) {
        setValue({ ...values, error: "Something went wrong. Please try again.", loading: false });
        return;
      }
      if(data.error){
        setValue({...values,error:data.error, loading : false})
      } else{
        authenticate(data, ()=>{
          setValue({
            ...values,       
            redirectToReferrer: true,
          })
        })

      }
       
      
    })
    .catch((err) => {
      console.log(err);
      setValue({ ...values, error: "Request failed. Please try again later.", loading: false });
    });

  }
    const signInForm = ()=>(
        <form>
       
        <div className="text-center col-10 " style={{
            border: "1px solid rgba(255, 255, 255, 0.3)",  // Light border
            marginTop:"150px",
            padding: "70px",
            background: "rgba(255, 255, 255, 0.4)",  // Semi-transparent background
            backdropFilter: "blur(10px)",  // Blurring effect
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",  // Subtle shadow for depth
            borderRadius: "15px",  // Optional: Rounded corners
            color: "#ffff"  // Text color to contrast the glass effect
        }}>
        <h3 className="fw-semibold">Login</h3>

        

        
        <div className="mb-3   ">
         <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={handleChange('email')}
            value={email}
            style={{
                padding : "0px 150px 0px 10px",
                border: "none", 
                borderBottom: "1px solid #536B7B",
                borderRadius:"0",
                background: "transparent",
                outline: "none",
                color : "white"
            }}
          />
        </div>
        <div className="mb-3">
         
          <input
            type="password"
            className="form-control"
            onChange={handleChange('password')}
            value={password}
            placeholder="Enter password"
            style={{
                border: "none", 
                borderBottom: "1px solid #536B7B",
                borderRadius:"0",
                background: "transparent",
                outline: "none"
            }}
          />
        </div>
        <div className="mb-5">
        
        </div>
        <div className="d-grid mt-5 mb-3">
          <button type="submit" className="btn fw-bold  "
          onClick={clickSubmit}
          style={{         
            background: "#082E47",
            borderRadius:"20px",
            padding: "10px 30px",
            color : "white"
            
            
        }}
        >
           Login
          </button>
        </div>
        <p className="forgot-password text-right">
          Creat new account, <Link to="/signup">SignUp.</Link>
        </p>

        </div>
    
      </form>
    )

    const showError = ()=>(
      <div className="alert alert-danger" style ={{display:error ? '': 'none'}} >
      {error}
    </div>
    )

    const showLoading = ()=>(
      
       loading && (
       <div className="alert-info">
        <h2>Loading</h2>
        </div>)
      
    )

 
    const redirectUser = () => {
        if (redirectToReferrer ) {  // Fixed typo here
           if(user && user.role ===1){
            return <Redirect to="/admin/dashboard" />;
           } else{
            return <Redirect to="/" />;
           }
        }
    };
    


    return(
        <Layout title="" description = "">
            <div className="container-fluid " style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>

            {showLoading()}
            {showError()}  

            {signInForm()}

            {redirectUser()}
            
          
            
            </div>
           
       
    </Layout>

    )
}


export default Signin