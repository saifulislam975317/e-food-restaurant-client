import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contextProvider/AuthProvider";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navOption = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      <li>
        <Link to="dashboard">Dashboard</Link>
      </li>
      <li>
        {isAdmin ? (
          <Link to="/dashboard/AdminHome">AdminHome</Link>
        ) : (
          <Link to="/dashboard/userHome">userHome</Link>
        )}
      </li>
      <li>
        <Link to="/dashboard/myCart">
          <AiOutlineShoppingCart className="text-xl"></AiOutlineShoppingCart>
          <span className="badge badge-secondary">+{cart.length || 0}</span>
        </Link>
      </li>
      {user ? (
        <>
          <li onClick={handleLogOut}>
            <Link to="/login">Logout</Link>
          </li>
          <li>
            <a href="">{user?.displayName}</a>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signUp">Sign Up</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar fixed bg-opacity-30 bg-black z-10 max-w-screen-xl  text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOption}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">E-Restaurant</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
