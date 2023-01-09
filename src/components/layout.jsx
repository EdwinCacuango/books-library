import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const Layout = ({ children }) => {
  return (
    <div className="bg-white min-h-screen lg:min-w-[60rem] rounded-md drop-shadow-lg">
      <nav className="bg-orange-500 min-h-[4rem] py-4 px-8 rounded-t-md">
        <ul className="flex gap-10 text-xl text-white font-medium justify-between items-center">
          <li className="min-w-[18rem]">
            <Link to="/add-book">Add a book</Link>
          </li>
          <li className="self-center text-center min-w-[16rem]">
            <NavLink to="/" className=" hover:active-white active:font-white">
              Kruger Library
            </NavLink>
          </li>
          <li className="bg-white flex items-center justify-between px-1 rounded py-1 min-w-[16rem]">
            <input
              placeholder="Search a book"
              className="p-1 rounded-md text-base font-light min-w-[16rem]"
            />
            <button className="text-black bg-transparent p-1">
              <AiOutlineSearch />
            </button>
          </li>
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
