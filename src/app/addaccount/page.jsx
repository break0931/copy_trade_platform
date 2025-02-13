'use client'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Container from '../components/Container'
import Link from 'next/link'
import SetupGuide from '../components/SetupGuide'
function Addaccount() {
  const [isReal, setIsReal] = useState(true); // Default to Real

  const handleToggle = () => {
    setIsReal(!isReal);
  };

  const [setupGuide, setSetupGuide] = useState(false);

  const [amount, setAmount] = useState('');
  const [leverage, setLeverage] = useState('');
  const handleSubmit = () => {
    // Check if the amount is within the range
    if (amount < 100 || amount > 100000) {
      alert('Amount must be between 100 and 100000');
      return;
    }

    if (leverage < 1 || leverage > 1000) {
      alert('leverage must be between 1 and 1000');
      return;
    }

    // Proceed with the submission logic
    alert('Account created successfully!');
    // Add any other submission logic here
  };
  return (
    <Container>
      <Navbar />
      <div className='min-h-screen mx-4 md:mx-20 xl:mx-40 flex justify-center'>
        {setupGuide && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              {/* Modal Header */}
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold">Setup Guide for EA Metatrader5</h2>
                <button onClick={() => setSetupGuide(false)} className="text-gray-600 hover:text-gray-900">
                  ✖
                </button>
              </div>

              {/* Modal Content */}
              <p className="mt-3">1. Download the <b>ctrlcAPI.ex5</b> file from our website.</p>
              <p>2. Open MetaTrader 5 and go to <b>File → Open Data Folder</b>.</p>
              <p>3. Place the <b>ctrlcAPI.ex5</b> file in the <b>MQL5/Experts</b> folder.</p>
              <p>4. Restart MetaTrader 5 and attach the EA to your chart.</p>
              <p>5. Enable <b>Algo Trading</b> and check for successful connection.</p>

              {/* Close Button */}
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setSetupGuide(false)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
        <div className='w-[32rem] border rounded-xl p-12 m-4 text-md mb-4 h-max space-y-4 bg-white'>
          <h3 className='head_topic' >Add a Metatrader5 Account</h3>

          {/* Toggle Button */}
          <div className={`relative w-full p-4 flex items-center rounded-2xl border border-gray-300 cursor-pointer bg-gray-300 transition-all duration-300  ${setupGuide ? "opacity-0 " : "opacity-100 z-10"}`}   style={{ transition: setupGuide ? 'none' : 'all 0.3s ease-in-out' }} onClick={!setupGuide ? handleToggle : undefined} >
            {/* Sliding Background */}
            <div className={`absolute top-0 left-0 h-full w-1/2 rounded-2xl transition-all duration-300 bg-white ${isReal ? "translate-x-0" : "translate-x-full"}`} style={{ display: setupGuide ? 'none' : 'block' }}></div>
            {/* Text Labels */}
            <div className="relative flex w-full justify-between px-4 text-lg font-bold z-10">
              <span className={isReal ? "text-black" : "text-white"}>Real</span>
              <span className={isReal ? "text-white" : "text-black"}>Demo</span>
            </div>
          </div>

          {/* Real Account Fields */}
          {isReal && (
            <>
              <p className='text-xs text-gray-600'>
                To connect your MT5 account to CTRLC, download and set up our ctrlcAPI.
                Follow the setup guide below to securely link your MT5 account.
              </p>
              <div className='w-full bg-brandColor p-2 text-white rounded-lg text-center cursor-pointer'>
                Download ctrlcAPI
              </div>
              <div className='text-xs text-blue-500 underline cursor-pointer' onClick={() => setSetupGuide(true)}>
                How to setup EA Metatrader5?
              </div>
              <h1 className='font-bold'>Token</h1>
              <input type='text' className='w-full p-2 border rounded-lg' disabled='True' autoComplete='on' />
              <div className='w-full bg-brandColor p-2 text-white rounded-lg text-center cursor-pointer'>
                Generate Token
              </div>
            </>
          )}

          {/* Common Fields for Both Real & Demo */}

          {/* Demo-Specific Fields */}
          {!isReal && (
            <>
              <h1 className='font-bold'>Amount</h1>
              <input type='number' placeholder='100-100000' className='w-full p-2 border rounded-lg hover:border-2 hover:border-brandColor focus:outline-brandColor' onChange={(e) => setAmount(e.target.value)} />

              <h1 className='font-bold'>Leverage</h1>
              <input type='number' className='w-full p-2 border rounded-lg hover:border-2 hover:border-brandColor focus:outline-brandColor' onChange={(e) => setLeverage(e.target.value)} />
            </>
          )}
          <h1 className='font-bold'>Create Account Name</h1>
          <input type='text' maxLength='20' className='w-full p-2 border rounded-lg hover:border-2 hover:border-brandColor focus:outline-brandColor' />

          {/* Create Account Button */}
          <Link href='/dashboard'>
            <div className='w-full bg-gray-300 hover:bg-gray-600 duration-300 p-4 text-white rounded-lg text-center cursor-pointer mt-4' onClick={handleSubmit}>
              Create Account
            </div>

          </Link>

        </div>
      </div>
      <Footer />
    </Container>
  )
}

export default Addaccount
