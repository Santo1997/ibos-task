import {PiHandbagSimpleBold} from "react-icons/pi";
import Links from "./Links";
import {useContext} from "react";
import {AuthContext} from "../../provider/AuthProvider";
import useCart from "../../hooks/useCart";
import {Link} from "react-router-dom";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  const {cart} = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("logged out");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="navbar border-b border-slate-500 py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <Links />
            </ul>
          </div>
          <a className="btn btn-ghost">
            <img src="./logo.png" className="w-48" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  font-bold">
            <Links />
          </ul>
        </div>

        {user && (
          <div className="navbar-end">
            <Link to="/cart" className="relative me-5">
              <PiHandbagSimpleBold className="text-4xl" />
              <div className="badge border-0 bg-black text-white badge-sm absolute bottom-1 -right-1">{cart?.length}</div>
            </Link>

            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button">
                <div className="avatar">
                  <div className="w-12 rounded-full ">{user?.photoURL ? <img src={user.photoURL} /> : <img src="./user.png" />}</div>
                </div>
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-lg z-[1] w-52 p-2 shadow">
                <li>
                  <button onClick={handleLogOut} className="font-bold">
                    LogOut
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
