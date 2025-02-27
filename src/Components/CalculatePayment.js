import React from 'react';
import { RxCross2 } from "react-icons/rx";

function CalculatePayment() {
    return (
        <>
            <div className="border-b-2 border-gray-200 mt-10 mb-10 w-4/5 ml-40">
                <h1 className="text-3xl font-semibold">How to calculate monthly mortgage payments?</h1>
                <p className="text-md text-gray-600 mb-10 mt-8 ml-5">
                    Your monthly mortgage payment includes loan principal and interest, property taxes, homeowners insurance, and mortgage insurance (PMI), if applicable. While not typically included in your mortgage payment, homeowners also pay monthly utilities and sometimes pay homeowners association (HOA) fees, so it’s a good idea to factor these into your monthly budget. This mortgage calculator factors in all these typical monthly costs so you can really crunch the numbers.
                </p>

                <h1 className="text-3xl font-semibold">Formula for calculating monthly mortgage payments</h1>
                <p className="text-md text-gray-600 mb-10 mt-5 ml-5">
                    The easiest way to calculate your mortgage payment is to use a calculator, but for the curious or mathematically inclined, here’s the formula for calculating principal and interest yourself:
                </p>
            </div>
            <div className="justify-items-center">
                <div className="flex bg-emerald-800 bg-opacity-15 p-10 rounded-xl text-2xl mb-5">
                    <h1 className="flex ml-6 mt-6 font-bold text-center text-emerald-900 gap-5">Monthly mortgage payment (M) =  P<RxCross2 className="size-8 mr-6 mt-1" /></h1>
                    <div className="formula text-3xl text-center text-emerald-800">
                        <h1>r(1 + r)<sup>n</sup></h1>
                        <p className="border-b  mt-2 mb-2 w-52 border-emerald-800"></p>
                        <h1>r(1 + r)<sup>n</sup> - 1</h1>
                    </div>
                </div>

                <p className="mr-[730px] text-xl">Where : </p>
                <ul className="text-lg text-gray-700 list-disc">
                    <li className="mt-2"><b>M</b> is monthly mortgage payments</li>
                    <li className="mt-2"><b>P</b> is the principal loan amount (the amount you borrow)</li>
                    <li className="mt-2"><b>r</b> is the monthly interest rate
                        (annual interest rate divided by 12 and expressed as a decimal)<br />
                        <div className="text-sm">For example:<br />if the annual interest rate is 5%,<br />the monthly rate would be 0.05/12 = .00417, or .417%
                        </div>
                    </li>
                    <li className="mt-2"><b>n</b> is the total number of payments in months<br />
                        <div className="text-sm">
                            For example:<br />for a 30-year loan, n = 30×12 = 360 months
                        </div>
                    </li>
                </ul>

                <p className="mr-[600px] mt-4 mb-3">Here's a simple example : </p>
                <div className="bg-emerald-800 bg-opacity-15 p-6 rounded-xl">
                    <div className="flex">
                        <div className="bg-gray-100 p-5 rounded-xl w-72 mr-6">
                            <p className=" text-emerald-800">P = $200,000</p>
                            <p className=" text-emerald-800 mt-3"> r = 0.05/12 = 0.00417</p>
                            <p className=" text-emerald-800 flex gap-1 mt-3">r = 30 <RxCross2 className="mt-1" /> 12 = 360</p>
                        </div>
                        <div className="bg-gray-100 text-center content-center justify-items-center w-96 rounded-xl">
                            <div className="flex gap-2 mt-3">
                                <p className=" flex mt-5 text-emerald-800">M = 200,000 <RxCross2 className="size-5 ml-2 mt-1" /> </p>
                                <div className="text-emerald-800">
                                    <h1>0.00417(1+0.0417)<sup>360</sup></h1>
                                    <p className="border-b border-emerald-800 mb-2 mt-2"></p>
                                    <h1>(1+0.00417)<sup>360</sup> - 1</h1>
                                </div>
                            </div>
                            <p className="text-emerald-800 font-semibold text-lg mt-5 mr-24">M = $1,074 per month</p>
                        </div>
                    </div>
                    <p className="text-emerald-800 text-xs mt-4 text-center">The above scenario is for illustrative purpose only. Your actual monthly payment will differ</p>
                </div>
                <div className="border-b-2 border-gray-200 mt-10 mb-10 w-4/5 ml-40">
                    <p className='mb-5'>This formula assumes a fixed-rate mortgage, where the interest rate remains constant throughout the loan term. And remember, you’ll still need to add on taxes, insurance, utilities, and HOA fees if applicable.</p>
                </div>

            </div>
        </>
    )
}

export default CalculatePayment
