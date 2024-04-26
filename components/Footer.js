// components/Footer.js
import React, { useState } from 'react';
import Image from 'next/image';


const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      // Add logic to handle the email subscription here
      console.log('Subscribed with:', email);
      // Reset the email field after submission
      setEmail('');
  };

    return (
      <>
      <footer className="bg-gray-200 text-black mx-auto">
        <div className="container w-full px-4 flex flex-wrap items-center justify-between">
          {/* Footer Content */}
          <div className="flex justify-center p-10">
            <div className="w-full">
              <h5 className="uppercase mb-6 font-bold">Fine Print</h5>
              <ul className="list-none mb-6">
                <li className="mt-2">
                  <a href="#!" className="text-black hover:text-gray-500">FAQ</a>
                </li>
                <li className="mt-2">
                  <a href="#!" className="text-black hover:text-gray-500">Terms & Conditions</a>
                </li>
                <li className="mt-2">
                  <a href="#!" className="text-black hover:text-gray-500">Privacy Policy</a>
                </li>
                <li className="mt-2">
                  <a href="#!" className="text-black hover:text-gray-500">Legal Structure</a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-auto md:mx-20">
              <h5 className="uppercase mb-4 font-bold">Links</h5>
              <ul className="list-none mb-6">
                <li className="mt-2">
                  <a href="/leadership" className="text-black hover:text-gray-500">About Us</a>
                </li>
                <li className="mt-2">
                  <a href="https://gen-m-partners.gitbook.io/documents" className="text-black hover:text-gray-500">Docs</a>
                </li>
                <li className="mt-2">
                  <a href="/leadership" className="text-black hover:text-gray-500">Contact</a>
                </li>
              </ul>
            </div>
            {/* Add more columns as needed */}
          </div>
          <div className="flex md:justify-end">
            <a href="https://www.linkedin.com/company/gen-m-partners" target="_blank" rel="noopener noreferrer" className="mx-2">
            <Image 
              src="/linkedin.png"  // Path to your image
              alt="Follow us on X"  // Alt text for the image
              width={50}   // Width of the image in pixels
              height={50}  // Height of the image in pixels
            />
            </a>
            <a href="https://www.twitter.com/GenMPartners" target="_blank" rel="noopener noreferrer" className="mx-2">
            <Image 
              src="/x.png"  // Path to your image
              alt="Follow us on X"  // Alt text for the image
              width={50}   // Width of the image in pixels
              height={50}  // Height of the image in pixels
            />
            </a>
          </div>
          <div className="w-full md:w-auto text-center md:text-right">
              <p className="text-center text-xl pb-2">Stay updated</p>
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <input 
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gmp-lightblue text-black"
                    required
                />
                <button 
                    type="submit"
                    className="px-4 py-2 bg-gmp-lightblue text-black rounded-md hover:bg-gmp-darkblue"
                >
                    Subscribe
                </button>
            </form>
          </div>
        </div>
      </footer>
      <div className="bg-gray-200 text-black py-8 border-black border">
        <div className="container mx-auto px-4 flex justify-center">
          <p className="text-black text-center text-lg">&copy; {new Date().getFullYear()} Gen M Partners. All rights reserved.</p>
        </div>
      </div>
      </>
    );
  };
  
  export default Footer;
  