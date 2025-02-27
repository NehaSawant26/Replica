import React, { useState } from "react";

function Dropdown({ options, label }) {
    const [isOpen, setIsOpen] = useState();

    return (
        <>
            <div className="relative inline-block text-left">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex justify-center w-full shadow-sm px-4 py-2 text-white  text-sm font-medium hover:bg-gray-200 hover:text-black  hover:rounded-xl focus:outline-none"
                >
                    {label}
                </button>

                {isOpen && (
                    <div className="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            {options.map((option, index) => (
                                <a
                                    key={index}
                                    href="#!"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    role="menuitem"
                                >
                                    {option}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Dropdown;