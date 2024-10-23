import React from "react";
import Layout from "../core/Layout"
import { isAuthenticated } from "../auth";

const UserProfile = () =>{

    const {user :{_id, name, email, role}} = isAuthenticated()
    return(
        <Layout title="User Dashboard" description = "User Dashboard Page" className="container">
        <div className="card mb-5">
            <h3 className="card-header" > Profile</h3>
            <ul className="list-group">
                <li className="list-group-item">{name}</li>
                <li className="list-group-item">{email}</li>
                
            </ul>

        </div>

    
    </Layout>
    )
  
}
   

export default UserProfile