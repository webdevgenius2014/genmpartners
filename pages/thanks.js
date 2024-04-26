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

    


  return (
    <>
      <Head>
        <title>Gen M Partners</title>
      </Head>
      <div className={`${darkMode ? 'dark' : ''} genMMain`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
          <div className="container mx-auto px-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 pt-10">

            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-semibold text-center mb-8">Thank You</h1>
                <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6 flex flex-col justify-center">
                    <div>
                        <p className="text-center">Transaction completed. Please check your wallet to view your balance.</p>
                    </div>
                </div>
            </div>

            </div>
          </div>
        </main>
      </div>
    </>
  )
}
