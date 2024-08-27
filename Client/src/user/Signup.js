import React, { useState } from "react";
import Layout from "../core/Layout";

import backgroundImage from "../Assets/1000_F_656034241_gxvRXuHBGkzp6rnyrFwuWmLQtYmBmelo-transformed-transformed.jpeg";
import { click } from "@testing-library/user-event/dist/click";

import {API} from "../config"




const Signup = () =>{
  
  const [values, setValue] = useState({
    name : "",
    email : "",
    password : "",
    error : "",
    success: false
  })

  const {name,  email, password, success, error} = values
  const handleChange = name=>event=>{
    setValue({...values, error:false, [name]: event.target.value} )
  }

  const signUp =user=>{
    // console.log(name, email,password);
   return fetch(`http://localhost:8000/api/signup`, {
      method : "POST",
     
    
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      
      body : JSON.stringify(user)
    })
    .then(response=>{
      return response.json()
    })
    .catch(err=>{
      console.log(err)
    })
    
  }

  const clickSubmit = (event)=>{
    event.preventDefault()
    signUp({name,email,password})
    .then(data=>{
      if(data.error){
        setValue({
          ...values,
          name:"",
          email:'',
          password:'',
          error:'',
          success:true
        })
      }
    })

  }
    const signUpForm = ()=>(
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
        <h3 className="fw-semibold">Sign up</h3>

         <div className="mb-3 mt-5">
         
          <input
            type="text"
            className="form-control"
            onChange={handleChange('name')}
            value={name}
            placeholder="Enter your name"
            style={{
                border: "none", 
                borderBottom: "1px solid #536B7B",
                borderRadius:"0",
                background: "transparent",
                outline: "none"
            }}
          />
        </div>

        
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
           Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>

        </div>
    
      </form>
    )

    const showError = ()=>(
      <div className="alert alert-danger" style ={{display:error ? '': 'none'}} >
      {error}
    </div>
    )

    const showSuccess = ()=>(
      
        <div className="alert alert-info" style ={{display:success ? '': 'none'}} >
          New account is created.Please signin.
        </div>
      
    )


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

            {showSuccess()}
            {showError()}  

            {signUpForm()}
            
          
            
            </div>
            { JSON.stringify(values)}
       
    </Layout>

    )
}


export default Signup