 
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Router from 'next/router'
import Image from 'next/image';
import ActionButton from './ActionButton';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userData, setUserData] = useState(null);  
  const data = [
    {
      label: "Home",
      value: "home",
      desc: ``,
    },
    {
      label: "Dashboard",
      value: "dashboard",
      desc: ``,
    },
    {
      label: "Corporate Services",
      value: "corporate_services",
      desc: ``,
    },
    {
      label: "Product",
      value: "product",
      desc: ``,
    },
    {
      label: "Docs",
      value: "docs",
      desc: ``,
    },
    {
      label: "News",
      value: "news",
      desc: ``,
    },
    {
      label: "Reports",
      value: "reports",
      desc: ``,
    },
  ];

  const menuItems = [
    { name: "Leadership", url: "/leadership" },
    { name: "Product", url: "/product" },
    { name: "Corporate Services", url: "/corporate_services" },
    { name: "Docs", url: "https://gen-m-partners.gitbook.io/documents"}
  ];

  const [activeTab, setActiveTab] = useState(data[0].value);
  const [openNavbar, setOpenNavbar] = React.useState(false);

  // Effect to apply the theme on initial load
  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
    if (isDarkMode) document.documentElement.classList.add('dark');


    
  }, []);

  // Function to toggle the theme
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode ? 'true' : 'false');
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut();
      // Handle post-logout actions, like redirecting to the login page
      // e.g., using React Router: history.push('/login');
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };
  return (
    <nav className="bg-white sm:bg-transparent dark:bg-gray-800 border-b-0 border-gray-100 dark:border-gray-700 mt-5 sm:absolute sm:top-5 sm:left-0 sm:right-0 sm:mx-auto">
      {/* Top menu */}
      <div className="container relative mx-auto">       
        <Link href="/" className="flex justify-center w-full relative text-xl font-semibold text-gray-800 dark:text-white lg:relative lg:w-auto">
          <Image
            src="/genmpartners.png"
            alt="Genmpartners"
            width={113}
            height={67}
          />
        </Link>
        <div className='flex items-center space-x-[.625rem] justify-end sm:absolute sm:right-0 sm:top-0 sm:bottom-0 sm:my-auto'>
          <ActionButton btnType="filled" btnText="Login" btnAction={()=>Router.push('/signin')} />
          <ActionButton btnType="bordered" btnText="Signup" btnAction={()=>Router.push('/signup')} />
          {/* <a href="/signin">
            <Button
              style={{ backgroundColor: '#506cf4', color: 'white' }}
              buttonType="filled" // Defines the type of the button
              size="regular" // Size can be 'sm', 'regular', or 'lg'
              rounded={false} // Defines if the button has rounded corners
              block={false} // Defines if the button is a block level element
              iconOnly={false} // Defines if the button should contain only an icon
              ripple="light" // Ripple effect color (light/dark)
              className="hidden md:block mr-[10px] rounded button-class material-tailwind-button"
            >Register/Login</Button>
          </a>
          <a href="/signin"><Button
            style={{ backgroundColor: '#2c3131', color: 'white' }}
            buttonType="filled" 
            size="regular" 
            rounded={false} 
            block={false} 
            iconOnly={false} 
            ripple="light" 
            className="rounded button-class material-tailwind-button"
            >Enter Platform</Button>
          </a> */}
        </div> 
      </div> 
      <div className="hidden md:block bg-white container mx-auto pt-4 mt-0.5">
        <ul className="flex items-end justify-between">
          {menuItems.map((item, index) => (
            <li key={index} className="">
              <div className="relative group flex justify-center min-w-44 lg:min-w-[12.813rem]">
                  <div className='w-full text-center'>
                    <Link href={item.url} className="text-15xl font-bold text-black transition duration-300 ease-in-out uppercase">
                      {item.name}
                    </Link>
                    <div className="h-[1px] bg-primary-300 w-full mt-15 group-hover:w-0 transition-all duration-300"></div>
                  </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile Menu Button */}
      <div className="md:hidden container mx-auto px-6 py-3 flex justify-between items-center bg-white border-t-2">     
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="text-blue-500 transition duration-300"
            aria-controls="mobile-menu"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            {/* Icon for menu button */}
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                // Icon for X (close)
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Icon for menu (hamburger)
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 pl-2">
          <a href="/signin" className="block pt-2 pl-5 pb-2 text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 border-b-2 border-blue-500">Register/Login</a>
          <a href="/leadership" className="block pt-2 pl-5 pb-2 text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 border-b-2 border-blue-500">Leadership</a>
          <a href="/product" className="block pt-2 pl-5 pb-2 text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 border-b-2 border-blue-500">Product</a>
          <a href="/corporate_services" className="block pt-2 pl-5 pb-2 text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 border-b-2 border-blue-500">Corporate Services</a>
          <a href="https://gen-m-partners.gitbook.io/documents" className="block pt-2 pl-5 pb-2 text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 border-b-2 border-blue-500">Docs</a>
        </div>
      </div>
    </nav>
  )
}


