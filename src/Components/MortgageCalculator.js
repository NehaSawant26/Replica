import React, { useState } from "react";

function MortgageCalculator() {
    const [homePrice, setHomePrice] = useState(754800);
    const [downPayment, setDownPayment] = useState(60000);
    const [interestRate, setInterestRate] = useState(6.5);
    const [loanYears, setLoanYears] = useState(30);

    const calculateMonthlyPayment = () => {
        const principal = homePrice - downPayment;
        const monthlyInterestRate = interestRate / 100 / 12;
        const numberOfPayments = loanYears * 12;

        const monthlyPayment =
            (principal * monthlyInterestRate) /
            (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

        return monthlyPayment ? monthlyPayment.toFixed(0) : 0;
    };

    return (
        <div className="bg-green-50 h-full flex justify-center items-center">
            <div className=" w-full  p-8 rounded-lg">
                <h1 className="text-3xl font-bold mb-10 mt-20">Mortgage Calculator</h1>
                <p className="text-gray-600 mb-10 mt-10 w-3/5">
                    Our mortgage calculator includes key factors like homeowners
                    association fees, property taxes, and private mortgage insurance
                    (PMI). Get the whole picture and calculate your total monthly payment.
                </p>

                <div className="grid gap-6 mb-10">
                    <div className="flex justify-around mb-10">
                        <div className="col-span-2">
                            <label className="block text-gray-600 text-lg font-bold ml-3 mb-2">Home price</label>
                            <div className="text-4xl font-bold border border-black px-5 py-3 rounded-xl bg-slate-50 w-48">${homePrice}</div>
                        </div>

                        <div>
                            <label className="block text-gray-600 font-bold mb-6">
                                Monthly payment
                            </label>
                            <div className="text-4xl font-bold">
                                ${calculateMonthlyPayment()}/mo
                            </div>
                        </div>

                        <div className="mt-6">
                            <button className="bg-green-700 text-white font-bold py-4 px-7 rounded-lg">
                                Get pre-approved
                            </button>
                        </div>

                    </div>

                    <input type="range"
                        min="100000"
                        max="1000000"
                        step="1000"
                        value={homePrice}
                        onChange={(e) => setHomePrice(Number(e.target.value))}
                        className="w-full mt-2" />

                    <div className="flex justify-around">
                        <div>
                            <label className="block text-gray-600 font-bold">ZIP code</label>
                            <input
                                type="text"
                                value="400016"
                                readOnly
                                className="border border-gray-300 p-3 w-60 rounded-lg" />
                        </div>

                        <div>
                            <label className="block text-gray-600 font-bold">
                                Down payment
                            </label>
                            <div className="relative">
                                <input
                                    type="number"
                                    value={downPayment}
                                    onChange={(e) => setDownPayment(Number(e.target.value))}
                                    className="border border-gray-300 p-3 w-60 rounded-lg" />
                                <span className="absolute right-3 top-2 text-gray-400">$</span>
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-600 font-bold">Interest rate</label>
                            <div className="relative">
                                <input
                                    type="number"
                                    value={interestRate}
                                    onChange={(e) => setInterestRate(Number(e.target.value))}
                                    step="0.01"
                                    className="border border-gray-300 p-3 w-60 rounded-lg" />
                                <span className="absolute right-3 top-2 text-gray-400">%</span>
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-600 font-bold">
                                Length of loan
                            </label>
                            <select
                                value={loanYears}
                                onChange={(e) => setLoanYears(Number(e.target.value))}
                                className="border border-gray-300 p-3 w-60 rounded-lg" >
                                <option value={15}>15 years</option>
                                <option value={30}>30 years</option>
                            </select>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MortgageCalculator;
