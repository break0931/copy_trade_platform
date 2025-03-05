'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { PieChart, LineChart, ChevronDown, DollarSign, CreditCard, User, LogOut, LogIn, Menu, X } from 'lucide-react';

const NavigationBar = () => {
  const { data: session } = useSession(); // Get session data
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Strategy', icon: <PieChart className="h-5 w-5" />, link: "/Strategy" },
    { name: 'Dashboard', icon: <LineChart className="h-5 w-5" />, link: "/dashboard" },
    { name: 'Subscribed', icon: <ChevronDown className="h-5 w-5" />, link: "/subscribed" },
    { name: 'PriceChart', icon: <DollarSign className="h-5 w-5" />, link: "/pricechart" },
    { name: 'Bill', icon: <CreditCard className="h-5 w-5" />, link: "/bill" },
    { name: 'Profile', icon: <User className="h-5 w-5" />, link: "/profile" },
  ];

  return (
    <nav className="bg-gray-900 border-b border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">CTRLC</span>

            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navItems.map((item) => (
              // flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800
              <Link key={item.name} href={item.link} className=" flex items-center px-3 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 border-b-2 border-cyan-400">
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </Link>
            ))}

            {/* Show Logout if logged in, otherwise show Login */}
            {session ? (
              <button onClick={() => signOut()} className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-red-400 hover:text-white hover:bg-gray-800">
                <LogOut className="h-5 w-5 mr-2" />
                Logout
              </button>
            ) : (
              <Link href="/api/auth/signin" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-green-400 hover:text-white hover:bg-gray-800">
                <LogIn className="h-5 w-5 mr-2" />
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 border-l-2 border-cyan-400"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-800`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link key={item.name} href={item.link} className="flex items-center px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 border-l-2 border-cyan-400">
              <span className="mr-2">{item.icon}</span>
              {item.name}
            </Link>
          ))}

          {/* Show Logout if logged in, otherwise show Login */}
          {session ? (
            <button onClick={() => signOut()} className="flex items-center px-3 py-2 rounded-md text-base font-medium text-red-400 hover:text-white hover:bg-gray-700">
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </button>
          ) : (
            <Link href="/api/auth/signin" className="flex items-center px-3 py-2 rounded-md text-base font-medium text-green-400 hover:text-white hover:bg-gray-700">
              <LogIn className="h-5 w-5 mr-2" />
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
