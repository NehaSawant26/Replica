import AffordPayment from "./AffordPayment";
import CalculatePayment from "./CalculatePayment";
import MortgageCalculator from "./MortgageCalculator";
import PaymentBreakdown from "./PaymentBreakdown";
import { FaArrowRight } from "react-icons/fa6";

function Mortgage() {
    return (
        <>
            <MortgageCalculator />
            <PaymentBreakdown />
            <div className="border-b-2 border-gray-200 mt-10 mb-10 w-4/5 ml-40">
                <h1 className="text-3xl font-semibold">How does a mortgage calculator help me?</h1>
                <p className="text-md text-gray-600 mb-16 mt-10 ml-5">When deciding how much house you can afford, one of the most important pieces to determine is whether a home will fit into your monthly budget. A mortgage calculator helps you understand the monthly cost of a home. And ours will allow you to enter different down payments and interest rates to help determine what is affordable for you.</p>
            </div>
            <div className="  mb-16 w-4/5 ml-40">
                <h1 className="text-3xl font-semibold">How much monthly mortgage payment can I afford?</h1>
                <p className="text-md text-gray-600 mt-10 ml-5">Lenders determine how much you can afford on a monthly housing payment by calculating your debt-to-income ratio (DTI). The maximum DTI you can have in order to qualify for most mortgage loans is often between 45-50%, with your anticipated housing costs included.</p>
                <p className="text-md text-gray-600 mb-16 mt-5 ml-5">Your DTI is the balance between your income and your debt. It helps lenders understand how safe or risky it is for them to approve your loan. A DTI ratio represents how much of your gross monthly income is spoken for by creditors, and how much of it is left over to you as disposable income. It’s most commonly written as a percentage. For example, if you pay half your monthly income in debt payments, you would have a DTI of 50%.</p>
            </div>

           <AffordPayment/>
            <div className="border-b-2 border-gray-200 w-4/5 ml-40"></div>
            <CalculatePayment/>

            <div className=" mt-10 mb-8 w-4/5 ml-40">
                <h1 className="text-3xl font-semibold">How is Better’s mortgage calculator different?</h1>
                <h2 className="text-2xl mt-5 font-normal">This mortgage calculator shows your payments with taxes and insurance</h2>
                <p className="text-md text-gray-600 mt-8 ml-5">The property taxes you contribute are used to finance the services provided by your local government to the community. These services encompass schools, libraries, roads, parks, water treatment, police, and fire departments. Even after your mortgage has been fully paid, you will still need to pay property taxes. If you neglect your property taxes, you run the risk of losing your home to your local tax authority.</p>
                <p className="text-md text-gray-600 mt-2 ml-5">Your lender will usually require you to have homeowners insurance while you're settling your mortgage. This is a common practice among lenders because they understand that nobody wants to continue paying a mortgage on a home that's been damaged or destroyed.</p>
                <p className="text-md text-gray-600 mt-2 ml-5">Here's an interesting fact: Once you fully own your home, the choice to maintain homeowners insurance is entirely up to you. However, to ensure your home is protected against damages caused by fires, lightning strikes, and natural disasters that are common in your area, it is highly recommended to keep it. Therefore, always factor in these costs when using a Mortgage Calculator.</p>
            </div>
            <div className="  mb-8 w-4/5 ml-40">
                <h1 className="text-2xl font-normal">This mortgage calculator shows your mortgage costs with PMI</h1>
                <p className="text-md text-gray-600 mt-8 ml-5">PMI, an abbreviation for private mortgage insurance, aids potential homeowners in qualifying for a mortgage without the necessity of a 20% down payment. By opting for a lower down payment and choosing a mortgage with PMI, you can purchase a home sooner, begin accruing equity, and keep cash available for future needs. This can all be calculated using this Mortgage Calculator.</p>
                <p className="text-md text-gray-600 mt-5 ml-5">Choosing a mortgage with PMI is a popular option: <span className="underline text-emerald-600 cursor-pointer">71% of first-time homebuyers</span> had a down payment of less than 20% in July 2021. <span className="underline text-emerald-600 cursor-pointer">In 2020, the median down payment for first-time homebuyers was just 7%, and it hasn’t risen above 10% since 1989.</span></p>
                <p className="text-md text-gray-600 mt-5 ml-5">PMI is automatically removed from conventional mortgages once your home equity reaches 22%. Alternatively, you can request the removal of PMI once you've accumulated at least 20% home equity.</p>
            </div>
            <div className="  mb-10 w-4/5 ml-40">
                <h1 className="text-2xl font-normal">This mortgage calculator includes HOA fees</h1>
                <p className="text-md text-gray-600 mt-8 ml-5">Homeowners association (“HOA”) fees are typically charged directly by a homeowners association, but as HOA fees come part and parcel with condos, townhomes, and planned housing developments, they’re an essential factor to consider when calculating your mortgage costs.</p>
                <p className="text-md text-gray-600 mt-5 ml-5">Homes that share structural elements, such as roofs and walls, or community amenities like landscaping, pools, or BBQ areas, often require homeowners to pay HOA fees for the maintenance of these shared features. It's important to factor in these costs during your budget planning stage, especially considering that HOA fees typically increase annually. HOAs may also charge additional fees known as ‘special assessments’ to cover unexpected expenses from time to time.</p>
            </div>

            <div className="border-b-2 border-gray-200 w-4/5 ml-40"></div>

            <div className=" mt-10 mb-10 w-4/5 ml-40">
                <h1 className="text-3xl font-semibold">How to reduce your monthly mortgage payments?</h1>
                <p className="text-md text-gray-600 mt-5 ml-5">The lower the purchase price of the home, the lower your loan amount will be. But if the seller is less than willing to cut you a deal, you have other options.</p>
                <h2 className="text-2xl mt-8 font-normal">Extend the length of your mortgage</h2>
                <p className="text-md text-gray-600 mt-3 ml-5">The more time you have to pay off the mortgage, the less each monthly mortgage payment will be. (In lender-speak, ‘extending the length of your mortgage’ is known as ‘increasing your loan term’.) This is why people often choose a 30-year fixed rate mortgage over one with a 15- or 20-year term.</p>
                <h2 className="text-2xl mt-8 font-normal">Increase your down payment</h2>
                <p className="text-md text-gray-600 mt-3 ml-5">The smaller the amount of your mortgage, the smaller your monthly mortgage payments will be. If you’re able to put at least 20% of the home price towards your down payment, you’ll be able to avoid PMI (private mortgage insurance). Even if you can’t afford a complete 20% down payment, boosting your down payment will help you get PMI removed sooner. In fact, boosting your down payment by 5% can lower your monthly PMI fees.</p>
                <h2 className="text-2xl mt-8 font-normal">Get a lower interest rate</h2>
                <p className="text-md text-gray-600 mt-3 ml-5">Increasing your down payment can be one way to help you qualify for a lower interest rate. The amount of your down payment compared to the total amount of the loan is called your <span className="underline text-emerald-600 cursor-pointer">loan-to-value ratio (LTV).</span></p>
                <p className="text-md text-gray-600 mt-3 ml-5">Depending on your loan amount, a lower LTV may increase the likelihood of you being offered a low interest rate. If you intend on keeping your home for a while, you could consider buying points to reduce your interest rate. Buying points essentially means you agree to pay more upfront costs in exchange for a lower monthly payment.</p>
                <p className="text-md text-gray-600 mt-3 ml-5">If you think you may sell or refinance the home in the first 5-10 years of the mortgage, you could consider an <span className="underline text-emerald-600 cursor-pointer">adjustable-rate mortgage (ARM)</span> . An ARM offers a lower fixed interest rate for a set introductory period—typically 5, 7, or 10 years. Once the set introductory period ends, the interest rate adjusts (interest rate may increase after consummation). The introductory interest rate for ARMs is typically lower than the interest rate for a conventional fixed-rate mortgage which could make it a great way to save on interest if you know you won’t keep the mortgage for long.</p>
                <p className="text-md text-gray-600 mt-3 ml-5">If you’re not planning on buying a home for a while, improving your credit score is a tried and true way of increasing your chances of qualifying for a lower interest rate. By reducing your <span className="underline text-emerald-600 cursor-pointer">debt-to-income ratio (DTI)</span> , lenders will see that you comfortably afford your mortgage and may be more willing to offer a lower interest rate.</p>
            </div>

            <div className="border-b-2 border-gray-200 w-4/5 ml-40"></div>


            <div className=" mt-10 mb-8 w-4/5 ml-40">
                <h1 className="text-3xl font-semibold">How much home can I afford?</h1>
                <p className="text-md text-gray-600 mt-8 ml-5">Once again, the easiest way to do this is with a calculator! To know if a home is in your budget, try out our <span className="underline text-emerald-600 cursor-pointer">home affordability calculator</span> . This calculator will take a few inputs from you, like income and savings, and let you know the maximum amount of home you can afford.</p>
            </div>

            <div className="border-b-2 border-gray-200 w-4/5 ml-40"></div>

            <div className=" mt-10 mb-8 w-4/5 ml-40">
                <h1 className="text-3xl font-semibold">Next steps to buying a house</h1>
                <p className="text-md text-gray-600 mt-8 ml-5">There are <span className="underline text-emerald-600 cursor-pointer">8 steps to buying a house</span>  and by using this calculator you’ve completed step 2 (calculating your home affordability) and maybe even step 1 (getting your finances in order).</p>
                <p className="text-md text-gray-600 mt-2 ml-5">The next step is getting pre-approved. A mortgage pre-approval with Better Mortgage takes as little as 3-minutes and doesn’t impact your credit score. It’s a free, no-commitment way to see how much home you can buy, the mortgages you qualify for, and the range of interest rates you’ll be offered.</p>
                <p className="text-md text-gray-600 mt-2 ml-5">If you’re ready to buy a home now, our <span className="underline text-emerald-600 cursor-pointer">definitive home buying checklist</span>  can walk you through everything you need to know to get the home you want. With your Better Mortgage pre-approval letter in hand, you’ll be able to show sellers and real estate agents that you mean business—giving you an edge over homebuyers that don’t have this kind of proof that they’re financially ready to purchase. And by working with an agent from Better Real Estate and funding with Better Mortgage, you’ll save $2,000 on closing costs, and save up to $8,200 on average over the life of your loan.**</p>
            </div>

            <div className="border-b-2 border-gray-200 w-4/5 ml-40"></div>

            <div className="mt-10 mb-8 w-4/5 ml-40">
                <h1 className="text-3xl font-semibold">More resourses</h1>
                <div className="flex gap-12 mt-10  ml-20">
                   <div className="border border-gray-600 p-8 rounded-lg w-80 text-xl ">
                   Get pre-approved to see how much you can borrow
                   <p className="flex text-emerald-700 mt-3 text-lg ">Get started <FaArrowRight className="ml-2 mt-1"/></p>

                   </div>
                   <div className="border border-gray-600  p-8 rounded-lg w-80 text-xl">
                   See today’s rates in your area
                   <p className="flex text-emerald-700 mt-3 text-lg">See rates <FaArrowRight className="ml-2 mt-1"/></p>
                   </div>
                   <div className="border border-gray-600 p-8 rounded-lg w-80 text-xl">
                   Find out your max homebuying budget
                   <p className="flex text-emerald-700 mt-3 text-lg">Try our mortgage calculator <FaArrowRight className="ml-2 mt-1"/></p>
                   </div>
                </div>

                <p className="mt-12 text-xs">*See <span className="underline text-emerald-600 cursor-pointer">Better Real Estate discount terms and conditions.</span></p>
                <p className="text-xs text-gray-700">**The average lifetime savings estimate is based on a comparison of the Freddie Mac Primary Mortgage Market Survey’s (PMMS) 30-year fixed-rate mortgage product with Better Mortgage’s own offered rate for a comparable mortgage product between Jan ‘20 - Dec ‘20. PMMS is based on conventional, conforming fully-amortizing home purchase loans for borrowers with a loan-to-value of 80 percent and with excellent credit. Better Mortgage’s offered rate is based on pricing output for a 30-year fixed-rate mortgage product with a 30-day lock period for a single-family, owner-occupied residential property and a borrower with excellent (760 FICO) credit and a loan-to-value ratio of 80 percent. Individual savings could vary based on current market rates, property type, loan amount, loan-to-value, credit score, debt-to-income ratio and other variables.</p>
            </div>
        </>
    )
}

export default Mortgage;