import React from "react";
import Layout from "../core/Layout";
import { useHistory } from "react-router-dom"
import { isAuthenticated, signout } from "../auth";
import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";

import { TbUserEdit } from "react-icons/tb";


const UserProfile = () => {
    const history = useHistory()
  const {
    user: { _id, name, email, role },
  } = isAuthenticated();

  const sideBar = () => {
    return (
      <div class="card" style={{width:"18rem"}}>
        <h5 class="card-header">Dashboard</h5>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link" to="/cart">
            <TbUserEdit /> Edit Profile
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/cart">
            <FiShoppingCart /> My Cart
            </Link>
          </li>
          <li className="list-group-item">
            <span
              className="nav-link fw-bold "
              onClick={() => {
                signout(() => {
                  history.push("/");
                });
              }}
              style={{ color: "Red", cursor: "pointer" }}
            >
              <CiLogout style={{}} /> Logout
            </span>
          </li>
        </ul>
      </div>
    );
  };

  const userDetails = () => {
    return (
      <div>
        <div className="card mb-5">
          <h3 className="card-header"> Profile</h3>
          <ul className="list-group">
            <li className="list-group-item">{name}</li>
            <li className="list-group-item">{email}</li>
          </ul>
        </div>
      </div>
    );
  };

  const PurchaseHistory = () => {
    return (
      <div>
        <div className="card mb-5">
          <h3 className="card-header">Purchase History</h3>
          <ul className="list-group">
            <li className="list-group-item">Histor</li>
          </ul>
        </div>
      </div>
    );
  };
  return (
    <Layout
      title="User Dashboard"
      description="User Dashboard Page"
      className="container"
    >
      <div className="row">
        <div className="col-3">
            {sideBar()}
        </div>
        <div className="col-9">
        {userDetails()}
        {PurchaseHistory()}
        </div>
      </div>
      
    </Layout>
  );
};

export default UserProfile;
