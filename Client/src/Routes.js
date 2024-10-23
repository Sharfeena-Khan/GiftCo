import React from "react";
import { Route, Switch,BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

import Signin from "./user/Signin";
import Signup from "./user/Signup";
import Home from "./core/Home";
import Menu from "./core/Menu";
import Navbar from "./core/Navbar";
import PrivateRoute from "./auth/PrivateRoute";
import UserProfile from "./user/UserProfile";

const Routes = ()=>{
    return (
        <BrowserRouter>
        <Navbar/>
        <Menu/>
        <Switch>
            <Route path="/" exact component = {Home}/>
            <Route path="/signin" exact component = {Signin}/>
            <Route path="/signup" exact component = {Signup}/>
            <PrivateRoute path="/profile" exact component={UserProfile} />

        </Switch>
        </BrowserRouter>
    )
}



export default Routes
