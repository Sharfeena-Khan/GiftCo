import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./index";

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const auth = isAuthenticated();
      console.log("Auth Data: ", auth);
      
      return auth && auth.user && auth.user.role === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/signin", state: { from: props.location } }}
        />
      );
    }}
  />
);


export default AdminRoute
