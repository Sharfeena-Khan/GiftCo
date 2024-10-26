import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineCategory } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { FaBoxes } from "react-icons/fa";
import { isAuthenticated, signout } from "../auth";
import { useHistory } from "react-router-dom"


const SideBar = () => {
    const history = useHistory()
    return (
      <div class="card" style={{width:"18rem"}}>
        <h5 class="card-header">Dashboard</h5>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link" to="/cart">
            <CgProfile /> Profile
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/admin/createCategory">
            <MdOutlineCategory /> Category Mangement
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/cart">
            <AiOutlineProduct /> Product Mangement
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/cart">
            <FaUsers /> User Mangement
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/cart">
            <FaBoxes /> Order Mangement
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

  export default SideBar