import React from "react";
import { Link, withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { IoPersonOutline } from "react-icons/io5";
import light_logo from "../Assets/Logo/logo light-01-01.png";
import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";

// const Navbar = ()=>(
//     <div className="nav-bg">
//      <nav className="navbar" style={{ backgroundColor: '#082E47' }}>
//         <div className="container">
//             <div className="d-flex align-items-center justify-content-between">
//             <img

//               src={light_logo}
//               width="180"

//               className="d-inline-block align-top me-5"
//               alt="React Bootstrap logo"
//             />

//             <form className="d-flex  ms-5 ps-5 col-12 " role="search">

//       <input class="form-control form-control-sm me-2  " type="search" placeholder="Search here..." aria-label="Search"
//        style={{
//         border: 'none',
//         borderRadius: '1',
//         outline: 'none',
//         boxShadow: 'none',
//         background:'#536B7B',
//         // textAlign : "center",

//       }}
//       />

//      <button className="btn fs-4  " type="submit"><CiSearch style={{ color: 'white'  }}/></button>

//     </form>

//             </div>

//             <div className="me-5">
//             <ul className="nav justify-content-end  nav-underline gap-5 ">

//             <li className="nav-item">
//     <Link className="nav-link fs-3 " style={{ color: 'white' }} to="/"><IoPersonOutline style={{ color: 'white' }}/></Link>
// </li>
// <li className="nav-item">
//     <Link className="nav-link fs-3 " to="/" style={{ color: 'white' }}><IoMdHeartEmpty style={{ color: 'white' }}/></Link>
// </li>
// <li className="nav-item">
//     <Link className="nav-link fs-3 " to="/" style={{ color: 'white' }}><BsCart3 style={{ color: 'white' }} /></Link>
// </li>
// </ul>

//             </div>

//         </div>
//     </nav>
//     </div>
// )

const Navbar = () => (
  <header className=" fixed-top  " style={{marginBottom:"100px"}}>
    {/* desktop */}
    <div className="container-fluid ">
      <div className="row" style={{ backgroundColor: "#082E47" }}>
        <nav className="navbar container-fluid">
          {/* logo */}
          <div className="col-2 d-lg-block d-none ps-5">
            <img
              src={light_logo}
              width="180"
              className="d-inline-block align-top m"
              alt="Gift.Co"
            />
          </div>

          {/* search */}
          <div className="col-3 col-lg-3 col-xl-3 col-xxl-4 d-lg-block d-none">
            <form className="d-flex  ms-5 ps-5 col-12 " role="search">
              <input
                class="form-control form-control-sm me-2  "
                type="search"
                placeholder="Search here..."
                aria-label="Search"
                style={{
                  border: "none",
                  borderRadius: "1",
                  outline: "none",
                  boxShadow: "none",
                  background: "#536B7B",
                  // textAlign : "center",
                }}
              />

              <button className="btn fs-4  " type="submit" style={{cursor: "pointer"}}>
                <CiSearch style={{ color: "white" , cursor:"pointer" }} />
              </button>
            </form>
          </div>

          {/* icons */}
          <div className="col-lg-6 d-lg-block d-none  col-xxl-6 ">
            <div className="me-5">
              <ul className="nav justify-content-end  nav-underline gap-5 ">
                <li className="nav-item">
                  <Link
                    className="nav-link fs-3 "
                    style={{ color: "white" }}
                    to="/"
                  >
                    <IoPersonOutline style={{ color: "white" }} />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link fs-3 "
                    to="/"
                    style={{ color: "white" }}
                  >
                    <IoMdHeartEmpty style={{ color: "white" }} />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link fs-3 "
                    to="/"
                    style={{ color: "white" }}
                  >
                    <BsCart3 style={{ color: "white" }} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>

    {/* mobile */}
    
  </header>
);

export default withRouter(Navbar);
