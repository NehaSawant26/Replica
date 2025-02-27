import { FaPhoneAlt, FaMobileAlt } from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";
import { TbHomeDollar, TbCirclePercentage } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";
import { CiBadgeDollar } from "react-icons/ci";


function Start() {
    return (
        <>
            <div className="flex justify-evenly mt-10">
                <h1 className="text-emerald-800 text-2xl font-extrabold">Better <span className="text-gray-600 text-xl font-semibold"><br /> Mortgage</span></h1>
                <p className="flex gap-5 cursor-pointer border border-gray-100 p-4 hover:border-emerald-800 hover:border-4 ml-96">< FaPhoneAlt className="mt-1" /> Need Help! Call(415) 523 8837</p>
            </div>
            <div className="mt-6 border-b-2 border-gray-500 w-4/5 ml-40"></div>

            <div className="text-center mt-20">
                <h1 className="text-5xl font-semibold"> Hi, I'm Betsy!  < br /> What can I help you with? </h1>
                <div className="justify-items-center mt-20">
                    <button className="border border-gray-500 p-5 w-96 mt-6 flex gap-6 text-xl rounded-xl hover:border-emerald-800 hover:border-4"><MdHomeWork className="size-8 ml-10" />Buying a home</button>
                    <button className="border border-black p-5 w-96 mt-6 flex gap-6 text-xl rounded-xl hover:border-emerald-800 hover:border-4"><TbHomeDollar className="size-8 ml-10" />Refinance my mortgage</button>
                    <button className="border border-black p-5 w-96 mt-6 flex gap-6 text-xl rounded-xl hover:border-emerald-800 hover:border-4"><BsCashCoin className="size-8 ml-10" />Get cash from my home</button>
                </div>

                <div className="justify-items-center mt-10">
                    <div className="flex gap-20">
                        <div className="">
                            <h1 className="text-3xl font-bold ">$100B</h1>
                            <p className="text-gray-600">home loans funded entirely online</p>
                        </div>
                        <div className="">
                            <h1 className="text-3xl font-bold ">400K</h1>
                            <p className="text-gray-600">Customers who chose a Better Mortgage</p>
                        </div>
                    </div>
                </div>

                <div className="justify-items-center mt-16">
                    <div className="bg-emerald-600 bg-opacity-20  w-auto  rounded-xl mb-48 ">
                        <div className="text-xl p-8 px-20">
                            After a few questions, you'll unlock:
                            <p className="flex text-lg gap-5 mt-3">< TbCirclePercentage className="size-6 ml-10" />Custom mortgage rates</p>
                            <p className="flex text-lg gap-5 mt-3">< CiBadgeDollar className="size-6 ml-10" />Exclusive offers</p>
                            <p className="flex text-lg gap-5 mt-3 "><FaMobileAlt className="size-6 ml-10 mb-5" />A personalized dashboard</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Start;