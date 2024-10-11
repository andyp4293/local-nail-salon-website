

"use client"; // client side only

import { useState } from "react";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false); // for opening and closing the mobile view navbar

    return (
        <header className="bg-white shadow-md fixed w-full z-10 ">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-3xl font-bold text-teal-600">
                    {process.env.NEXT_PUBLIC_NAME}
                </div>

                {/* normal navbar for desktop*/}
                <nav className="hidden md:flex space-x-6">
                    <a href="/" className="text-gray-800 hover:text-green-600">
                        Home
                    </a>
                    <a href="/about" className="text-gray-800 hover:text-green-600">
                        About Us
                    </a>
                    <a href="#" className="text-gray-800 hover:text-green-600">
                        Booking
                    </a>
                    <a href="#" className="text-green-600 font-semibold">
                        Contact Us
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-800 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                        aria-expanded={isOpen}
                    >
                        <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                        >
                        {isOpen ? (
                            <path
                            fillRule="evenodd"
                            d="M6 18L18 6M6 6l12 12"
                            clipRule="evenodd"
                            />
                        ) : (
                            <path
                            fillRule="evenodd"
                            d="M4 6h16M4 12h16m-7 6h7"
                            clipRule="evenodd"
                            />
                        )}
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white`}>
                <nav className="px-4 pt-4 pb-2 space-y-2">
                    <a href="/" className="block text-gray-800 hover:text-green-600">
                        Home
                    </a>
                    <a href="/about" className="block text-gray-800 hover:text-green-600">
                        About Us
                    </a>
                    <a href="#" className="block text-gray-800 hover:text-green-600">
                        Booking
                    </a>
                    <a href="#" className="block text-green-600 font-semibold">
                        Contact Us
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
