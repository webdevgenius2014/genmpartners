import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import { useAuth } from '../lib/firebase';

const WalletConnect = () => {
  const [challenge, setChallenge] = useState('');
  const [challengeId, setChallengeId] = useState('');
  const [isChallengeSigned, setIsChallengeSigned] = useState(false);
  const { currentUser, loading: authLoading } = useAuth(); // Assuming useAuth hook provides a loading state

  console.log("Current User:", currentUser);
  console.log("Authentication Loading:", authLoading);

  useEffect(() => {
    if (!authLoading && currentUser) {
      const userId = currentUser.uid;
      fetch(`/api/generate-challenge?userId=${userId}`)
        .then(response => response.json())
        .then(data => {
          setChallenge(data.challenge);
          setChallengeId(data.id);
        })
        .catch(error => console.error('Error generating challenge:', error));
    }
  }, [currentUser, authLoading]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (challengeId) {
        fetch('/api/check-challenge-status', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ challengeId }),
        })
        .then(response => response.json())
        .then(data => {
          if (data.status === 'signed') {
            setIsChallengeSigned(true);
            clearInterval(intervalId);
            // Handle the signed challenge
          }
        })
        .catch(error => console.error('Error checking challenge status:', error));
      }
    }, 5000); // Poll every 5 seconds

    return () => clearInterval(intervalId);
  }, [challengeId]);

  if (authLoading) {
    return <div>Loading...</div>;
  }

  if (!currentUser) {
    return <div>Please log in to connect your wallet.</div>;
  }

  return (
    <div>
      {challenge && <QRCode value={challenge} />}
      {isChallengeSigned ? <p>Challenge signed!</p> : <p>Waiting for challenge to be signed...</p>}
    </div>
  );
};

export default WalletConnect;