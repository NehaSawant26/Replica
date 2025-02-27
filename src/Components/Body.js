import { MdOutlineTimer } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Body() {
    return (
        <>
            <div className="bg-emerald-900 flex flex-row ">
                <div className="flex ml-48">
                    <div className="mt-auto mb-96">
                        <button className="bg-green-400 h-16 w-56 p-2 rounded-3xl text-green-950 text-lg font-semibold"><Link to="/start">Start my approval</Link></button>
                        <p className="ml-3 flex mt-2 text-white"><MdOutlineTimer className="mt-1  mr-1" />3 min | No ctredit impact</p>
                    </div>
                    <div className=" relative inset-0 ml-28">
                        <div className="absolute inset-x-10 flex items-center justify-center">

                            <h1 className="text-green-400 font-medium text-8xl mt-40 -ml-14  ">Mortgages <br />made simple </h1>
                        </div>
                        <img src="https://media.better.com/better-com/homepage/hero-variant-c.webp" className="mt-64 w-[580px] h-[650px] " />
                    </div>
                    <div className="mt-auto mb-96">
                        <div className="flex gap-2">

                            < FcGoogle className="size-10" />
                            {Array(4).fill().map((_, index) => (
                                <FaStar key={index} className="text-yellow-500 size-6 mt-2" />
                            ))}
                            < FaStarHalfAlt className="text-yellow-500 size-6 mt-2" />
                        </div>
                        <p className="text-white">4.6 Stars | 3177 Google reviews</p>
                    </div>
                </div>
            </div>
            <div className="flex ml-40 mt-24">
                <div className="w-1/2">
                    <img src="https://media.better.com/better-com/homepage/social-proof/still-quote-Arian.webp" alt="img" className="w-[350px] h-[600px] rounded-xl" />
                    <button className="cursor-pointer border border-gray-200 px-6 py-3 hover:border-emerald-800 hover:border-2 ml-6 mt-5 rounded-2xl">Arian</button>
                    <button className="cursor-pointer border border-gray-200 px-6 py-3 hover:border-emerald-800 hover:border-2 ml-2 rounded-2xl">Amanda</button>
                    <button className="cursor-pointer border border-gray-200 px-6 py-3 hover:border-emerald-800 hover:border-2 ml-2 rounded-2xl">Paul</button>
                </div>
                <div className="ml-72">
                    <h1 className="text-8xl mt-44 font-semibold">Find out why we’re better.</h1>
                    <button className="bg-green-700 h-16 w-56 p-2 rounded-3xl text-white text-lg font-semibold mt-8 ml-8"><Link to="/about">see all our stories</Link></button>
                    <div className="flex mt-2 ml-6">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcPjQVNhI9I0aKDV33YVEUX9pr5C5Btd72bA&s" alt="icon" className="w-36 h-12 " />
                        <p className="mt-4">Excellent 4.4 out of 5</p>
                    </div>
                </div>
            </div>

            <div className="mt-28">
                <div className="flex justify-between">
                    <p className="ml-44 text-4xl font-semibold">Got questions?
                        <br />We've got answers</p>
                    <div className="mr-20">
                        <button className="cursor-pointer border border-gray-200 px-6 py-3 hover:border-emerald-800 hover:border-4 ml-2 rounded-3xl">Our products</button>
                        <button className="cursor-pointer border border-gray-200 px-6 py-3 hover:border-emerald-800 hover:border-4 ml-3 rounded-3xl">Calculator</button>
                        <button className="cursor-pointer border border-gray-200 px-6 py-3 hover:border-emerald-800 hover:border-4 ml-3 rounded-3xl">Guides and FAQ's</button>
                    </div>
                </div>

                <div className="flex">

                    <div className=" bg-emerald-500 bg-opacity-10 p-8 rounded-xl w-2/5 ml-44 mt-8">
                        <div className="">
                            <h1 className="text-2xl font-semibold mb-6">Buying your first home with Better</h1>
                            <button className="border border-gray-600 p-4 rounded-full mb-4 hover:bg-emerald-700 hover:text-white"><FaArrowRight /></button>
                            <img src="https://media.better.com/better-com/homepage/learning-center/first-home.webp" alt="img1" className="h-40" />
                        </div>
                    </div>

                    <div className=" bg-emerald-500 bg-opacity-10 p-8 rounded-xl w-auto ml-7 mt-8 mr-20">
                        <div className="flex">
                            <div className="w-3/5 mr-7">
                                <h1 className="text-2xl font-semibold mb-6">One day mortgage</h1>
                                <p>kicks your home loan into hyperdrive: go from locked rate to Commitment Letter in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.</p>
                                <button className="border border-gray-600 p-4 rounded-full mt-4 hover:bg-emerald-700 hover:text-white"><FaArrowRight /></button>
                            </div>
                            <img src="https://media.better.com/better-com/homepage/learning-center/one-day-mortgage.webp" alt="img2" className="h-60 w-64 mt-10" />
                        </div>
                    </div>
                </div>

                <div className="flex mt-2 mb-20">
                    <div className=" bg-emerald-500 bg-opacity-10 p-5 rounded-xl w-auto ml-44 mt-8">
                        <div className="flex">
                            <img src="https://media.better.com/better-com/homepage/learning-center/better-heloc.webp" alt="img3" className="h-60 w-64 mt-10" />
                            <div className="w-3/5 ml-7 mt-6">
                                <h1 className="text-2xl font-semibold mb-6">Better HELOC</h1>
                                <p>Introducing One Day HELOC™—your express lane to accessing cash from your home with our Home Equity Line of Credit. Once you complete your application tasks, you’ll get an approval decision in 24 hours, and your cash in 7 days.</p>
                                <button className="border border-gray-600 p-4 rounded-full mt-4 hover:bg-emerald-700 hover:text-white"><FaArrowRight /></button>
                            </div>

                        </div>
                    </div>

                    <div className=" bg-emerald-500 bg-opacity-10 p-8 rounded-xl w-3/5 ml-7 mr-20 mt-8">
                        <div className="">
                            <h1 className="text-2xl font-semibold mb-6">Insurance</h1>
                            <button className="border border-gray-600 p-4 rounded-full mb-4 hover:bg-emerald-700 hover:text-white"><FaArrowRight /></button>
                            <img src="https://media.better.com/better-com/homepage/learning-center/insurance.webp" alt="img4" className="h-40" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-b-2 border-gray-200 w-4/5 ml-40"></div>
        </>
    )
}

export default Body;