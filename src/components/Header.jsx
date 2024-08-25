import React, { useState } from "react";
import Logo from '../assets/images/scLogo.png';
import { Link } from "react-router-dom";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
        return (
            <div className="bg-white shadow-md">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <Link to="/">
                            <img
                                src={Logo}
                                alt="logo Preview"
                                className="h-8 sm:h-10 transform hover:scale-105 transition duration-300 ease-in-out"
                            />
                        </Link>
                    </div>
    
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-black focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>
    
                    {/* Desktop Menu */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-4">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to="/" className="text-black">Home</Link></li>
                            <li><Link to="/about" className="text-black">About</Link></li>
                            <li><Link to="/privacypolicy" className="text-black">Privacy Policy</Link></li>
                            <li><Link to="/contact" className="text-black">Contact</Link></li>
                        </ul>
              
                    </div>
                </div>
    
                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden">
                        <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link to="/" onClick={toggleMenu} className="block py-2 text-black">Home</Link>
                            <Link to="/about" onClick={toggleMenu} className="block py-2 text-black">About</Link>
                            <Link to="/privacypolicy" onClick={toggleMenu} className="block py-2 text-black">Privacy Policy</Link>
                            <Link to="/contact" onClick={toggleMenu} className="block py-2 text-black">Contact</Link>
           
                        </div>
                    </div>
                )}
            </div>
        );
    }
    

export default Header
