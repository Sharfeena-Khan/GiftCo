import React from "react";
import Layout from "../core/Layout";
import { useHistory } from "react-router-dom"
import { isAuthenticated, signout } from "../auth";
import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineCategory } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { FaBoxes } from "react-icons/fa";
import SideBar from "../core/sideBar";

const AdminDashboard = () => {
    const history = useHistory()
  const {
    user: { _id, name, email, role },
  } = isAuthenticated();

 

  

  
  return (
    <Layout
      title="Admin Dashboard"
      description="User Dashboard Page"
      className="container"
    >
      <div className="row">
        <div className="col-3">
           <SideBar/>
        </div>
        <div className="col-9">
        ...
        </div>
      </div>
      
    </Layout>
  );
};

export default AdminDashboard;
