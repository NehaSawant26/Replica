import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

function Header() {
    const dropdownOptions1 = ['Apply now', 'Purchase rate', 'Afordability calculator','Rent vs Buy calculator', 'Find an agent',];
    const dropdownOptions2 = ['Apply now', 'Refinance rates', 'Cash-out refinance calculator', 'Learning center'];
    const dropdownOptions3 = ['Apply now', 'Calculate your cash','HELOC vs Cash-out refinance', 'Learning center'];
    const dropdownOptions4 = ['Purchase mortgate rate', 'Refinance rate','Refinance cash-out rate', 'HELOC rate', 'Purchase VA rate'];
    const dropdownOptions5 = ['Get INsurance', 'Title and Closing','Better Attorney Match', 'Learning center'];

    const [isOpen, setIsOpen] = useState();

    return (
        <>
            <div className="bg-emerald-900 flex text-white">

                <h1 className="font-bold text-2xl p-6 ml-6">Better</h1>
                <div className="flex gap-10 text-lg p-7 cursor-pointer">
                    <Dropdown label="Buy" options={dropdownOptions1} />
                    <Dropdown label="Refinance" options={dropdownOptions2} />
                    <Dropdown label="HELOC" options={dropdownOptions3} />
                    <Dropdown label="Rates" options={dropdownOptions4} />
                    <Dropdown label="Better+" options={dropdownOptions5} />
                </div>
                <h1 className=" text-lg py-8 ml-5"><Link to="/mortgage">Mortgage Calculator</Link></h1>
                <div className="relative inline-block ml-auto mr-40 ">

                    <div className="flex gap-5 text-lg p-6 ">
                        
                        {isOpen && (
                            <div className="absolute mt-10 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div className="py-3">
                                    <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Call us anytime at 415-523-8837</div>
                                </div>
                            </div>
                        )}
                        <button onClick={() => setIsOpen(!isOpen)}><FaPhoneAlt className=" text-white size-7 " /></button>
                        <button className="mb-1">Sign in</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header;