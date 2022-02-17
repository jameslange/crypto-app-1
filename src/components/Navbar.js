import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

//<Route path="/NftsFromWallet" element={<NftsFromWallet />}>  </Route>
const Navbar = () => {
  return (
    <div className="relative">
      <div className="navbar w-full opacity-80 absolute z-10 text-neutral-content ">
        <div className="flex-1 px-2 mx-2"></div>
        <div className="flex-none hidden px-2 mx-2 lg:flex">
          <div className="flex items-stretch">
            <NavLink to="/crypto-app-1" className="btn btn-ghost btn-sm rounded-btn hover:bg-palBrown hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 mr-2 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
              Home
            </NavLink>

            <NavLink
              to="searchnftsbywallet"
              className="btn btn-ghost btn-sm rounded-btn hover:bg-palBrown hover:text-white"
              activeClassName="bg-palBrown"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 mr-2 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                ></path>
              </svg>
              Search By Wallet
            </NavLink>
          </div>
        </div>
        <div className="flex-none block lg:hidden">
          <div className="dropdown dropdown-end ">
            <div tabindex="0" class="btn btn-ghost rounded-btn">
              Dropdown
            </div>
            <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
              <NavLink to="/crypto-app-1" className="btn btn-ghost text-palBrown btn-sm rounded-btn">
                <li>Home</li>
              </NavLink>
              <NavLink to="searchnftsbywallet" className="btn btn-ghost text-bg-palBrown btn-sm rounded-btn">
                <li>Search By Wallet</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
