import React, { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('home');

  const menuItems = [
    { name: "Leadership", value: "home" },
    { name: "Dashboard", value: "stake" },
    { name: "Buy $TPEF", value: "note" },
    { name: "Corporate Services", value: "capital" },
    { name: "News", value: "web3" }
  ];

  return (
    <nav className="bg-white border-b border-gray-300">
      <div className="max-w-screen-lg mx-auto px-4 flex justify-between items-center py-3">
        <div className="flex space-x-4">
          {menuItems.map((item) => (
            <a
              key={item.value}
              href="#"
              onClick={() => setActiveTab(item.value)}
              className={`text-sm font-medium px-3 py-2 ${
                activeTab === item.value
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-gray-700 hover:text-blue-500'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          {/* Other components like a toggle button or user menu can go here */}
        </div>
      </div>
    </nav>
  );
}
