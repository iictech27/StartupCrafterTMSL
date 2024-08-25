import React from "react";
import Logo from '../assets/images/scLogo.png';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div >
            <div className="navbar bg-white">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">
                        <img
                            src={Logo}
                            alt="logo Preview"
                            className="h-full transform hover:scale-105 transition duration-300 ease-in-out"
                        />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/"><a className="text-black">Home</a></Link></li>
                        <li><Link to="/about"><a className="text-black">About</a></Link></li>
                        <li><Link to="/privacypolicy"><a className="text-black">Privacy Policy</a></Link></li>
                    </ul>
                </div>
                <div className="navbar-end " >
                    <a className="btn bg-[#a855f7] text-white border-0">Log In</a>
                </div>
            </div>
        </div>
    );
}
export default Navbar;