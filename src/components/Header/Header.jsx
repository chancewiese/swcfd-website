import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
   return (
      <header className="site-header">
         <div className="header-left">
            <img className="logo" src="/logos/logo-white.png" alt="Site Logo" />
            <h1>South Weber Country Fair Days</h1>
         </div>
         <HeaderNav />
      </header>
   );
}

function HeaderNav() {
   return (
      <nav className="header-right">
         <ul>
            <li>
               <HeaderButton to="/">Home</HeaderButton>
            </li>
            <li>
               <HeaderButton to="/about">About</HeaderButton>
            </li>
            <li>
               <HeaderButton to="/contact-us">Contact Us</HeaderButton>
            </li>
            <li>
               <HeaderButton to="/events">Events</HeaderButton>
            </li>
         </ul>
      </nav>
   );
}

function HeaderButton({ to, children }) {
   return (
      <NavLink
         to={to}
         className={({ isActive }) =>
            `header-button ${isActive ? "active" : ""}`
         }
      >
         {children}
      </NavLink>
   );
}
