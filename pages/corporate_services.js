// pages/coporate_services.js
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Navbar2 from '../components/Navbar2'
import Card from '../components/Card'
import EmptyCard from '../components/EmptyCard'
import Hexagon from '../components/Hexagon';

import styles from '../styles/Home.module.css';
//import '../styles/global.css'
import 'tailwindcss/tailwind.css';
import { Button, Alert } from "@material-tailwind/react";
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faDollarSign, faCoins, faRobot, faHandshakeAngle, faMoneyBillTrendUp, faMagnifyingGlassChart, faSackDollar } from '@fortawesome/free-solid-svg-icons';

export default function CorporateServices({ darkMode, toggleDarkMode }) {

  // State hooks for collapsible sections
  const [isRwaOpen, setIsRwaOpen] = useState(false);
  const [isStoOpen, setIsStoOpen] = useState(false);

  // Toggle functions for collapsible sections
  const toggleRwa = () => setIsRwaOpen(!isRwaOpen);
  const toggleSto = () => setIsStoOpen(!isStoOpen);

  // Mockup data for the milestone meter
  const [liquidity, setLiquidity] = useState(50); // Mockup percentage for illustration

  const btcData = [
    { date: '2024-01-01', price: 34000 },
    { date: '2024-01-02', price: 35000 },
    // ... more data points ...
  ]

  const triangleStyle = {
    width: '0',
    height: '0',
    borderTop: '25px solid transparent', // Adjust the size by changing the '50px' value
    borderBottom: '25px solid transparent', // Adjust the size by changing the '50px' value
    borderLeft: '50px solid black', // Change 'black' to your desired color, and adjust size
  };

  return (
    <>
      <Head>
        <title>Gen M Partners</title>
      </Head>
      <div className={`${darkMode ? 'dark' : ''} genMMain`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />


        <main className="bg-white min-h-screen">


          <div class="bg-white p-8">
            <div class="container mx-auto">
              <div class="bg-white p-6 grid md:grid-cols-2 gap-10">


                <div class="flex items-center flex-col justify-center">
                  <div className="">
                    <h1 class="text-3xl font-semibold mb-3 text-center">Corporate Partnerships</h1>
                    <p className="leading-loose mb-5 text-xl bg-gray-200 shadow-sm rounded-lg p-10">We partner with firms, institutions and industry innovators looking to bring blockchain-based solutions to their businesses.</p>
                  </div>
                </div>


                <div>
                  <p><img src="corporate-services.webp" alt="Corporate Services" className="rounded-md" /></p>
                </div>

              </div>

            </div>
          </div>

          <div class="bg-white p-8">
            <div class="container mx-auto">
              <h2 class="text-2xl font-bold mb-2 text-center pb-[20px]">Corporate Services</h2>
              <div className="bg-gradient-to-br from-black to-gray-800 p-6 rounded-lg shadow-lg">

                <div className="grid md:grid-cols-2 gap-10 p-5">
                  <div className="border-r-[2px] border-white p-10">
                    <h3 class="text-xl font-semibold mb-3 text-center pt-5 text-white">Advisory for Product Structuring</h3>
                    <p className="leading-loose pb-5 text-white">At Gen. M Partners, we specialize in offering advisory services on product structuring tailored for forward-thinking firms, institutions, and industry innovators keen on integrating blockchain-based solutions into their businesses.</p>
                    <div className="mx-0 my-auto text-center w-full">
                      <Button variant="outlined" className="border-2 bg-white border-black text-black text-xl mt-5 mb-10">Contact Us</Button>
                    </div>
                  </div>


                  <div className="p-10">
                    <h3 class="text-xl font-semibold mb-3 text-center pt-5 text-white">Corporate Asset Management</h3>
                    <p className="leading-loose pb-5 text-white">At Gen. M Partners, we adopt a forward-looking strategy in corporate treasury management. Tailoring our approach to each client's unique risk profile, we aim to steer companies toward achieving optimal capital efficiency and revenue security. Additionally, we assist in treasury preservation and growth strategies.</p>
                    <div className="mx-0 my-auto text-center w-full">
                      <Button variant="outlined" className="border-2 bg-white border-black text-black text-xl mt-5 mb-10">Schedule Consultation</Button>
                    </div>
                  </div>
                </div>



              </div>




            </div>
          </div>

          <div class="bg-white p-8">
            <div class="container mx-auto">
              <div class="bg-white p-6 grid md:grid-cols-2 gap-10">


                <div className="bg-gray-200 p-10 shadow-sm rounded-lg">
                  <h3 class="text-xl font-semibold mb-3 text-center">Why Tokenize Securities?</h3>
                  <p className="leading-loose pb-5">The transformative potential of tokenizing securities, financial instruments, and any other asset class cannot be overstated, particularly within capital markets. </p>

                  <p className="leading-loose pb-5">Security tokens are poised to fundamentally reshape traditional finance, unlocking the value of trillions of dollars tied up in illiquid assets, facilitating the raising of fresh capital, and ushering in innovative secondary markets.</p>

                  <p className="leading-loose pb-5">Tokens could represent everything of value - physical goods, real estate, Intellectual Property (patents, trademarks, etc.), Commodities, securities, funds and a lot more.</p>

                </div>


                <div>
                  <p><img src="benefits-of-tokenizing-securities.jpg" alt="Benefits of Tokenizing Securities" /></p>
                </div>

              </div>

            </div>
          </div>


          <div class="bg-gradient-to-br from-black to-gray-800 p-8">
            <div class="container my-0 mx-auto w-[800px] max-w-full">
              <h2 className="text-2xl font-bold mb-2 text-center pt-[40px] text-white">How does the Tokenization of Real World Assets Work?</h2>

              <p className="leading-loose pb-5 text-center text-white">How do we ensure that RWAs are legitimate tokens of the real-world assets they are representing? The entire process can be broken down into three phases:</p>

            </div>
            <div class="container my-0 mx-auto w-[800px] max-w-full">
            <div class="bg-gray-200 p-10 rounded-lg shadow-sm grid md:grid-cols-3 gap-10">
  <div>
    <h3 class="text-xl font-semibold mb-3 underline">Step 1</h3>
    <div className="flex items-center space-x-4">
      <div class="flex-grow">
        <p className="leading-loose pb-5 text-sm font-medium"><strong>Off-Chain Formalization:</strong> Before an RWA can be integrated into a DLT, its value, ownership and legal standing must be unequivocally established in the physical world.</p>
      </div>
      <div className="flex items-center flex-col justify-center">
        
      </div>
    </div>
  </div>

  <div>
    <h3 class="text-xl font-semibold mb-3 underline">Step 2</h3>
    <div className="flex items-center space-x-4">
      <div class="flex-grow">
        <p className="leading-loose pb-5 text-sm font-medium"><strong>Information Bridging (Tokenization Process):</strong> The asset's information is turned into a digital token. Data about the asset’s value and rightful ownership are embedded within the token’s metadata.</p>
      </div>
      <div className="flex items-center flex-col justify-center">
        
      </div>
    </div>
  </div>

  <div>
    <h3 class="text-xl font-semibold mb-3 underline">Step 3</h3>
    <div className="flex items-center space-x-4">
      <div class="flex-grow">
        <p className="leading-loose pb-5 text-sm font-medium"><strong>RWA Protocol Supply & Demand:</strong> They help bring new RWAs into existence, which means they help make more of these digital assets available, they also work to get investors interested in buying and trading these assets.</p>
      </div>
      <div className="flex items-center flex-col justify-center">
        
      </div>
    </div>
  </div>
</div>

            </div>

            <div class="container my-0 mx-auto w-[800px] max-w-full">
              <p className="leading-loose text-center text-white p-10">Through this three-phased approach, RWAs are not merely abstract concepts but become practical, functional and critical components of the DeFi landscape, carrying the weight and trust of real-world valuation and legal frameworks into the digital asset space.</p>
            </div>

          </div>

          <div class="bg-white p-8">
            <div class="container mx-auto">
              <h2 className="text-2xl font-bold mb-2 text-center pt-[50px]">Considering Capital Raising On-Chain?
                Gen. M Partners can help you with the entire process.</h2>

              <p className="leading-loose p-5 text-center">Blockchain technology can offer several advantages when it comes to raising capital.</p>

            </div>
            <div class="container mx-auto">
              <div class="bg-gray-200 p-6 grid md:grid-cols-4 gap-10 p-5 rounded-lg shadow-sm">



                <div className="p-10 rounded-md bg-gmp-purple">

                  <p className="leading-loose pb-5 text-white font-medium"><strong>Fractionalization:</strong> Assets can be divided into smaller parts, making them more accessible to a wider range of investors.</p>

                </div>

                <div className="p-10 rounded-md bg-gmp-lightblue">

                  <p className="leading-loose pb-5 text-white font-medium"><strong>Lower Barriers:</strong> Blockchain can help to reduce the barriers to entry for both companies and investors.</p>

                </div>
                <div className="p-10 rounded-md bg-gmp-darkblue">

                  <p className="leading-loose pb-5 text-white font-medium"><strong>Trading:</strong> Security tokens can be easily traded on secondary markets, providing investors with liquidity.</p>

                </div>
                <div className="p-10 rounded-md bg-gmp-purple">

                  <p className="leading-loose pb-5 text-white font-medium"><strong>Transparency:</strong> Blockchain provides a transparent and immutable record of all transactions.</p>

                </div>




              </div>

            </div>

            <div class="container mx-auto">
              <p className="leading-loose mt-20 text-center max-w-full w-[800px] my-0 mx-auto bg-gradient-to-br from-black to-gray-800 text-white p-10 rounded-lg shadow-sm">Through this three-phased approach, RWAs are not merely abstract concepts but become practical, functional and critical components of the DeFi landscape, carrying the weight and trust of real-world valuation and legal frameworks into the digital asset space.</p>
            </div>

          </div>

          <div class="bg-white p-8">
            <div class="container mx-auto">
              <h2 className="text-2xl font-bold mb-2 text-center">The Security Token Offering Process</h2>

              <img className="w-[800px] max-w-full mx-auto my-0 pb-[50px]" src="four-steps.jpg" alt="The Security Token Offering Process" />

            </div>


          </div>





        </main>
      </div>
    </>
  )
}



