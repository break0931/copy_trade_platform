'use client'

import React , {useState} from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import { useSession } from 'next-auth/react';
import LineChart from '../components/LineChart';
import Link from 'next/link';
import Select from "react-select";


function Strategy() {
    const filters = ['Win rate', 'RR ratio', 'PNL', 'Traders'];
    const [activeFilter, setActiveFilter] = useState(null);

    const Time = [
     
        { value: 'All', label: 'All' },
         
          
        {
            label: 'MINUTES',
            options: [
                { value: '1m', label: '1 minute' },
                { value: '5m', label: '5 minutes' },
                { value: '15m', label: '15 minutes' },
            ],
        },
        {
            label: 'HOURS',
            options: [
                { value: '1 hour', label: '1 hour' },
                { value: '2 hours', label: '2 hours' },
                { value: '4 hours', label: '4 hours' },
            ],
        },
        {
            label: 'DAYS',
            options: [
                { value: 'day', label: 'day' },
                { value: 'week', label: 'week' },
                { value: 'month', label: 'month' },
            ],
        },
    ];
    const Timeframes = [
        { value: 'All', label: 'All' },
        { value: '5m', label: '5 minutes' },
        { value: '15m', label: '15 minutes' },
        { value: '1h', label: '1 hour' },
        { value: '4h', label: '4 hours' },
        { value: '1d', label: '1 day' },
    ];
    const Symbols = [
        { value: 'All', label: 'All' },
        { value: 'XAUUSD', label: 'XAUUSD' },
        { value: 'USDJPY', label: 'USDJPY' },
        { value: 'GBPUSD', label: 'GBPUSD' },
    ];




    const { data: session } = useSession();
  
    return (
        <Container>
            <Navbar session={session} />
            <div className='flex-grow justify-center flex min-h-screen'>
                <div className='w-3/4'>
                    <div className=''>
                        <h3 className='head_topic'>Copy Trading</h3>
                        <div className='flex flex-wrap gap-4'>
                            <div className='flex items-center'>
                                <h3 className='mx-2'>Timeframe</h3>
                                <Select
                                    options={Time}
                                    defaultValue={Time[0]}
                                    placeholder="Select an option"
                                    className='border-0 w-48'
                                // onChange={(selectedOption) => alert(`Selected: ${selectedOption.label}`)}
                                />

                            </div>

                            <div className='flex items-center'>
                                <h3 className='mx-2'>Symbol</h3>
                                <Select
                                    options={Symbols}
                                    defaultValue={Symbols[0]}
                                    placeholder="Select an option"
                                    className='border-0 w-40 '
                                // onChange={(selectedOption) => alert(`Selected: ${selectedOption.label}`)}
                                />

                            </div>
                            
                            {filters.map((filter, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveFilter(filter)}
                                className={`filter  cursor-pointer hover:bg-gray-300 bg-white ${
                                    activeFilter === filter
                                    ? 'highlight-butt'
                                    : ''
                                }`}
                            >
                                {filter}
                            </div>
                            ))}
                            <div></div>
                        </div>
                    </div> 
                    <div className=''>
                        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-4  p-4">
                            <div className="border p-2 rounded bg-white">
                                <div className='m-4 '>
                                    <div className='font-bold'>N9T volume trendline XAUUSD</div>
                                    <div className='flex flex-grow my-4 items-center '>
                                        <div className='w-1/4 text-gray-500 text-sm '>
                                            <div className='font-bold text-2xl text-[#00FF9B] my-4'> +$637.25</div>
                                            <div>
                                                <div> Winrate 65%</div>
                                                <div> RR ratio 3.14</div>
                                            </div>

                                        </div>
                                        <div className='w-3/4 ml-4'>
                                            <LineChart />
                                        </div>
                                    </div>
                                    <div >
                                        <div className='flex flex-wrap justify-between text-sm'>
                                            <div>
                                                <div>Symbol</div>
                                                <div className='flex'>
                                                    <img className='w-8' src='https://static.vecteezy.com/system/resources/previews/009/759/676/original/eps10-black-location-map-icon-isolated-on-white-background-pinpoint-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-pictogram-and-mobile-application-vector.jpg'></img>
                                                    <div>XAUUSD</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div>Current Traders</div>
                                                <div className='flex'>
                                                    <img className='w-8' src='https://static.vecteezy.com/system/resources/previews/009/759/676/original/eps10-black-location-map-icon-isolated-on-white-background-pinpoint-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-pictogram-and-mobile-application-vector.jpg'></img>
                                                    <div>15</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div>Commission</div>
                                                <div className='flex'>
                                                    <img className='w-8' src='https://static.vecteezy.com/system/resources/previews/009/759/676/original/eps10-black-location-map-icon-isolated-on-white-background-pinpoint-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-pictogram-and-mobile-application-vector.jpg '></img>
                                                    <div>25%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <Link href='/Strategy/idtoshowinfo'><button className='w-full text-center bg-gray-200 p-2 rounded-md '>view more</button>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border p-2 rounded bg-white">
                                <div className='m-4 '>
                                    <div className='font-bold'>N9T volume trendline XAUUSD</div>
                                    <div className='flex flex-grow my-4 items-center '>
                                        <div className='w-1/4 text-gray-500 text-sm '>
                                            <div className='font-bold text-2xl text-[#00FF9B] my-4'> +$637.25</div>
                                            <div>
                                                <div> Winrate 65%</div>
                                                <div> RR ratio 3.14</div>
                                            </div>

                                        </div>
                                        <div className='w-3/4 ml-4'>
                                            <LineChart />
                                        </div>
                                    </div>
                                    <div >
                                        <div className='flex flex-wrap justify-between text-sm'>
                                            <div>
                                                <div>Symbol</div>
                                                <div className='flex'>
                                                    <img className='w-8' src='https://static.vecteezy.com/system/resources/previews/009/759/676/original/eps10-black-location-map-icon-isolated-on-white-background-pinpoint-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-pictogram-and-mobile-application-vector.jpg'></img>
                                                    <div>XAUUSD</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div>Current Traders</div>
                                                <div className='flex'>
                                                    <img className='w-8' src='https://static.vecteezy.com/system/resources/previews/009/759/676/original/eps10-black-location-map-icon-isolated-on-white-background-pinpoint-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-pictogram-and-mobile-application-vector.jpg'></img>
                                                    <div>15</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div>Commission</div>
                                                <div className='flex'>
                                                    <img className='w-8' src='https://static.vecteezy.com/system/resources/previews/009/759/676/original/eps10-black-location-map-icon-isolated-on-white-background-pinpoint-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-pictogram-and-mobile-application-vector.jpg '></img>
                                                    <div>25%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='w-full text-center bg-gray-200 p-2 rounded-md '>view more</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border p-2 rounded bg-white">
                                <div className='m-4 '>
                                    <div className='font-bold'>N9T volume trendline XAUUSD</div>
                                    <div className='flex flex-grow my-4 items-center '>
                                        <div className='w-1/4 text-gray-500 text-sm '>
                                            <div className='font-bold text-2xl text-[#00FF9B] my-4'> +$637.25</div>
                                            <div>
                                                <div> Winrate 65%</div>
                                                <div> RR ratio 3.14</div>
                                            </div>

                                        </div>
                                        <div className='w-3/4 ml-4'>
                                            <LineChart />
                                        </div>
                                    </div>
                                    <div >
                                        <div className='flex flex-wrap justify-between text-sm'>
                                            <div>
                                                <div>Symbol</div>
                                                <div className='flex'>
                                                    <img className='w-8' src='https://static.vecteezy.com/system/resources/previews/009/759/676/original/eps10-black-location-map-icon-isolated-on-white-background-pinpoint-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-pictogram-and-mobile-application-vector.jpg'></img>
                                                    <div>XAUUSD</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div>Current Traders</div>
                                                <div className='flex'>
                                                    <img className='w-8' src='https://static.vecteezy.com/system/resources/previews/009/759/676/original/eps10-black-location-map-icon-isolated-on-white-background-pinpoint-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-pictogram-and-mobile-application-vector.jpg'></img>
                                                    <div>15</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div>Commission</div>
                                                <div className='flex'>
                                                    <img className='w-8' src='https://static.vecteezy.com/system/resources/previews/009/759/676/original/eps10-black-location-map-icon-isolated-on-white-background-pinpoint-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-pictogram-and-mobile-application-vector.jpg '></img>
                                                    <div>25%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='w-full text-center bg-gray-200 p-2 rounded-md '>view more</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border p-2 rounded bg-white">
                                <div className='m-4 '>
                                    <div className='font-bold'>N9T volume trendline XAUUSD</div>
                                    <div className='flex flex-grow my-4 items-center '>
                                        <div className='w-1/4 text-gray-500 text-sm '>
                                            <div className='font-bold text-2xl text-[#00FF9B] my-4'> +$637.25</div>
                                            <div>
                                                <div> Winrate 65%</div>
                                                <div> RR ratio 3.14</div>
                                            </div>

                                        </div>
                                        <div className='w-3/4 ml-4'>
                                            <LineChart />
                                        </div>
                                    </div>
                                    <div >
                                        <div className='flex flex-wrap justify-between text-sm'>
                                            <div>
                                                <div>Symbol</div>
                                                <div className='flex'>
                                                    <img className='w-8' src='https://static.vecteezy.com/system/resources/previews/009/759/676/original/eps10-black-location-map-icon-isolated-on-white-background-pinpoint-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-pictogram-and-mobile-application-vector.jpg'></img>
                                                    <div>XAUUSD</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div>Current Traders</div>
                                                <div className='flex'>
                                                    <img className='w-8' src='https://static.vecteezy.com/system/resources/previews/009/759/676/original/eps10-black-location-map-icon-isolated-on-white-background-pinpoint-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-pictogram-and-mobile-application-vector.jpg'></img>
                                                    <div>15</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div>Commission</div>
                                                <div className='flex'>
                                                    <img className='w-8' src='https://static.vecteezy.com/system/resources/previews/009/759/676/original/eps10-black-location-map-icon-isolated-on-white-background-pinpoint-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-pictogram-and-mobile-application-vector.jpg '></img>
                                                    <div>25%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='w-full text-center bg-gray-200 p-2 rounded-md '>view more</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border p-2 rounded bg-white">
                                <div className='m-4 '>
                                    <div className='font-bold'>N9T volume trendline XAUUSD</div>
                                    <div className='flex flex-grow my-4 items-center '>
                                        <div className='w-1/4 text-gray-500 text-sm '>
                                            <div className='font-bold text-2xl text-[#00FF9B] my-4'> +$637.25</div>
                                            <div>
                                                <div> Winrate 65%</div>
                                                <div> RR ratio 3.14</div>
                                            </div>

                                        </div>
                                        <div className='w-3/4 ml-4'>
                                            <LineChart />
                                        </div>
                                    </div>
                                    <div >
                                        <div className='flex flex-wrap justify-between text-sm'>
                                            <div>
                                                <div>Symbol</div>
                                                <div className='flex'>
                                                    <img className='w-8' src='https://static.vecteezy.com/system/resources/previews/009/759/676/original/eps10-black-location-map-icon-isolated-on-white-background-pinpoint-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-pictogram-and-mobile-application-vector.jpg'></img>
                                                    <div>XAUUSD</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div>Current Traders</div>
                                                <div className='flex'>
                                                    <img className='w-8' src='https://static.vecteezy.com/system/resources/previews/009/759/676/original/eps10-black-location-map-icon-isolated-on-white-background-pinpoint-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-pictogram-and-mobile-application-vector.jpg'></img>
                                                    <div>15</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div>Commission</div>
                                                <div className='flex'>
                                                    <img className='w-8' src='https://static.vecteezy.com/system/resources/previews/009/759/676/original/eps10-black-location-map-icon-isolated-on-white-background-pinpoint-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-pictogram-and-mobile-application-vector.jpg '></img>
                                                    <div>25%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='w-full text-center bg-gray-200 p-2 rounded-md '>view more</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border p-2 rounded bg-white">
                                <div className='m-4 '>
                                    <div className='font-bold'>N9T volume trendline XAUUSD</div>
                                    <div className='flex flex-grow my-4 items-center '>
                                        <div className='w-1/4 text-gray-500 text-sm '>
                                            <div className='font-bold text-2xl text-[#00FF9B] my-4'> +$637.25</div>
                                            <div>
                                                <div> Winrate 65%</div>
                                                <div> RR ratio 3.14</div>
                                            </div>

                                        </div>
                                        <div className='w-3/4 ml-4'>
                                            <LineChart />
                                        </div>
                                    </div>
                                    <div >
                                        <div className='flex flex-wrap justify-between text-sm'>
                                            <div>
                                                <div>Symbol</div>
                                                <div className='flex'>
                                                    <img className='w-8' src='https://static.vecteezy.com/system/resources/previews/009/759/676/original/eps10-black-location-map-icon-isolated-on-white-background-pinpoint-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-pictogram-and-mobile-application-vector.jpg'></img>
                                                    <div>XAUUSD</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div>Current Traders</div>
                                                <div className='flex'>
                                                    <img className='w-8' src='https://static.vecteezy.com/system/resources/previews/009/759/676/original/eps10-black-location-map-icon-isolated-on-white-background-pinpoint-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-pictogram-and-mobile-application-vector.jpg'></img>
                                                    <div>15</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div>Commission</div>
                                                <div className='flex'>
                                                    <img className='w-8' src='https://static.vecteezy.com/system/resources/previews/009/759/676/original/eps10-black-location-map-icon-isolated-on-white-background-pinpoint-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-pictogram-and-mobile-application-vector.jpg '></img>
                                                    <div>25%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='w-full text-center bg-gray-200 p-2 rounded-md '>view more</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

            <Footer />
        </Container>
    )
}

export default Strategy