// components/WalletConnect.js
import React, { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'; // Assuming you are using Next.js

const WalletConnect = () => {
  const router = useRouter();

  useEffect(() => {
    axios.get('/api/generate-challenge')
      .then(response => {
        const data = response.data;
        if (data && data.next && data.next.always) {
          // Redirect to XUMM provided URL
          window.location.href = data.next.always;
        } else {
          console.error('Redirect URL not found in response');
        }
      })
      .catch(error => console.error('Error fetching sign-in URL:', error));
  }, []);

  // Optional: Logic to check sign-in status
  // Redirect to /account if sign-in is successful

  return (
    <div>
      <p>Redirecting to XUMM for authentication...</p>
    </div>
  );
};

export default WalletConnect;