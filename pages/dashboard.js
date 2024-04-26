// pages/dashboard.js
import React, { useState } from 'react';
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

export default function Dashboard({ darkMode, toggleDarkMode }) {

    const { currentUser } = useAuth(); // Get the current user from the custom hook
    const [error, setError] = useState(null);
    const router = useRouter();
    const [buyStatus,setBuyStatus] = useState(0);
    const [tokensToBuy,setTokensToBuy] = useState(1);
    const [dollarAmount,setDollarAmount] = useState(1500);

    const handleTrustSet = async () => {
        try {
          if (!currentUser) {
            setError('No user is currently signed in.');
            return;
          }
    
          const userId = currentUser.uid; // Get the user ID of the signed-in user
          console.log('current user id '+userId);
          const response = await axios.post('/api/settrustline', { userId }); // Send userId in the request body or as a query parameter
          if (response.data && response.data.next && response.data.next.always) {
            window.location.href = response.data.next.always; // Redirect user to the signInUrl
          } else {
            // Handle cases where the URL is not provided in the response
            setError('Failed to retrieve sign-in URL.');
          }
        } catch (error) {
          console.error('Sign in failed:', error);
          setError(error.message || 'Error occurred during sign-in.');
        }
    };

    const createOffer = async () => {
        setBuyStatus(1);
        try {
          if (!currentUser) {
            setError('No user is currently signed in.');
            return;
          }
    
          const userId = currentUser.uid; // Get the user ID of the signed-in user
          console.log('current user id '+userId);
          const tokenAmount = tokensToBuy;
          const response = await axios.post('/api/buy_tpef_dex', { userId,tokenAmount }); // Send userId in the request body or as a query parameter
          if (response.data && response.data.next && response.data.next.always) {
            window.location.href = response.data.next.always; // Redirect user to the signInUrl
          } else {
            // Handle cases where the URL is not provided in the response
            setError('Failed to retrieve sign-in URL.');
          }
        } catch (error) {
          console.error('Sign in failed:', error);
          setError(error.message || 'Error occurred during sign-in.');
        }
        
    };


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
                <h1 className="text-3xl font-semibold text-center mb-8">Dashboard</h1>
                
                {currentUser &&
                <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6 flex flex-col text-center justify-center">

                <p>This page will be made available once the fund is active. Thank you for your patience.</p>
                  

                </div>
                }
                {!currentUser &&
                <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6 flex flex-col text-center justify-center">
                  <div>
                    <p>Please login or create an account.</p>
                    <a href="/signin"><Button
                    style={{ backgroundColor: '#506cf4', color: 'white' }}
                    buttonType="filled" // Defines the type of the button
                    size="regular" // Size can be 'sm', 'regular', or 'lg'
                    rounded={false} // Defines if the button has rounded corners
                    block={false} // Defines if the button is a block level element
                    iconOnly={false} // Defines if the button should contain only an icon
                    ripple="light" // Ripple effect color (light/dark)
                    className="mx-auto my-0 mr-[10px] rounded button-class material-tailwind-button mt-[20px]"
                  >
                    Register/Login
                  </Button></a>
                  </div>
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
