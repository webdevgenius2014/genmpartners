import React, { useState } from 'react';
import { useRouter } from 'next/router';
// import { signIn, signUp, addUserToFirestore } from '../lib/firebase'; // Adjust this import path
import Head from 'next/head'
import Navbar from '../components/Navbar'

const SignIn = ({ darkMode, toggleDarkMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [address2, setAddress2] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [verified, setVerified] = useState(false);

  const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola",
    "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
    "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
    "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
    "Cameroon", "Central African Republic", "Chad", "Chile", "China",
    "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Costa Rica",
    "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic",
    "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor (Timor-Leste)",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea",
    "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland",
    "France", "Gabon", "Gambia", "Georgia", "Germany",
    "Ghana", "Greece", "Grenada", "Guatemala", "Guinea",
    "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary",
    "Iceland", "India", "Indonesia", "Iran", "Iraq",
    "Ireland", "Israel", "Italy", "Jamaica", "Japan",
    "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North",
    "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
    "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein",
    "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia",
    "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
    "Mauritius", "Micronesia", "Moldova", "Monaco", "Mongolia",
    "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia",
    "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua",
    "Niger", "Nigeria", "North Macedonia", "Norway", "Oman",
    "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay",
    "Peru", "Philippines", "Poland", "Portugal", "Qatar",
    "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
    "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
    "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
    "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
    "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname",
    "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan",
    "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago",
    "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
    "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan",
    "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen",
    "Zambia", "Zimbabwe"];


  const handleSignIn = async (event) => {
    event.preventDefault();
    setError(null);
    try {
      await signIn(signInEmail,signInPassword);
      router.push('/'); // Redirect to home page or dashboard
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    setError(null);
    try {
      const userCredential = await signUp(email, password);
      // Add user data to Firestore
      await addUserToFirestore(userCredential.user.uid, { firstName, lastName, email, address, address2, postalCode, city, country, verified });
      router.push('/kyc'); // Redirect to the home page
    } catch (error) {
      setError(error.message.replace(/Firebase:/g, ''));
    }
  };

  return (
    <>
      <Head>
        <title>Gen M Partners</title>
      </Head>
      <div className={`${darkMode ? 'dark' : ''} genMMain`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 flex flex-col justify-center max-w-[1000px] my-0 mx-auto">
        
          <div className="max-w-[500px] justify-center my-0 mx-auto pt-10">
          <h1 className="text-3xl font-semibold text-center mb-8">Login</h1>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-gray-600 text-sm font-bold">
                    Sign In
                  </h6>
                </div>

                {error && <div className="text-red-500 px-6 py-3 border-0 rounded relative mb-4 bg-red-100">
                  {error}
                </div>}

                <form onSubmit={handleSignIn} className="px-6">
                  <div className="relative w-full mb-3">
                    <input type="email" value={signInEmail} onChange={(e) => setSignInEmail(e.target.value)} placeholder="Email" className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" />
                  </div>
                  <div className="relative w-full mb-3">
                    <input type="password" value={signInPassword} onChange={(e) => setSignInPassword(e.target.value)} placeholder="Password" className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" />
                  </div>
                  <div className="text-center mt-6">
                    <button type="submit" className="bg-blue-500 text-white active:bg-blue-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full">
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="max-w-[700px] justify-center my-0 mx-auto pt-10">
          
            <div className="container mx-auto px-4 h-full flex justify-center items-center">
              <div className="w-full px-4">
              <h1 className="text-3xl font-semibold text-center mb-8">Register for Access</h1>
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-gray-600 text-sm font-bold">
                        Sign Up
                      </h6>
                    </div>

                    {error && <div className="text-red-500 px-6 py-3 border-0 rounded relative mb-4 bg-red-100">
                      {error}
                    </div>}

                    <form onSubmit={handleSignUp} className="px-6">
                      <div className="relative w-full mb-3">
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" className="required border-0 px-3 py-3 bold-placeholder placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" />
                      </div>
                      <div className="relative w-full mb-3">
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" className="required bold-placeholder border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" />
                      </div>
                      <div className="relative w-full mb-3">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="required bold-placeholder border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" />
                      </div>
                      <div className="relative w-full mb-3">
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="required bold-placeholder border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" />
                      </div>
                      <div className="relative w-full mb-3">
                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address (Line 1)" className="required bold-placeholder border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" />
                      </div>
                      <div className="relative w-full mb-3">
                        <input type="text" value={address2} onChange={(e) => setAddress2(e.target.value)} placeholder="Address (Line 2)" className="required bold-placeholder border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" />
                      </div>
                      <div className="relative w-full mb-3">
                        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" className="required bold-placeholder border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" />
                      </div>
                      <div className="relative w-full mb-3">
                        <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} placeholder="Postal Code" className="required bold-placeholder border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" />
                      </div>
                      <div className="relative w-full mb-3">
                        <select value={country} onChange={(e) => setCountry(e.target.value)} className="required bold-placeholder border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full">
                          <option value="">Select a country</option>
                          {countries.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                      <div className="text-center mt-6">
                        <button type="submit" className="bg-blue-500 text-white active:bg-blue-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full">
                          Sign Up
                        </button>
                      </div>
                    </form>
                  </div>
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