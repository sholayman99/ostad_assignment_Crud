/* eslint-disable no-unused-vars */
import React from "react";
import { Link, NavLink } from "react-router-dom";

const AppNavBar = () => {
  return (
    <div className="navbar shadow-md h-[80px]  bg-base-100">
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
            <li>
              <NavLink   to={"/"}>Students</NavLink>{" "}
            </li>
            <li>
              <NavLink  to={"/register"}>Registration</NavLink>
            </li>
          </ul>
        </div>
        <Link to={"/"} className=" font-bold text-[sans-serif] text-2xl">SA College</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink className="text-lg font-semibold" to={"/"}>Students</NavLink>{" "}
          </li>
          <li>
            <NavLink className="text-lg font-semibold" to={"/register"}>Registration</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppNavBar;
