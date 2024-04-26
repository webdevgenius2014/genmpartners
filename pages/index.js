import Head from 'next/head'
import Navbar from '../components/Navbar'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import '../styles/global.css'
// import styles from '../styles/Home.module.css';

// import 'tailwindcss/tailwind.css';
import { Button, Alert } from "@material-tailwind/react";
import React, { useState, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faDollarSign, faCoins, faRobot, faKey, faUniversalAccess, faHandshakeSimple, faHandshakeAngle, faMoneyBillTrendUp, faMagnifyingGlassChart, faSackDollar, faGear } from '@fortawesome/free-solid-svg-icons';
import ActionButton from '../components/ActionButton';
export default function Dashboard({ darkMode, toggleDarkMode }) {

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
  ];
  return (
    <>
      <Head>
        <title>Gen M Partners</title>
      </Head>
      <div className={`${darkMode ? 'dark' : ''} genMMain relative`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
          {/* Banner section */}
          <div className="bg-[url('/images/banner-bg.png')] bg-cover bg-no-repeat min-h-[850px] bg-bottom banner-bg">
            <div className='container mx-auto flex justify-center items-center min-h-[inherit]'>
                <div className='text-center mt-[107px]'>
                  <div className='text-[59px] text-[#4F6DF4] font-bold'>Specializing in issuing</div>
                  <h1 className='font-bold bg-gradient-to-r from-268.51deg from-[#35AFF8] via-44.58% to-[#4F6DF4] to-96.03% inline-block bg-clip-text text-transparent leading-[155px] lg:text-[130px]'>Security Tokens</h1>
                  <p className='text-[33px] text-[#535353] font-light'>Earn Real Yields On-Chain With Our Hold-to-Earn Products</p>
                  <div className="flex items-center justify-center gap-5 mt-9">
                    <ActionButton btnType="plain" btnText="Read More" btnAction={()=>{}} />
                    <ActionButton btnType="filled" btnText="Whiteper" btnAction={()=>{}} />
                  </div>
                </div>
                
            </div>
          </div>
          {/*section Two */}
          <div className='container mx-auto sm:text-center mt-[99px]'>
            <div className='text-subHeading text-primary-300 font-bold'>Earn Real Yields On-chain With</div>
            <h2 className='text-heading text-black font-bold'>Our Hold-to-Earn  
                <span classname="relative">
                 Products
                <span classname="block absolute bottom-0 left-0 w-full height-[2px] bg-gradient-to-r from-90deg from-[#35AFF8] via-0% to-[#506EF6] to-100%"></span>
              </span>
            </h2>
            <p className='text-17xl text-[#535353] font-bold max-w-[688px] mx-auto mt-7.5'>Gen. M Partners specializes in the issuance of security tokens, bridging private and public markets with digital assets.</p>
          </div>

          {/* old page sections */}
          <div className="bg-cover bg-center grid grid-cols-2">
            <div className="flex flex-col items-center h-full bg-opacity-50 bg-white text-white p-10 main-banner">
              <h1 className="mb-4 text-left text-black max-w-[700px] pt-[50px] text-7xl">Earn Real-World Yield On-Chain Through Our <span className="bg-gradient-to-r from-gmp-purple via-gmp-lightblue to-gmp-darkblue text-transparent bg-clip-text">Hold-to-Earn</span> Products</h1>
              <a href="/whitepaper.pdf" target="_blank">
                <Button variant="outlined" className="border-2 bg-black border-black text-white text-xl mt-5 my-10 relative md:right-[50px]">Whitepaper</Button>
              </a>
            </div>
            <div className="flex flex-col items-center h-full bg-opacity-50 bg-white text-white p-10 main-banner">
              {/* <img className="relative bottom-0 right-0 -op-10 w-[950px] max-w-[100%]" src="./placeholder.png" alt="company coin" /> */}
              <video width="600" height="600" loop autoPlay className=""> 
                <source src="animation.mp4" type="video/mp4"/>
              </video>
            </div>
          </div> 

          <div className="bg-gray-200 flex min-h-[350px] w-full">
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlay
              autoPlaySpeed={3000} // Adjust as needed for timing
              centerMode={false}
              className=""
              containerClass="container-with-dots"
              customTransition="all 1s linear"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={true}
              renderDotsOutside={true}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024
                  },
                  items: 4,
                  partialVisibilityGutter: 40
                },
                tablet: {
                  breakpoint: {
                    max: 768,
                    min: 0
                  },
                  items: 1,
                  partialVisibilityGutter: 30
                }
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              showDots={false}
              sliderClass=""
              slidesToSlide={2}
              swipeable
              transitionDuration={2000} // Adjust to match or be slightly less than autoPlaySpeed
            >
              <div class="scroll-item bg-gmp-purple rounded mx-2 mx-auto my-0 flex flex-col items-center justify-center shadow-lg p-5 gap-[10px]">
                <FontAwesomeIcon icon={faStore} size="3x" className="text-white" />
                <span class="pt-[20px] ml-2 text-center font-bold tracking-wide rounded-md text-white leading-[3em] uppercase outlined-text w-[100%] leading-tight">Democratizing Access to Private Markets</span>
              </div>
              <div class="scroll-item bg-gmp-lightblue rounded mx-2 mx-auto my-0 flex flex-col items-center justify-center shadow-lg p-5 gap-[10px]">
                <FontAwesomeIcon icon={faDollarSign} size="3x" className="text-white relative top-[5px]" />
                <span class="pt-[20px] ml-2 text-center font-bold tracking-wide rounded-md text-white leading-[3em] uppercase outlined-text w-[100%] leading-tight">Industry Competitive Minimums</span>
              </div>
              <div class="scroll-item bg-gmp-darkblue rounded mx-2 mx-auto my-0 flex flex-col items-center justify-center shadow-lg p-5 gap-[10px]">
                <FontAwesomeIcon icon={faCoins} size="3x" className="text-white relative top-[5px]" />
                <span class="pt-[20px] ml-2 text-center font-bold tracking-wide rounded-md text-white leading-[3em] uppercase outlined-text w-[100%] leading-tight">Raising Capital Efficiently Through STOs</span>
              </div>
              <div class="scroll-item bg-gmp-purple rounded mx-2 mx-auto my-0 flex flex-col items-center justify-center shadow-lg p-5 gap-[10px]">
                <FontAwesomeIcon icon={faRobot} size="3x" className="text-white relative top-[5px]" />
                <span class="pt-[20px] ml-2 text-center font-bold tracking-wide rounded-md text-white leading-[3em] uppercase outlined-text w-[100%] leading-tight">Automation in the Distribution Process</span>
              </div>
              <div class="scroll-item bg-gmp-lightblue rounded mx-2 mx-auto my-0 flex flex-col items-center justify-center shadow-lg p-5 gap-[10px]">
                <FontAwesomeIcon icon={faUniversalAccess} size="3x" className="text-white relative top-[5px]" />
                <span class="pt-[20px] ml-2 text-center font-bold tracking-wide rounded-md text-white leading-[3em] uppercase outlined-text w-[100%] leading-tight">Accessible for anyone to invest in private markets</span>
              </div>
              <div class="scroll-item bg-gmp-darkblue rounded mx-2 mx-auto my-0 flex flex-col items-center justify-center shadow-lg p-5 gap-[10px]">
                <FontAwesomeIcon icon={faHandshakeSimple} size="3x" className="text-white relative top-[5px]" />
                <span class="pt-[20px] ml-2 text-center font-bold tracking-wide rounded-md text-white leading-[3em] uppercase outlined-text w-[100%] leading-tight">Profit-sharing model</span>
              </div>
              <div class="scroll-item bg-gmp-purple rounded mx-2 mx-auto my-0 flex flex-col items-center justify-center shadow-lg p-5 gap-[10px]">
                <FontAwesomeIcon icon={faKey} size="3x" className="text-white relative top-[5px]" />
                <span class="pt-[20px] ml-2 text-center font-bold tracking-wide rounded-md text-white leading-[3em] uppercase outlined-text w-[100%] leading-tight">Access to secondary market liquidity</span>
              </div>
              <div class="scroll-item bg-gmp-lightblue rounded mx-2 mx-auto my-0 flex flex-col items-center justify-center shadow-lg p-5 gap-[10px]">
                <FontAwesomeIcon icon={faDollarSign} size="3x" className="text-white relative top-[5px]" />
                <span class="pt-[20px] ml-2 text-center font-bold tracking-wide rounded-md text-white leading-[3em] uppercase outlined-text w-[100%] leading-tight">Earn dividends by simply holding $TPEF</span>
              </div>
            </Carousel>            
          </div> 
          <div className="custom-container">
            <div className="p-10 bg-gradient-to-br from-black to-gray-800 shadow-md">
              <h2 className="text-5xl text-center font-semibold text-white pb-2">Initial Offering: </h2>
              <h2 className="text-5xl text-center font-semibold text-white pb-2">Tokenized Private Equity Fund</h2>
              <div className='my-10'>
                <p className="mt-4 text-white text-2xl text-center my-0">
                  Gen. M Partners is pleased to launch our first Security Token Offering set to launch later this year. Token holders have the opportunity to generate passive income through the returns yielded by our comprehensive private equity portfolio.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center py-6 my-10">
                <div>
                  <h4 className="font-bold text-white text-2xl">Secondary Sale fees</h4>
                  <p className="text-5xl font-bold text-white mt-2">2%</p>
                </div>
                <div>
                  <h4 className="font-bold text-white text-2xl">Minimum Investment</h4>
                  <p className="text-5xl font-bold text-white mt-2">$1500</p>
                </div>
                <div>
                  <h4 className="font-bold text-white text-2xl">Fund Size</h4>
                  <p className="text-5xl font-bold text-white mt-2">$375M</p>
                </div>
              </div>
              <div className="text-center pb-5">
                <a href="/product" target="_blank">
                  <Button variant="outlined" className="border-white text-white text-xl mt-5">Learn More</Button>
                </a>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 my-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 right-5">
              <div className="mb-4">
                {/* Replace with your actual image source */}
                <a href="./whitepaper.pdf" target="_blank" className="cursor-pointer"><img src="/homepage-1.jpg" alt="Tokenized Private Equity Fund" className="hover:cursor-pointer mx-auto my-0 w-[400px] max-w-full h-auto object-cover rounded" /></a>
              </div>
              <div className="mb-4">
                {/* Replace with your actual image source */}
                <img src="/homepage-2.jpg" alt="Future Issuances" className="mx-auto my-0 w-[400px] max-w-full h-auto object-cover rounded" />
              </div>
            </div>
          </div>
          <div class="mx-auto w-full">
            <div class="bg-white rounded-lg">
              <div class="mb-10 grid grid-cols-1 md:grid-cols-2 helvetica-font">
                <div>
                  <h2 class="text-5xl font-bold mb-2 text-black m-10 md:pl-10">Private Equity has consistently delivered superior returns compared to traditional asset classes.</h2>
                  <div className="bg-gray-200 rounded-lg shadow-sm p-10 m-10">
                  <p class="text-xl text-left text-black pb-10">For over past two decades, private equity has consistently generated impressive returns relative to alternative asset classes.</p>
                  <p class="text-xl text-left">According to data from Preqin, private equity funds have delivered an average annualized return of over 13% over the past 20 years, compared to less than 10% for the S&P 500 index.</p>
                  </div>
                </div>
                <div class="rounded mb-4 flex items-center justify-center p-10">
                  <img src="./chart.png" alt="S&P 500" className="max-w-full" />
                </div>
              </div>
              <div class="w-full max-w-full bg-gradient-to-br from-black to-gray-800 rounded p-10">
                <h2 class="text-5xl font-bold mb-2 text-center m-10 text-white">Gen. M Partners is Reinventing Private Markets</h2>
                <p className="pb-5 text-xl text-center my-10 text-white">Gen. M Partners is reshaping the landscape of how private and public market investments are offered to the public, providing investors with the opportunity to build a portfolio of on-chain financial products for the modern era.</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pb-10">
                  <div class="bg-gray-200 rounded p-4 text-3xl">
                    <div class="bg-transparent rounded mb-2 flex items-center justify-center">
                      <span class="text-white"> <FontAwesomeIcon icon={faCoins} size="3x" className="text-black pt-5" /></span>
                    </div>
                    <h3 class="font-bold m-10 text-center">Tokenization</h3>
                    <p className="m-10 text-lg">This fractional ownership of assets allows for greater liquidity, increased accessibility to a wider range of investors globally, and facilitates faster and cheaper transactions.</p>
                  </div>
                  <div class="bg-gray-200 rounded p-4 text-3xl">
                    <div class="bg-transparent rounded mb-2 flex items-center justify-center">
                    <span class="text-white"> <FontAwesomeIcon icon={faGear} size="3x" className="text-black pt-5" /></span>
                    </div>
                    <h3 class="font-bold m-10 text-center">Automation</h3>
                    <p className="m-10 text-lg">Smart contracts automate transactions and distributions by executing predefined conditions automatically. They streamline processes, enhance efficiency, and minimize the risk of errors and fraud in capital markets.</p>
                  </div>


                  <div class="bg-gray-200 rounded p-4 text-3xl">
                    <div class="bg-transparent rounded mb-2 flex items-center justify-center">
                    <span class="text-white"> <FontAwesomeIcon icon={faRobot} size="3x" className="text-black pt-5" /></span>
                    </div>
                    <h3 class="font-bold m-10 text-center">Artificial Intelligence</h3>
                    <p className="m-10 text-lg">AI and machine learning algorithms are being utilized to analyze vast amounts of data to identify investment opportunities, optimize trading strategies, and assess risk more accurately.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4">
            <div class="text-center"> 
              <div className="mb-4">           
                <h2 className="text-5xl text-center font-semibold text-black p-10 mt-10">Why Invest in a Tokenized Private Equity Fund?</h2>
                {/* <img src="/fund-table.jpg" alt="Why Invest in a Tokenized Private Equity Fund?" className="mx-auto my-0 w-[800px] max-w-full h-auto object-cover rounded" /> */}
                <video className='flex flex-col items-center h-full bg-opacity-50 bg-white text-white p-10 main-banner mb-20' controls controlsList="nofullscreen"> 
                <source src="SiteVid_1.mp4" type="video/mp4"/>
                </video>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
