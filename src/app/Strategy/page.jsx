
'use client'

import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Select from "react-select"
import Link from 'next/link'

import LineChart from '../components/LineChart'

import { ArrowUpRight, Users, Percent, CandlestickChart, TrendingUp, ChevronRight } from 'lucide-react'

function Strategy() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

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

  const [trades, setTrades] = useState([]);
  const [isLoading, setIsLoading] = useState([]);




  const fetchStats = async (mt5AccountId) => {
    let tradeHistory = null;


    while (!tradeHistory || tradeHistory.mt5_id !== mt5AccountId) {
      try {
        const res = await fetch("/api/trade-history", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mt5_id: mt5AccountId }),
        });

        // if (!res.ok) {
        //   throw new Error(`Failed to fetch data for MT5 account ${mt5AccountId}`);
        // }

        tradeHistory = await res.json();

        if (!tradeHistory || tradeHistory.mt5_id !== mt5AccountId) {
          console.log(`No match for mt5_id ${mt5AccountId}, retrying...`);
          await new Promise((resolve) => setTimeout(resolve, 500)); // Wait before retrying

        }

      } catch (error) {
        console.error(`Error fetching stats for MT5 account ${mt5AccountId}:`, error);
        return []; // Return empty array on failure
      }
    }
    // if (hasFetchedAccounts) {
    //   setAccountinfo(prev => [...prev, tradeHistory]);
    //   setHasFetchedAccounts(false);
    // }
    return tradeHistory.positions || []; // Return positions or an empty array
  };


  const [strategyStats, setStrategyStats] = useState([]); // Separate state to store calculated stats
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    
  const fetchAllTrades = async () => {
    if ( strategies.length > 0) {
      setIsLoading(true);

      try {
        const updatedStats = await Promise.all(
          strategies.map(async (strategy) => {
            try {
              //await delay(100); // Introduce a delay

              const trades = await fetchStats(strategy.mt5_id) || [];
              console.log("trades ", trades)
              // Calculate stats
              const totalTrades = trades.length;
              const wins = trades.filter(trade => parseFloat(trade.profit) > 0).length;
              const totalProfit = trades.reduce((sum, trade) => sum + parseFloat(trade.profit), 0);
              const totalLoss = trades.reduce((sum, trade) => (parseFloat(trade.profit) < 0 ? sum + parseFloat(trade.profit) : sum), 0);

              const winRate = totalTrades > 0 ? (wins / totalTrades) * 100 : 0;
              const rrRatio = totalLoss !== 0 ? Math.abs(totalProfit / totalLoss) : (totalProfit > 0 ? totalProfit : 0);

              return {
                mt5_id: strategy.mt5_id,  // Keep ID for reference
                winRate: winRate.toFixed(2),
                totalProfit: totalProfit.toFixed(2),
                rrRatio: rrRatio.toFixed(2),
                trades: trades
              };
            } catch (error) {
              console.log(`Failed to fetch trades for strategy ${strategy.mt5_id}:`, error);
              return { mt5_id: strategy.mt5_id, winRate: 0, totalProfit: 0, rrRatio: 0 };
            }
          })
        );

        setStrategyStats(updatedStats); // Store computed stats separately
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching trades:", error);
        setIsLoading(false);
      }
    }
  };



  useEffect(() => {
    if (strategies.length > 0) {
      fetchAllTrades();
    }
  }, [strategies]);





  // const cumulativeProfit = trade.positions && trade.positions.length > 0
  //   ? trade.positions.reduce((acc, { profit, time }, index) => {
  //     const profitValue = parseFloat(profit) || 0;
  //     const prevValue = acc.length > 0 ? acc[acc.length - 1].value : 0;
  //     const cumulativeValue = prevValue + profitValue;

  //     acc.push({
  //       name: formatDate(time),
  //       value: cumulativeValue
  //     });

  //     return acc;
  //   }, [])
  //   : [];
  // console.log(cumulativeProfit)

  const formatDate = (dateTimeStr) => {
    const [date] = dateTimeStr.split(" ");
    const [year, month, day] = date.split(".");
    return `${year.slice(2)}/${month}/${day}`;
  };

  const calculateCumulativeProfit = (strategyStats) => {

    // Ensure stats has positions and that positions is an array
    if (!strategyStats || !strategyStats.trades ) {
      return []; // Return an empty array if data is invalid
    }
    // Initialize an array to store cumulative profits in the desired format
    const cumulativeProfits = strategyStats.trades.reduce((acc, { profit, time }) => {
      const profitValue = parseFloat(profit) || 0;
      const prevValue = acc.length > 0 ? acc[acc.length - 1].value : 0;
      const cumulativeValue = prevValue + profitValue;

      // Add a new entry with formatted date and cumulative profit value
      acc.push({
        name: formatDate(time), // Format the date here
        value: cumulativeValue
      });

      return acc;
    }, []);
    console.log("cumulativeProfits    ", cumulativeProfits)
    return {
      ...strategyStats,
      cumulativeProfits, // Add cumulative profits to the strategy
    };
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section with animated gradient overlay */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 to-blue-900 opacity-70"></div>
      

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
      {isLoading && isClient ?

        (
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400"></div>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" suppressHydrationWarning>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Top Strategies</h2>
              <button className="text-cyan-400 flex items-center text-sm">
                View All Strategies <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {strategies.map((strategy, index) => {
                // Find the corresponding stats for the current strategy
                const stats = strategyStats.find(s => s.mt5_id === strategy.mt5_id) || {};
                console.log("stats   ", stats)
                return (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:border-cyan-500 transition-all duration-300"
                  >
                    <div className="p-5">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-lg">{strategy.name}</h3>
                        <div className="text-green-400 text-xl font-bold">
                          +${stats.totalProfit || "0.00"}
                        </div>
                      </div>

                      <div className="flex gap-4 mb-4">
                        <div className="bg-gray-900 p-3 rounded-lg flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 text-cyan-400" />
                          <div>
                            <div className="text-xs text-gray-400">Win rate</div>
                            <div className="font-semibold">{stats.winRate || "0"}%</div>
                          </div>
                        </div>
                        <div className="bg-gray-900 p-3 rounded-lg flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 text-cyan-400" />
                          <div>
                            <div className="text-xs text-gray-400">RR ratio</div>
                            <div className="font-semibold">{stats.rrRatio || "0"}</div>
                          </div>
                        </div>
                      </div>

                      <div className="h-32 bg-gray-900 rounded-lg mb-4">
                        <LineChart key={index} data={calculateCumulativeProfit(stats).cumulativeProfits} />
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
                            <div className="font-medium">{strategy.traders}</div>
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
                );
              })}

            </div>
          </div>

        )}

    </div>
  )
}

export default Strategy