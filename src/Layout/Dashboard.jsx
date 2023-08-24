import { NavLink, Outlet } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiFillHome,
  AiFillCalendar,
  AiFillCreditCard,
  AiFillFileAdd,
  AiTwotoneHome,
  AiOutlineMenu,
  AiTwotoneShopping,
  AiFillContacts,
  AiFillBook,
  AiOutlineMenuFold,
} from "react-icons/ai";

import { ImSpoonKnife } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();

  const [cart] = useCart();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full  ">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/admin">
                  <AiFillHome></AiFillHome>Admin Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/addItem">
                  <ImSpoonKnife></ImSpoonKnife>Add Items
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/manageItems">
                  <AiOutlineMenuFold></AiOutlineMenuFold>Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myCart">
                  <AiOutlineShoppingCart></AiOutlineShoppingCart>My Cart
                  <span className="badge badge-secondary">
                    +{cart.length || 0}
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <AiFillBook></AiFillBook>Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsers></FaUsers>All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/">
                  <AiFillHome></AiFillHome>User Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/reservation">
                  <AiFillCalendar></AiFillCalendar>Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">
                  <AiFillCreditCard></AiFillCreditCard>Payment history
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myCart">
                  <AiOutlineShoppingCart></AiOutlineShoppingCart>My Cart
                  <span className="badge badge-secondary">
                    +{cart.length || 0}
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <AiFillFileAdd></AiFillFileAdd>Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/booking">
                  <AiFillCalendar></AiFillCalendar>My Booking
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <AiTwotoneHome></AiTwotoneHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <AiOutlineMenu></AiOutlineMenu>Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <AiTwotoneShopping></AiTwotoneShopping>Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/contact">
              <AiFillContacts></AiFillContacts>Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
