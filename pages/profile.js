// pages/profile.js
import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import EmptyCard from '../components/EmptyCard'
import styles from '../styles/Home.module.css';
//import '../styles/global.css'
import 'tailwindcss/tailwind.css';
import { Button, Alert, Spinner, Input } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useAuth, fetchUserData } from '../lib/firebase';
import { useRouter } from 'next/router';
import { signIn } from '../lib/firebase'; // Adjust this import path
import axios from 'axios';

export default function Profile({ darkMode, toggleDarkMode }) {

    const { currentUser } = useAuth(); // Get the current user from the custom hook
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const router = useRouter();
    const [buyStatus, setBuyStatus] = useState(0);
    const [tokensToBuy, setTokensToBuy] = useState(1);
    const [dollarAmount, setDollarAmount] = useState(1500);
    const [currentBalance,setCurrentBalance] = useState('');
    const [currentXRPBalance,setCurrentXRPBalance] = useState('');

    
    useEffect(() => {
        //console.log('test!');
        if (currentUser) {
            fetchUserData(currentUser.uid)
                .then((data) => {
                    
                    setUserData(data);
                    //getBalances();
                })
                .catch((error) => {
                    console.error("Error fetching user data: ", error);
                });
        }
    }, [currentUser]);

    useEffect(() => {
        // This effect will now run when userData changes, ensuring that it is loaded
        if (userData && userData.walletAddress) {
            getBalances();
        }
    }, [userData]);


    const getBalances = async () => {

        // Handle form submission logic here
        try {
            const response = await fetch('/api/get_user_balances', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    walletAddress: userData.walletAddress
                }),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const result = await response.json();
            console.log('Response:', result);
            setCurrentBalance(result.tpefBalance);
            setCurrentXRPBalance(result.xrpBalance);
            // Handle success here (e.g., showing a success message)
        } catch (error) {

            // Handle errors here (e.g., showing an error message)
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
                                <h1 className="text-3xl font-semibold text-center mb-8">My Profile</h1>

                                {currentUser && (
                                    userData ? (
                                        userData.verificationStatus === "approved" ? (
                                            // JSX for approved users
                                            <div className="bg-gray-100 p-6 max-w-2xl mx-auto rounded-lg shadow-lg mt-10">
                                                <div className="flex items-center space-x-4 p-4">

                                                    <div className="flex-grow">
                                                        <h2 className="text-xl font-semibold">{userData.firstName} {userData.lastName}</h2>
                                                        <p className="text-sm text-gray-600">{userData.email}</p>
                                                        <p className="text-sm text-gray-600">{userData.address}, {userData.city}, {userData.country}</p>
                                                        <p className="text-sm text-gray-600">XRP Wallet: {userData.walletAddress}</p>
                                                        <p className="text-sm text-gray-600">XRP Balance: {currentXRPBalance}</p>
                                                        <p className="text-sm text-gray-600">$TPEF Balance: {currentBalance}</p>
                                                    </div>
                                                </div>
                                                <div className="border-t border-gray-300 mt-4 pt-4">
                                                    <h3 className="text-lg font-semibold text-gray-800">Profile Details</h3>
                                                    <div className="flex flex-wrap -mx-4 mt-4">
                                                        <div className="w-full md:w-1/2 px-4 py-2">
                                                            <label className="text-gray-600" htmlFor="firstName">First Name</label>
                                                            <div className="p-2 bg-white rounded-lg shadow-sm">
                                                                <p id="firstName" className="text-gray-800">{userData.firstName}</p>
                                                            </div>
                                                        </div>
                                                        <div className="w-full md:w-1/2 px-4 py-2">
                                                            <label className="text-gray-600" htmlFor="lastName">Last Name</label>
                                                            <div className="p-2 bg-white rounded-lg shadow-sm">
                                                                <p id="lastName" className="text-gray-800">{userData.lastName}</p>
                                                            </div>
                                                        </div>
                                                        <div className="w-full md:w-1/2 px-4 py-2">
                                                            <label className="text-gray-600" htmlFor="email">Email</label>
                                                            <div className="p-2 bg-white rounded-lg shadow-sm">
                                                                <p id="email" className="text-gray-800">{userData.email}</p>
                                                            </div>
                                                        </div>
                                                        <div className="w-full md:w-1/2 px-4 py-2">
                                                            <label className="text-gray-600" htmlFor="address">Address</label>
                                                            <div className="p-2 bg-white rounded-lg shadow-sm">
                                                                <p id="address" className="text-gray-800">{userData.address}, {userData.city}, {userData.country}</p>
                                                            </div>
                                                        </div>
                                                        <div className="w-full md:w-1/2 px-4 py-2">
                                                            <label className="text-gray-600" htmlFor="xrpaddress">XRP Wallet</label>
                                                            <div className="p-2 bg-white rounded-lg shadow-sm">
                                                                <p id="xrpaddress" className="text-sm text-gray-800">{userData.walletAddress}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            // JSX for when userData.verificationStatus is not "approved"
                                            <div>Verification pending or not approved</div>
                                        )
                                    ) : (
                                        // JSX for when userData is not available
                                        <div>Loading...</div>
                                    )
                                )}


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
