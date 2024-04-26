import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'
import Navbar from '../components/Navbar'
import WalletConnect from '../components/WalletConnect';
import axios from 'axios';
import { Button } from "@material-tailwind/react"; 

const SignIn = ({ darkMode, toggleDarkMode }) => {

  const [signInUrl, setSignInUrl] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

 

  const handleSignIn = async () => {
    try {
      if (!currentUser) {
        setError('No user is currently signed in.');
        return;
      }

      const userId = currentUser.uid; // Get the user ID of the signed-in user
      console.log('current user id '+userId);
      const response = await axios.post('/api/signin', { userId }); // Send userId in the request body or as a query parameter
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
            <div className="container mx-auto px-4 h-full flex justify-center items-center">
            <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                    <h6 className="text-gray-600 text-sm font-bold">
                        Connect Wallet
                    </h6>
                    </div>

                    {error && <div className="text-red-500 px-6 py-3 border-0 rounded relative mb-4 bg-red-100">
                    {error}
                    </div>}

                    <div>
                      
                      <Button
                  style={{ backgroundColor: '#33aef6', color: 'white' }}
                  buttonType="filled" // Defines the type of the button
                  size="regular" // Size can be 'sm', 'regular', or 'lg'
                  rounded={false} // Defines if the button has rounded corners
                  block={false} // Defines if the button is a block level element
                  iconOnly={false} // Defines if the button should contain only an icon
                  ripple="light" // Ripple effect color (light/dark)
                  onClick={handleSignIn}
                  className="text-2xl"
                  >
                  Sign in with XUMM
                  </Button>
                      {signInUrl && <a href={signInUrl} target="_blank">Sign in using XUMM</a>}
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default SignIn;
