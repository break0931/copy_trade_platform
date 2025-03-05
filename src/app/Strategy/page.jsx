// 'use client'

// import React, { useEffect, useState } from 'react'
// import { useSession } from 'next-auth/react'
// import Select from "react-select"
// import Link from 'next/link'
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import LineChart from '../components/LineChart'
// import Container from "../components/Container"
// import Navbar from "../components/Navbar"
// import Footer from "../components/Footer"
// import { ArrowUpRight, Users, Percent, CandlestickChart , TrendingUp } from 'lucide-react'
 
// function Strategy() {
//   const [strategies, setStrategies] = useState([])
//   const [activeFilter, setActiveFilter] = useState('Win rate')
//   const { data: session } = useSession()

//   // useEffect(() => {
//   //   fetch("/api/strategie")
//   //     .then((res) => res.json())
//   //     .then((data) => setStrategies(data.strategies))
//   //     .catch((err) => console.error("Error fetching strategies:", err))
//   // }, [])

//   const filters = ['Win rate', 'RR ratio', 'PNL', 'Traders']

//   const Time = [
//     { value: 'All', label: 'All' },
//     {
//       label: 'MINUTES',
//       options: [
//         { value: '1m', label: '1 minute' },
//         { value: '5m', label: '5 minutes' },
//         { value: '15m', label: '15 minutes' },
//       ],
//     },
//     {
//       label: 'HOURS',
//       options: [
//         { value: '1h', label: '1 hour' },
//         { value: '2h', label: '2 hours' },
//         { value: '4h', label: '4 hours' },
//       ],
//     },
//     {
//       label: 'DAYS',
//       options: [
//         { value: '1d', label: 'day' },
//         { value: '1w', label: 'week' },
//         { value: '1M', label: 'month' },
//       ],
//     },
//   ]

//   const Symbols = [
//     { value: 'All', label: 'All' },
//     { value: 'XAUUSD', label: 'XAUUSD' },
//     { value: 'USDJPY', label: 'USDJPY' },
//     { value: 'GBPUSD', label: 'GBPUSD' },
//   ]

//   const selectStyles = {
//     control: (base) => ({
//       ...base,
//       border: 'none',
//       boxShadow: 'none',
//       backgroundColor: 'white',
//       borderRadius: '0.5rem',
//       padding: '0.25rem',
//     }),
//   }
//   useEffect(() => {
//     const fetchallstrategies =async () => {
//       try{
//         const response= await fetch("/api/strategie")
//         if (!response.ok) {
//           throw new Error(`Error: ${response.status}`);
//         }
//         const data = await response.json();
//         setStrategies(data)
//         console.log(data)
//       }catch (error) {
//         console.error('Error fetching strategies:', error);
//       }
//     } 
//     fetchallstrategies();
//   }, []);
  

//   return (
//     <Container>
      
//       <div className="min-h-screen py-8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="space-y-6">
//             {/* Header Section */}
//             <div className="flex flex-col space-y-4">
//               <h1 className="text-3xl font-bold text-gray-900">Strategy</h1>

//               {/* Filters Section */}
//               <div className="flex flex-wrap gap-4 items-center">
//                 <div className="flex items-center space-x-2 bg-white p-2 rounded-lg shadow-sm">
//                   <span className="text-sm font-medium text-gray-700">Timeframe</span>
//                   <Select
//                     options={Time}
//                     defaultValue={Time[0]}
//                     styles={selectStyles}
//                     className="w-40"
//                   />
//                 </div>

//                 <div className="flex items-center space-x-2 bg-white p-2 rounded-lg shadow-sm">
//                   <span className="text-sm font-medium text-gray-700">Symbol</span>
//                   <Select
//                     options={Symbols}
//                     defaultValue={Symbols[0]}
//                     styles={selectStyles}
//                     className="w-40"
//                   />
//                 </div>

//                 <Tabs defaultValue={activeFilter} className="w-auto">
//                   <TabsList className="bg-white  flex-wrap h-fit space-y-1">
//                     {filters.map((filter) => (
//                       <TabsTrigger
//                         key={filter}
//                         value={filter}
//                         onClick={() => setActiveFilter(filter)}
//                         className="w-full md:w-auto data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700"
//                       >
//                         {filter}
//                       </TabsTrigger>
//                     ))}
//                   </TabsList>
//                 </Tabs>
//               </div>
//             </div>

