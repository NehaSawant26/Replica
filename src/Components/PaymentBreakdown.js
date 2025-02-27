import React, { useState } from "react";

function Payment() {
    const [principalInterest, setPrincipalInterest] = useState(4125);
    const [propertyTaxes, setPropertyTaxes] = useState(25);
    const [homeInsurance, setHomeInsurance] = useState(132);
    const [hoaFees, setHoaFees] = useState(132);
    const [utilities, setUtilities] = useState(100);
    const [pmi, setPmi] = useState(100);
    const [hoverText, setHoverText] = useState("Hover over the sections");
    const totalPayment = (principalInterest + propertyTaxes + homeInsurance + hoaFees + utilities + pmi).toFixed(0);

    return (
        <>
       
            <div className=" flex p-8 rounded-lg w-full justify-around mt-40 ">
                <div>
                    <h1 className="text-4xl font-bold mb-4">${totalPayment}/mo</h1>
                    <p className="text-gray-600 mb-4">Monthly payment breakdown</p>
                    <div className="w-full h-6 flex items-center mb-8 mt-10">
                        <div
                            className="h-16 bg-green-600 rounded-full  flex-1 w-56"
                            onMouseEnter={() => setHoverText("Principal & Interest ")}
                            onMouseLeave={() => setHoverText("")}
                        ></div>
                        <div
                            className="h-16 rounded-full bg-indigo-700 w-20"
                            onMouseEnter={() => setHoverText("Property taxes ")}
                            onMouseLeave={() => setHoverText("")}
                        ></div>
                        <div
                            className="h-16 rounded-full bg-purple-300 w-4"
                            onMouseEnter={() => setHoverText("Homeowners insurance")}
                            onMouseLeave={() => setHoverText("")}
                        ></div>
                        <div
                            className="h-16 rounded-full bg-yellow-300 w-8"
                            onMouseEnter={() => setHoverText("HOA fees  ")}
                            onMouseLeave={() => setHoverText("")}
                        ></div>
                        <div
                            className="h-16 rounded-full bg-orange-300 w-2"
                            onMouseEnter={() => setHoverText("Utilities - Water, gas, electricity and internet ")}
                            onMouseLeave={() => setHoverText("")}
                        ></div>
                        <div
                            className="h-16 rounded-full bg-orange-800 w-12"
                            onMouseEnter={() => setHoverText("Private mortgage insurance (PMI)")}
                            onMouseLeave={() => setHoverText("")}
                        ></div>
                    </div>

                    <div className="text-center text-xl font-semibold mb-4">
                        {hoverText}
                    </div>
                </div>

                <div className="">
                    <div className="p-2">
                        <div className="flex gap-40 mt-5 ">
                            <div className="flex">
                                <p className="bg-green-600 h-6 w-2 rounded-full mt-4 mr-4"></p>
                                <label className="text-gray-700 font-bold mt-4">Principal & Interest</label>
                            </div>
                            <input
                                type="number"
                                value={principalInterest}
                                onChange={(e) => setPrincipalInterest(Number(e.target.value))}
                                className="border border-gray-300 p-4 w-56 rounded-lg ml-auto" />
                        </div>

                        <div className="flex mt-5">
                            <div className="flex">
                                <p className="bg-indigo-700 h-6 w-2 rounded-full mt-4 mr-4"></p>
                                <label className="block text-gray-700 font-bold mt-4">Property taxes</label>
                            </div>
                            <input
                                type="number"
                                value={propertyTaxes}
                                onChange={(e) => setPropertyTaxes(Number(e.target.value))}
                                className="border border-gray-300 p-4 w-56 rounded-lg ml-auto" />
                        </div>

                        <div className="flex mt-5">
                            <div className="flex">
                                <p className="bg-purple-300 h-6 w-2 rounded-full mt-4 mr-4"></p>
                                <label className="block text-gray-700 font-bold mt-4">Homeowners insurance</label>
                            </div>
                            <input
                                type="number"
                                value={homeInsurance}
                                onChange={(e) => setHomeInsurance(Number(e.target.value))}
                                className="border border-gray-300 p-4 w-56 rounded-lg ml-auto" />
                        </div>

                        <div className="flex mt-5">
                            <div className="flex">
                                <p className="bg-yellow-300 h-6 w-2 rounded-full mt-4 mr-4"></p>
                                <label className="block text-gray-700 font-bold mt-4">HOA fees</label>
                            </div>
                            <input
                                type="number"
                                value={hoaFees}
                                onChange={(e) => setHoaFees(Number(e.target.value))}
                                className="border border-gray-300 p-4 w-56 rounded-lg ml-auto" />
                        </div>

                        <div className="flex mt-5">
                            <div className="flex">
                                <p className="bg-orange-300 h-6 w-2 rounded-full mt-4 mr-4"></p>
                                <label className="block text-gray-700 font-bold mt-4">Utilities</label>
                            </div>
                            <input
                                type="number"
                                value={utilities}
                                onChange={(e) => setUtilities(Number(e.target.value))}
                                className="border border-gray-300 p-4 w-56 rounded-lg ml-auto" />

                    </div>

                    <div className="flex mt-5">
                        <div className="flex">
                            <p className="bg-orange-800 h-6 w-2 rounded-full mt-4 mr-4"></p>
                            <label className="block text-gray-700 font-bold mt-4">PMI</label>
                        </div>
                        <input
                            type="number"
                            value={pmi}
                            onChange={(e) => setPmi(Number(e.target.value))}
                            className="border border-gray-300 p-4 w-56 rounded-lg ml-auto" />
                    </div>
                </div>
                <div className="mt-6">
                    <button className="bg-gray-300 text-black text-lg py-3 px-6 rounded-lg">
                        Copy estimate link
                    </button>
                </div>
            </div >
        </div>
        <div className="border-b-2 w-4/5 ml-40"></div>
        </>
    );
}

export default Payment;
