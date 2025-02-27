

function About() {
    return (
        <>
            <div className="text-center mt-72 w-3/4 mb-48 ml-52">
                <h1 className="text-green-700 text-3xl mb-5">Our mission</h1>
                <p className="text-5xl text-center font-semibold text-gray-800">We’re making homeownership simpler, faster — and most importantly, more accessible for all Americans.</p>
            </div>

            <div className="flex justify-evenly mb-44">
                <div className="w-96">
                    <h1 className="text-3xl font-semibold">The status quo is broken</h1>
                    <p className="mt-2 text-md text-gray-700">The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.</p>
                    <button className="bg-green-700 h-14 mt-3 w-56 p-2 rounded-xl text-white text-lg font-semibold">Read vishal's story</button>
                </div>
                <img src="https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1643979861/1643979860.jpg" className="w-[550px]" />
            </div>

            <div className="bg-emerald-700 p-24">
                <div className="w-4/5 ml-44">
                    <h1 className="text-4xl font-bold text-white mb-8">How we’re changing things</h1>
                    <p className="text-white mb-2">Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers’.</p>
                    <p className="text-white">That’s why Better.com is redefining the homeownership process from the ground up. We’re using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.</p>
                </div>
            </div>

            <div className="text-center mt-32 mb-32">
                <h1 className="text-4xl font-semibold">Backed By</h1>
                <div className="flex justify-evenly mt-11">

                    <img src="https://group.softbank/system/files/images/philosophy/lnk-pnl7.webp" alt="softbank" className="w-[200px] h-[150px] mt-5" />
                    <img src="https://discovertemplate.com/wp-content/uploads/2024/01/Ally.jpg" alt="ally" className="w-[120px] h-[90px] mt-10" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAJpalmtZ-mR-SA2V0EVNq0UdzeEuHwQlBQw&s" alt="citi" className="w-[180px] h-[130px] mt-2" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnmhD3iACeeUscsjsqvbbs0uZU2NZ20j2Gqg&s" alt="pingan bank" className="w-[110px] h-[150px]" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3JRCWmh6_gkl954wvw8RjmPuHz__oLLscSQ&s" alt="Goldman sachs" className="w-[130px] h-[150px]" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL8HA6Fekaw2F4Pr-oAWvL3bc0a0qulsskYQ&s" alt="KPCB" className="w-[190px] h-[150px]" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDXjEvZ0XATOqMDOdFwlG-n8Mj3j7ZdbtVsQ&s" alt="american express" className="w-[100px] h-[100px] mt-4" />
                </div>
            </div>

            <div className="text-center">
                <h1 className="text-3xl font-semibold">Company Timeline</h1>

                <div className="relative mt-10">
                    <div className="absolute border-l-4 border-gray-400 h-full left-1/2 transform -translate-x-1/2"></div>
                    <div className="flex items-center w-full mb-10">

                        <div className="w-1/2 text-right pr-8 mt-5">
                            <div className="bg-green-700 text-white py-3 px-7 rounded-full inline-block">2014</div>
                        </div>
                        <div className="w-96  pl-8">
                            <div className="bg-gray-100 shadow-md p-6 rounded-lg">
                                <p>After Vishal Garg’s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center w-full mb-8 mt-5">
                        <div className="w-96 ml-auto mr-10">
                            <div className="bg-gray-100 shadow-md p-6 rounded-lg">
                                <p>Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).</p>
                            </div>
                        </div>

                        <div className="w-1/2 text-start pl-8">
                            <div className="bg-green-700 text-white py-3 px-7 rounded-full inline-block">2015</div>
                        </div>
                    </div>


                    <div className="flex items-center w-full mb-8 mt-5">

                        <div className="w-1/2 text-right pr-8">
                            <div className="bg-green-700 text-white py-3 px-7 rounded-full inline-block">2016</div>
                        </div>
                        <div className="w-96 pl-8">
                            <div className="bg-gray-100 shadow-md p-6 rounded-lg">
                                <p>Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center w-full mb-8 mt-5">
                        <div className="w-96 ml-auto mr-10">
                            <div className="bg-gray-100 shadow-md p-6 rounded-lg">
                                <p>Better expands into the real estate market with Better Real Estate.</p>
                            </div>
                        </div>

                        <div className="w-1/2 text-start pl-8">
                            <div className="bg-green-700 text-white py-3 px-7 rounded-full inline-block">2017</div>
                        </div>
                    </div>

                    <div className="flex items-center w-full mb-8 mt-5">

                        <div className="w-1/2 text-right pr-8">
                            <div className="bg-green-700 text-white py-3 px-7 rounded-full inline-block">2018</div>
                        </div>
                        <div className="w-96 pl-8">
                            <div className="bg-gray-100 shadow-md p-6 rounded-lg">
                                <p>Better Mortgage partners with Ally Bank to build Ally powered by Better.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center w-full mb-8 mt-5">
                        <div className="w-96 ml-auto mr-10">
                            <div className="bg-gray-100 shadow-md p-6 rounded-lg">
                                <p>Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.</p>
                            </div>
                        </div>

                        <div className="w-1/2 text-start pl-8">
                            <div className="bg-green-700 text-white py-3 px-7 rounded-full inline-block">2019</div>
                        </div>
                    </div>

                    <div className="flex items-center w-full mb-8 mt-5">

                        <div className="w-1/2 text-right pr-8">
                            <div className="bg-green-700 text-white py-3 px-7 rounded-full inline-block">2021</div>
                        </div>
                        <div className="w-96 pl-8">
                            <div className="bg-gray-100 shadow-md p-6 rounded-lg">
                                <p>Better acquires Trussle — The UK’s most innovative online mortgage broker.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center w-full mb-8 mt-5">
                        <div className="w-96 ml-auto mr-10">
                            <div className="bg-gray-100 shadow-md p-6 rounded-lg">
                                <p>Better Mortgage becomes the first fintech to fund $100B home loans entirely online.</p>
                            </div>
                        </div>

                        <div className="w-1/2 text-start pl-8">
                            <div className="bg-green-700 text-white py-3 px-7 rounded-full inline-block">2022</div>
                        </div>
                    </div>

                    <div className="flex items-center w-full mb-8 mt-5">

                        <div className="w-1/2 text-right pr-8">
                            <div className="bg-green-700 text-white py-3 px-7 rounded-full inline-block">2023</div>
                        </div>
                        <div className="w-96 pl-8">
                            <div className="bg-gray-100 shadow-md p-6 rounded-lg">
                                <p>Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center w-full mb-40 mt-5">
                        <div className="w-96 ml-auto mr-10">
                            <div className="bg-gray-100 shadow-md p-6 rounded-lg">
                                <p>You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.</p>
                                <button  className="bg-green-800 text-white py-2 mt-2 ml-24 px-7 rounded-xl ">Get started</button>
                            </div>
                        </div>

                        <div className="w-1/2 text-start pl-8">
                            <div className="bg-green-700 text-white py-3 px-7 rounded-full inline-block">Today</div>
                        </div>
                    </div>


                </div>

            </div>

        </>
    )
}

export default About;