//             {/* Strategy Cards Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//               {
//                 strategies.map((strategy,index) => (
                 
//                   <Card className="hover:shadow-lg transition-shadow h-fit" key={index}>
//                   <CardHeader className="pb-2 ">
//                     <CardTitle className="text-lg font-bold xs:flex items-center justify-between">
//                       <div className='xs:w-1/2 break-words'>{strategy.name}</div>
//                       <div className="text-2xl font-bold text-profit text-center ">+$637.25</div>
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent className="space-y-4">
                    
//                     <div className="block xs:flex gap-4">
//                       <div className="space-x-1 flex items-center">
//                         <TrendingUp className="w-5 h-5 text-gray-500" />
//                         <div className="text-sm text-gray-600">Win rate</div>
//                         <div className="font-semibold">65%</div>
//                       </div>
//                       <div className="space-x-1 flex items-center">
//                         <TrendingUp className="w-5 h-5 text-gray-500" />
//                         <div className="text-sm text-gray-600">RR ratio</div>
//                         <div className="font-semibold">3.14</div>
//                       </div>
//                     </div>
  
//                     <div className="h-32">
//                       <LineChart />
//                     </div>
  
//                     <div className="grid grid-cols-1 xs:grid-cols-3 gap-4 py-4">
//                       <div className="flex items-center space-x-2">
//                         <CandlestickChart className="w-5 h-5 text-gray-500" />
//                         <div>
//                           <div className="text-xs text-gray-500">Symbol</div>
//                           <div className="font-medium">{strategy.symbol}</div>
//                         </div>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <Users className="w-5 h-5 text-gray-500" />
//                         <div>
//                           <div className="text-xs text-gray-500">Traders</div>
//                           <div className="font-medium">15</div>
//                         </div>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <Percent className="w-5 h-5 text-gray-500" />
//                         <div>
//                           <div className="text-xs text-gray-500">Commission</div>
//                           <div className="font-medium">{strategy.commission}%</div>
//                         </div>
//                       </div>
//                     </div>
  
//                     <Link 
//                        href={`/Strategy/${strategy.name}`}
//                       className="block w-full bg-gray-50 hover:bg-gray-100 text-center py-2 rounded-lg font-medium transition-colors"
//                     >
//                       View Details
//                       <ArrowUpRight className="w-4 h-4 inline ml-1" />
//                     </Link>
//                   </CardContent>
//                 </Card>
//                 ))
//               }
           
//             </div>
//           </div>
//         </div>
//       </div>
      
//     </Container>
//   )
// }

// export default Strategy

'use client'

import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Select from "react-select"
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LineChart from '../components/LineChart'
import Container from "../components/Container"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { ArrowUpRight, Users, Percent, CandlestickChart, TrendingUp, ChevronRight } from 'lucide-react'
 
