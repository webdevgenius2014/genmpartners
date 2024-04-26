// pages/dashboard.js
import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import EmptyCard from '../components/EmptyCard'
import styles from '../styles/Home.module.css';
//import '../styles/global.css'
import 'tailwindcss/tailwind.css';
import { Button, Alert, Spinner, Input } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../lib/firebase';
import { useRouter } from 'next/router';
import { signIn } from '../lib/firebase'; // Adjust this import path
import axios from 'axios';

export default function KYC({ darkMode, toggleDarkMode }) {

    const { currentUser } = useAuth(); // Get the current user from the custom hook
    const [error, setError] = useState(null);
    const router = useRouter();
    



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
                <h1 className="text-3xl font-semibold text-center mb-8">Thank You!</h1>
                
                {currentUser &&
                <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6 flex flex-col text-center justify-center">

                
                    <p>Please allow us to verify your identity. Once completed, you will be able to fully utilize our platform. Thanks for your patience.</p>

                </div>
                }
                {!currentUser &&
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 flex flex-col text-center justify-center">
                  <div><p>Please login.</p></div>
                </div>

                }


            </div>

            </div>
          </div>
        </main>
      </div>
    </>
  )
}
