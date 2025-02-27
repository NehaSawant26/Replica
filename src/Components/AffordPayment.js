import React from 'react';
import { RxCross2 } from "react-icons/rx";

function AffordPayment() {
  return (
    <>
       <div className="justify-items-center">
                <p className="mr-60 mb-2">Formula for calculating your debt-to-income (DTI) ratio:</p>
                <div className="flex bg-emerald-800 bg-opacity-15 p-10 rounded-xl text-2xl mb-5">
                    <div className="formula text-emerald-800">
                        <h1>Monthly Debt Payment</h1>
                        <p className="border-b border-emerald-800"></p>
                        <h1>Monthly Gross Income</h1>
                    </div>
                    <h1 className="ml-2 flex text-2xl mt-4 text-emerald-800"><RxCross2 className="size-8" />100 =</h1>
                    <h1 className="ml-6 mt-2 font-bold text-center text-emerald-900">Debt-to-Income <br />Ratio</h1>
                </div>
                <p className="mr-48 mb-2">Here’s an example of what calculating your DTI might look like:</p>
                <div className=" bg-emerald-800 bg-opacity-15 p-7 rounded-xl text-lg mb-12">
                    
                    <div className="flex">

                        <div className="bg-gray-100 p-5 rounded-xl mr-6">
                            <h1 className="text-2xl text-emerald-800 font-semibold">Debts</h1>
                            <div className="flex gap-10 mt-3">

                                <h1>Auto loan</h1>
                                <p className="ml-auto text-gray-600">$350/month</p>
                            </div>
                            <div className="flex gap-10 mt-1">

                                <h1>Student loans</h1>
                                <p className="ml-auto text-gray-600">$220/month</p>
                            </div>
                            <div className="flex gap-10 mt-1">

                                <h1>Credit cards</h1>
                                <p className="ml-auto text-gray-600">$130/month</p>
                            </div>
                            <div className="flex gap-10 mt-1">

                                <h1>Expected <br />housing costs</h1>
                                <p className="text-gray-600">$1,800/month</p>
                            </div>

                            <p className="border-b border-emerald-800 mb-3 mt-5"></p>
                            <h1>$2,500 monthly debt obligation</h1>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-xl">
                            <h1 className="text-2xl text-emerald-800 font-semibold">Income</h1>

                            <div className="flex gap-10 mt-3">
                                <h1>Monthly salary <br />%60,000/12</h1>
                                <p className="ml-auto text-gray-600">$5,000/month</p>
                            </div>
                            <div className="flex gap-10 mt-2">

                                <h1>Monthly side-gig <br />income</h1>
                                <p className="text-gray-600">$1,500/month</p>
                            </div>
                            <p className="border-b border-emerald-800 mb-3 mt-5"></p>
                            <h1>$6,500 monthly income</h1>
                        </div>
                    </div>
                   
                   <div className="justify-items-center">
                   <div className="flex text-3xl mt-10 gap-5">
                    <div className="formula text-emerald-800">
                        <h1>$2,500</h1>
                        <p className="border-b border-emerald-800 w-36 -ml-8 p-2"></p>
                        <h1 className="mt-2">$6,500</h1>
                    </div>
                    <h1 className="ml-4 flex text-3xl mt-9 text-emerald-800 gap-4"><RxCross2 className="size-8" /> 100 =</h1>
                    <h1 className="ml-4 mt-8 font-semibold text-center text-emerald-900 text-4xl">38% DTI</h1>
                   </div>
                   <h1 className="mt-5 text-emerald-900  text-md text-opacity-65">The above scenario is for illustrative purposes only.</h1>
                   </div>
                </div>
            </div>
    </>
  )
}

export default AffordPayment;