function Strategy() {

  
  const [strategies, setStrategies] = useState([])
  const [activeFilter, setActiveFilter] = useState('Win rate')
  const { data: session } = useSession()

  const filters = ['Win rate', 'RR ratio', 'PNL', 'Traders']

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
        { value: '1h', label: '1 hour' },
        { value: '2h', label: '2 hours' },
        { value: '4h', label: '4 hours' },
      ],
    },
    {
      label: 'DAYS',
      options: [
        { value: '1d', label: 'day' },
        { value: '1w', label: 'week' },
        { value: '1M', label: 'month' },
      ],
    },
  ]

  const Symbols = [
    { value: 'All', label: 'All' },
    { value: 'XAUUSD', label: 'XAUUSD' },
    { value: 'USDJPY', label: 'USDJPY' },
    { value: 'GBPUSD', label: 'GBPUSD' },
  ]

  const selectStyles = {
    control: (base) => ({
      ...base,
      border: 'none',
      boxShadow: 'none',
      backgroundColor: '#1f2937', // Dark background
      borderRadius: '0.5rem',
      padding: '0.25rem',
      borderColor: '#374151',
    }),
    singleValue: (base) => ({
      ...base,
      color: '#fff', // White text
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: '#1f2937', // Dark background for dropdown
      border: '1px solid #374151',
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected ? '#0891b2' : state.isFocused ? '#374151' : '#1f2937',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#374151',
      },
    }),
    input: (base) => ({
      ...base,
      color: '#fff', // White text for input
    }),
    placeholder: (base) => ({
      ...base,
      color: '#9ca3af', // Gray text for placeholder
    }),
    indicatorSeparator: (base) => ({
      ...base,
      backgroundColor: '#4b5563', // Darker gray for separator
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: '#9ca3af', // Gray color for dropdown arrow
    }),
    group: (base) => ({
      ...base,
      color: '#9ca3af', // Gray text for group labels
    }),
  }

  useEffect(() => {
    const fetchallstrategies = async () => {
      try {
        const response = await fetch("/api/strategie")
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setStrategies(data)
        console.log(data)
      } catch (error) {
        console.error('Error fetching strategies:', error);
      }
    } 
    fetchallstrategies();
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section with animated gradient overlay */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 to-blue-900 opacity-70"></div>
        <div 
          className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: "url('https://api.placeholder.com/1920/1080')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        
        {/* Animated dots/grid pattern for tech feel */}
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "30px 30px"
        }}></div>
        
        <div className="relative py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Strategy Marketplace
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                Browse and copy high-performing trading strategies from elite traders
              </p>
              
              {/* Filters Section */}
              <div className="flex flex-wrap gap-4 items-center pb-6">
                <div className="flex items-center space-x-2 bg-gray-800 p-2 rounded-lg border border-gray-700">
                  <span className="text-sm font-medium text-gray-300">Timeframe</span>
                  <Select
                    options={Time}
                    defaultValue={Time[0]}
                    styles={selectStyles}
                    className="w-40"
                  />
                </div>

                <div className="flex items-center space-x-2 bg-gray-800 p-2 rounded-lg border border-gray-700">
                  <span className="text-sm font-medium text-gray-300">Symbol</span>
                  <Select
                    options={Symbols}
                    defaultValue={Symbols[0]}
                    styles={selectStyles}
                    className="w-40"
                  />
                </div>

                <div className="flex border-b border-gray-800 h-10">
                  {filters.map((filter) => (
                    <button 
                      key={filter}
                      className={`pb-3 mr-6 text-sm font-medium ${activeFilter === filter ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400'}`}
                      onClick={() => setActiveFilter(filter)}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strategy Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Top Strategies</h2>
          <button className="text-cyan-400 flex items-center text-sm">
            View All Strategies <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {strategies.map((strategy, index) => (
            <div key={index} className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:border-cyan-500 transition-all duration-300">
              <div className="p-5">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-lg">{strategy.name}</h3>
                  <div className="text-green-400 text-xl font-bold">+$637.25</div>
                </div>
                
                <div className="flex gap-4 mb-4">
                  <div className="bg-gray-900 p-3 rounded-lg flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-cyan-400" />
                    <div>
                      <div className="text-xs text-gray-400">Win rate</div>
                      <div className="font-semibold">65%</div>
                    </div>
                  </div>
                  <div className="bg-gray-900 p-3 rounded-lg flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-cyan-400" />
                    <div>
                      <div className="text-xs text-gray-400">RR ratio</div>
                      <div className="font-semibold">3.14</div>
                    </div>
                  </div>
                </div>
                
                <div className="h-32 bg-gray-900 rounded-lg mb-4">
                  <LineChart />
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <CandlestickChart className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-xs text-gray-400">Symbol</div>
                      <div className="font-medium">{strategy.symbol}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-xs text-gray-400">Traders</div>
                      <div className="font-medium">15</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Percent className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-xs text-gray-400">Commission</div>
                      <div className="font-medium">{strategy.commission}%</div>
                    </div>
                  </div>
                </div>
                
                <Link 
                  href={`/Strategy/${strategy.name}`}
                  className="block w-full py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 text-center"
                >
                  View Details
                  <ArrowUpRight className="w-4 h-4 inline ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Strategy