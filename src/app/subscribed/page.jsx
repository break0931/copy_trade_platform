'use client'
import React, { useState,useEffect } from 'react'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Subscribed() {
    const [selectedStatus, setSelectedStatus] = useState("All"); // ค่าเริ่มต้นเป็น Active

    const data = [
        {
            accountName: "sawaddeekub",
            botName: "The OA",
            symbol: "XAUUSD",
            todayPNL: 666,
            cumulativePNL: 19000,
            unrealizedPNL: 33.45,
            status: "Active",
            balance: 75600,
            strategyName: "NEAT trend volume XAUUSD"
        },
        {
            accountName: "sawaddeekub",
            botName: "Bot 2",
            symbol: "EURUSD",
            todayPNL: -50,
            cumulativePNL: 15000,
            unrealizedPNL: -10.30,
            status: "Inactive",
            balance: 50000,
            strategyName: "RSI Scalper"
        },
        {
            accountName: "exampleuser",
            botName: "Bot 1",
            symbol: "GBPUSD",
            todayPNL: 120,
            cumulativePNL: 12000,
            unrealizedPNL: 20.10,
            status: "Active",
            balance: 60000,
            strategyName: "MACD Strategy"
        },
        {
            accountName: "exampleuser",
            botName: "Bot 2",
            symbol: "AUDUSD",
            todayPNL: -200,
            cumulativePNL: 5000,
            unrealizedPNL: -5.50,
            status: "Inactive",
            balance: 30000,
            strategyName: "Bollinger Band Strategy"
        },
        {
            accountName: "testaccount",
            botName: "Bot 1",
            symbol: "USDJPY",
            todayPNL: 400,
            cumulativePNL: 23000,
            unrealizedPNL: 15.00,
            status: "Active",
            balance: 80000,
            strategyName: "Trend Following"
        },
        {
            accountName: "testaccount",
            botName: "Bot 2",
            symbol: "NZDUSD",
            todayPNL: -100,
            cumulativePNL: 10000,
            unrealizedPNL: -5.00,
            status: "Inactive",
            balance: 25000,
            strategyName: "EMA Strategy"
        }
    ];

    const filteredStatus =
    selectedStatus === "All"
      ? data
      : data.filter((data) => data.status === selectedStatus);


    // Function to render PNL color based on positive or negative value
    const renderPNLColor = (value) => {
        return value >= 0 ? 'text-green-500' : 'text-red-500'; // Green for positive, Red for negative
    }

    // Function to render Status color based on active or inactive
    const renderStatusColor = (status) => {
        return status === "Active" ? 'text-green-500' : 'text-gray-500'; // Green for active, Gray for inactive
    }



    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
        const timer = setTimeout(() => setAnimate(false), 300); // Remove animation after 300ms
        return () => clearTimeout(timer);
    }, [selectedStatus]);
    return (
        <Container>
            <Navbar />
            <div className='min-h-screen mx-4 md:mx-20 xl:mx-80'>
                <div className='flex justify-between'>
                    <div className='head_topic'>Subscribed</div>
                    <div className='flex items-center'>
                        <select
                            className="p-2 border rounded-md"
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.target.value)}

                        >
                            <option value="All">All</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>
                </div>
                <div className={`space-y-6 transition-opacity duration-500  mb-12 ${animate ? "opacity-0" : "opacity-100"}`}>
                    {filteredStatus.map((bot, idx) => (
                        
                        <div key={idx} className='w-full border space-y-2 p-4 rounded-xl cursor-pointer hover:scale-105 duration-300 hover:border-brandColor bg-white'>
                            
                            <div className='font-bold text-xl'>{bot.botName}</div>
                            <div className='flex justify-between'>
                                <div>
                                    <div className='text-gray-600'>Account Name</div>
                                    <div className='font-bold'>{bot.accountName}</div>
                                </div>
                                <div>
                                    <div className='text-gray-600'>Symbol</div>
                                    <div className='font-bold'>{bot.symbol}</div>
                                </div>
                                <div>
                                    <div className='text-gray-600'>Today's PNL</div>
                                    <div className={`font-bold ${renderPNLColor(bot.todayPNL)}`}>${bot.todayPNL}</div>
                                </div>
                                <div>
                                    <div className='text-gray-600'>Cumulative PNL</div>
                                    <div className={`font-bold ${renderPNLColor(bot.cumulativePNL)}`}>${bot.cumulativePNL}</div>
                                </div>
                                <div>
                                    <div className='text-gray-600'>Unrealized PNL</div>
                                    <div className={`font-bold ${renderPNLColor(bot.unrealizedPNL)}`}>${bot.unrealizedPNL}</div>
                                </div>
                                <div>
                                    <div className='text-gray-600'>Status</div>
                                    <div className={`font-bold ${renderStatusColor(bot.status)}`}>{bot.status}</div>
                                </div>
                            </div>
                            <div className=''>
                                <div className='flex'>
                                    <div className='text-gray-600'>Balance :</div>
                                    <div className='font-bold'>${bot.balance}</div>
                                </div>
                                <div className='flex'>
                                    <div className='text-gray-600'>Strategy Name :</div>
                                    <div className='font-bold'>{bot.strategyName}</div>
                                </div>
                            </div>
                           
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </Container>
    );
}

export default Subscribed;
