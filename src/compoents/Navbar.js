import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul> */}

      <ul>
        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "red" : "",
              };
            }}
            to="/home"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "red" : "",
              };
            }}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "red" : "",
              };
            }}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>


        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "red" : "",
              };
            }}
            to="/post/mobile"
          >
            Post
          </NavLink>
          
        </li>


        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "red" : "",
              };
            }}
            to="/post/mobile/1"
          >
            Post per 1
          </NavLink>
          
        </li>

        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "red" : "",
              };
            }}
            to={"/post"+"?price="+199+"&type="+"mcq"}
          >
            Post with query
          </NavLink>
          
        </li>

      </ul>
    </>
  );
};

export default Navbar;
