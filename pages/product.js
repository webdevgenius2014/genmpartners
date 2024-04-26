// pages/dashboard.js
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import EmptyCard from '../components/EmptyCard'
import styles from '../styles/Home.module.css';
//import '../styles/global.css'
import 'tailwindcss/tailwind.css';
import { Button, Alert } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';

export default function Dashboard({ darkMode, toggleDarkMode }) {

    const leadershipTeam = [
        {
          title: "CEO",
          name: "Francesco Randisi",
          email: "francesco@genmpartners.com",
          linkedInUrl: "https://www.linkedin.com/in/francesco-randisi-769a46233/"
        },
        {
          name: "Michael Lanni",
          title: "COO",
          email: "michael@genmpartners.com",
          linkedInUrl: "https://www.linkedin.com/in/michael-lanni-b74966264/"
        },
        {
          name: "Justin Randisi",
          title: "Developer",
          email: "justin.randisi18@gmail.com",
          linkedInUrl: "https://www.linkedin.com/in/justin-randisi-603611203/"
        },
        {
          name: "Mark Sean",
          title: "CTO",
          email: "mark@contrabandinteractive.com",
          linkedInUrl: "https://www.linkedin.com/in/marksean"
        }
      ]; 


  return (
    <>
      <Head>
        <title>Gen M Partners</title>
      </Head>
      <div className={`${darkMode ? 'dark' : ''} genMMain`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 pt-10">

            


            <div className="container mx-auto p-8">
                <h1 className="text-5xl font-semibold mb-12 text-center">$TPEF Is Your Entry To Private Markets</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                    <div className="mb-4 flex flex-col items-center justify-center">
                        <p className="p-10 shadow-sm max-w-[500px] text-xl text-left bg-gray-200 rounded-lg">By holding $TPEF you are holding fractionalized ownership in a hybrid-based Private Equity Fund, featuring a diverse investment strategy across various asset classes, all represented within a single token.</p>
                    </div>
                    <div className="mb-4">
                        {/* <img src="/product-1.jpg" alt="By holding $TPEF you are holding fractionalized ownership in a hybrid-based Private Equity Fund" className="w-[400px] max-w-full h-auto object-cover rounded" /> */}
                        <video width="320" height="240" loop autoPlay> 
                          <source src="./animation.mp4" type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>

            <div className='flex justify-center' >
              <div className="grid grid-cols-1 md:grid-cols-1 gap-10 max-w-[1200px] w-full p-4">
                <img src="./entry-to-private.jpg" alt="Asset Backed Digital Security"/>
              </div>
            </div>

            <div className='flex justify-center pb-[50px]' >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1200px] w-full p-4">
                <button class="bg-black p-3 border border-black text-base font-bold rounded-md text-white flex items-center justify-center">
                    <span class="ml-2 uppercase tracking-wide">Asset Backed Digital Security</span>
                </button>
                <button class="bg-black p-3 border border-black text-base font-bold rounded-md text-white flex items-center justify-center">
                    <span class="ml-2 uppercase tracking-wide">Passive Income On-Chain Investment</span>
                </button>
                <button class="bg-black p-3 border border-black text-base font-bold rounded-md text-white flex items-center justify-center">
                    <span class="ml-2 uppercase tracking-wide">Automation in the Distribution Process</span>
                </button>
              </div>
            </div>

            <div className='container max-w-full flex justify-center bg-gradient-to-br from-black to-gray-800'>
    <div className="grid grid-cols-1 place-items-center w-full p-4 max-w-[1200px] mx-auto">
        <h2 className="text-5xl font-semibold mt-10 text-center pb-[40px] text-white">Token Representation</h2>
        <img src="/product-2.jpg" alt="Token Representation" className="mb-[70px] w-[1000px] max-w-full h-auto object-cover rounded-lg shadow-lg border-[20px] border-white" />
    </div>
</div>

            <div className='container max-w-full flex justify-center' >
                <div className="grid grid-cols-1 gap-10 max-w-[1200px] w-full p-4">
                     <p className="p-10 shadow-sm text-xl bg-gray-200 rounded-lg text-xl">Token holders will receive a share of the net profits generated by the fund based on the quantity of tokens they hold. The distributions will be executed via smart contracts, aiming to enhance efficiency and maximize profitability for our LPs.</p>
                     <a href="./whitepaper.pdf" target="_blank" className="cursor-pointer"><img src="/homepage-1.jpg" alt="Token Representation" className="mx-auto my-0 w-[400px] max-w-full h-auto object-cover rounded" /></a>
                </div>
            </div>

            <div className="max-w-full mx-auto p-10 bg-gradient-to-br from-black to-gray-800 rounded-lg shadow-md mx-10">
                <div className="grid grid-cols-1 gap-10 max-w-[1200px] w-full p-4">
                     <h2 className="text-5xl font-semibold mt-2 text-center text-white">Investment Pillars</h2>
                     <div className='flex justify-center' >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1200px] w-full p-4">
                            <div className="md:border-r-2 border-white mx-0 my-auto p-5">
                                <h2 className="text-2xl font-semibold mt-10 text-center text-white">Alternative Investments</h2>
                                <p className="mb-10 text-white text-2xl text-center">The funds' strategic allocations in Fine Arts serve as a hedge against market volatility and
currency fluctuations. By diversifying beyond conventional assets, we are enhancing risk-
adjusted returns and preserving capital over the long term for our LPs.</p>
                            </div>
                            <div className="md:border-r-2 border-white mx-0 my-auto p-5">
                                <h2 className="text-2xl font-semibold mt-10 text-center text-white">Real Estate</h2>
                                <p className="mb-10 text-white text-2xl text-center">The fund will be taking a multi-strategy approach to its real estate investments to bring exposure
to single-family and commercial deals to LPs.</p>
                            </div>
                            <div className="mx-0 my-auto p-5">
                                <h2 className="text-2xl font-semibold mt-10 text-center text-white">Private Placements</h2>
                                <p className="mb-10 text-white text-2xl text-center">We are in the early stages of a technological revolution, the ongoing rise of automation,
digitization, and integration of technology in industries and society marks a significant
revolution characterized by the merging of various technological pillars.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center'>
              <div className="grid grid-cols-2 gap-10 max-w-[1200px] w-full p-4 items-center">
                <div>
                  <h2 className="text-5xl font-semibold text-center my-20">Token Value</h2>
                  <p className='text-xl my-20 p-10 bg-gray-200 shadow-sm rounded-lg'>The value of each token is derived from the assets held under the funds, including both on-chain and off-chain accounts. Our private investments will encompass: Buyouts, Growth Equity, and Venture Capital opportunities, with the potential inclusion of Special Situations based on the investment opportunities presented.</p>
                </div>
                <img src="/product-3.jpg" alt="Token Value chart" className="w-full h-auto object-cover rounded" />
              </div>
            </div>

            </div>
          </div>
        </main>
      </div>
    </>
  )
}
