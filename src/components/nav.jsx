import React from "react";
import { Link } from "gatsby";
import { RiMenu4Line, RiCloseFill } from "react-icons/ri";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

function Nav({ handleChecked, checked, handleDarkmode, darkMode }) {
  return (
    <nav className="flex justify-between md:px-2 xs:px-1 md:py-5 xs:pt-4 xs:pb-10">
      <div className="text-2xl">
        <Link to="/">
          <h1 className="text-4xl font-semibold">B</h1>
        </Link>
      </div>
      <div className="xs:text-4xl absolute md:right-20 xs:right-2 xs:top-6 z-50 transition-all">
        <button className="absolute right-9 animate-pulse" onClick={handleDarkmode}>
          {darkMode ? (
            <MdOutlineLightMode size={35} />
          ) : (
            <MdOutlineDarkMode size={35} />
          )}
        </button>
        <button onClick={handleChecked}>
          {checked ? <RiCloseFill size={35} /> : <RiMenu4Line size={35} />}
        </button>
      </div>
      <div
        className={`${
          checked ? `visible` : `hidden`
        } absolute bg-black h-screen w-full z-30 top-0 left-0`}
        style={{
          width: "100vw",
          backgroundColor: darkMode ? "#000" : "#f5f5f5",
        }}
      >
        <ul className="absolute left-10 top-16 text-4xl md:text-7xl md:ml-20 font-black xs:mt-28 md:mt-24">
          <li className="xs:mb-10 md:mb-7 hover:translate-x-5 transition-all hover:line-through">
            <Link to="/">Home</Link>
          </li>
          <li className="xs:mb-10 md:mb-7 hover:translate-x-5 transition-all hover:line-through">
            <Link to="/">Articles</Link>
          </li>
          <li className="xs:mb-10 md:mb-7 hover:translate-x-5 transition-all hover:line-through">
            <Link to="/work">Trending</Link>
          </li>
          <li className="xs:mb-10 hover:translate-x-5 transition-all hover:line-through">
            <Link to="/contact">Category</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
