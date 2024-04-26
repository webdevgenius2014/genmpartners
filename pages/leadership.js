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
        <main className="bg-white mx-auto">
          <div className="container mx-auto px-4 py-4 font-helvetica w-full">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 pt-10 w-full">

            <div className="from-gmp-purple w-full p-8">
              <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="about-us flex flex-col justify-center">
                  <h2 className="text-5xl font-semibold mb-12 text-center">About Us</h2>
                  <p className="text-center text-xl bg-gray-200 shadow-sm rounded-lg p-10">
                  Gen. M partners is a firm specializing in issueing security tokens. Our primary focus is issueing yield-bearing real-world asset backed digital securities via security token offerings. All financial instruments issued by GMP will be built on the XRP Ledger.
                  </p>
                </div>
                <div className="photo">
                  <img 
                    src="about-us.jpg" 
                    alt="Gen M Partners - Tokenized Private Equity" 
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className='flex justify-center' >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-[1200px] w-full p-4">
              <button class="p-3 bg-gradient-to-br from-black to-gray-800 text-base font-medium rounded-md text-black flex items-center justify-center">
                <span class="ml-2 text-white">Accessible for anyone to invest in private markets</span>
              </button>
              <button class="p-3 bg-gradient-to-br from-black to-gray-800 text-base font-medium rounded-md text-black flex items-center justify-center">
                <span class="ml-2 text-white">Profit-sharing model</span>
              </button>
              <button class="p-3 bg-gradient-to-br from-black to-gray-800 text-base font-medium rounded-md text-black flex items-center justify-center">
                <span class="ml-2 text-white">Access to secondary market liquidity</span>
              </button>
              <button class="p-3 bg-gradient-to-br from-black to-gray-800 text-base font-medium rounded-md text-black flex items-center justify-center">
                <span class="ml-2 text-white">Earn dividend by simply holding $TPEF</span>
              </button>
              </div>
            </div>

            <div className="container mx-auto p-8">
                <h2 className="text-5xl font-semibold mb-12 text-center">Leadership</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {leadershipTeam.map((member, index) => (
                    <div key={index} className="bg-gray-200 shadow-sm rounded-lg p-6 text-center flex flex-col items-center">
                        <h2 className="font-bold text-xl">{member.title}</h2>
                        <br/>
                        <div className="icon-wrapper">
                          <img src="logo.png" alt="Company Logo" className="h-14 " />
                        </div>
                        <p className="text">{member.name}</p>
                        <a href={`mailto:${member.email}`} className="text-blue-600 hover:text-blue-800">{member.email}</a>
                        <a href={member.linkedInUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
                    </div>
                    ))}
                </div>
                <p className="hiring-notice text-center w-[800px] max-w-full mx-auto my-0 p-10 mt-10 bg-gradient-to-br from-black to-gray-800 text-white rounded-lg shadow-sm">
                  We are currently in the process of hiring for several key positions, contact us. CCO, CFO, Head of Risk, Risk Manager, Market Analyst/PR Specialist, Legal & Software Developers
                </p>
            </div>

            </div>
          </div>
        </main>
      </div>
    </>
  )
}
