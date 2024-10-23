import React from "react";
import { Link, withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { FaUser } from "react-icons/fa6"


const isActive = (history, path)=>{
    if(history.location.pathname === path){
        return { fontWeight: "bold" , color : "#054D7C"};
        }else{
            return{fontWeight: "600", color : "#536B7B" } ; 

        }
    }


const Menu = ({history})=>(
    <div>   
    <nav className="navbar mt-5">
        <div className="container-fluid justify-content-center mt-5">
          

           
            <ul className="nav   nav-underline gap-5 " > 
<li className="nav-item">
    <Link className="nav-link " style={isActive(history,"/")}  to="/">Home</Link>
</li>
<li className="nav-item">
    <Link className="nav-link " style={isActive(history,"/categories")} to="/categories">All Categories</Link>
</li>
<li className="nav-item">
    <Link className="nav-link " style={isActive(history,"/for-him")}  to="/for-him">For Him</Link>
</li>
<li className="nav-item">
    <Link className="nav-link "style={isActive(history,"/for-her")} to="/for-her">For Her</Link>
</li>
<li className="nav-item">
    <Link className="nav-link " to="/">Wanna Customise..?</Link>
</li>

{/* <li className="nav-item">
    <Link className="nav-link " to="/">Cake</Link>
</li> */}


</ul>  

           


        </div>
    </nav> 
    </div>
)


export default withRouter(Menu)

