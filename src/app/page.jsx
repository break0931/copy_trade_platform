'use client'
import React, { useState } from 'react'
import { TrendingUp, Award, Users, BarChart2, Zap, ChevronRight, Star, Shield, Globe, ArrowUpRight, ArrowDownRight } from 'lucide-react'

const MainPage = () => {
  const [activeTab, setActiveTab] = useState('all')

  // Sample data for top traders
  const topTraders = [
    {
      id: 1,
      name: "Alex Morgan",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      profit: 287.45,
      winRate: 92,
      followers: 1458,
      change: 24.3,
      trending: true,
      verified: true,
      pairs: ["EURUSD", "GBPJPY", "BTCUSD"]
    },
    {
      id: 2,
      name: "Sarah Chen",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      profit: 215.78,
      winRate: 88,
      followers: 1287,
      change: 18.7,
      trending: true,
      verified: true,
      pairs: ["USDJPY", "AUDUSD", "ETHBTC"]
    },
    {
      id: 3,
      name: "Michael Reeves",
      avatar: "https://randomuser.me/api/portraits/men/65.jpg",
      profit: 193.22,
      winRate: 85,
      followers: 985,
      change: 12.5,
      trending: true,
      verified: true,
      pairs: ["GBPUSD", "XAUUSD", "LTCBTC"]
    },
    {
      id: 4,
      name: "Dani Wilson",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
      profit: 176.55,
      winRate: 83,
      followers: 842,
      change: -3.8,
      trending: false,
      verified: true,
      pairs: ["EURCHF", "USDCAD", "ADABTC"]
    },
  ]

  // Sample market data
  const marketData = [
    { symbol: "EURUSD", price: 1.0932, change: 0.42, trend: "up" },
    { symbol: "USDJPY", price: 150.78, change: -0.23, trend: "down" },
    { symbol: "GBPUSD", price: 1.2687, change: 0.15, trend: "up" },
    { symbol: "BTCUSD", price: 52487.25, change: 2.34, trend: "up" },
    { symbol: "ETHUSD", price: 3127.85, change: 1.88, trend: "up" },
  ]

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
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Copy Elite Traders.</span> 
                <span className="block mt-2">Amplify Your Returns.</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Follow top-performing traders and automatically replicate their strategies in real-time. Take the guesswork out of trading.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center">
                  Start Copy Trading <Zap className="ml-2 h-5 w-5" />
                </button>
                <button className="px-6 py-3 bg-gray-800 bg-opacity-70 rounded-lg font-medium border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                  Explore Traders
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-lg opacity-70"></div>
                <div className="relative bg-gray-900 rounded-xl p-6 border border-gray-800">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold">Live Trading Activity</h3>
                    <span className="flex items-center text-xs px-2 py-1 bg-green-900 text-green-400 rounded-full">
                      <span className="h-2 w-2 bg-green-400 rounded-full mr-1 animate-pulse"></span> Live
                    </span>
                  </div>
                  <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="p-3 bg-gray-800 rounded-lg border border-gray-700 flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-gray-700 mr-3 overflow-hidden">
                            <img src={`https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 70)}.jpg`} alt="Trader" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">Trader{item}</div>
                            <div className="text-xs text-gray-400">EURUSD • Buy</div>
                          </div>
                        </div>
                        <div className="text-green-400 text-sm font-medium">+$237.45</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-900 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center text-cyan-400 mb-2">
                <Users className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Active Traders</span>
              </div>
              <span className="text-3xl font-bold">24,500+</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center text-cyan-400 mb-2">
                <TrendingUp className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Monthly Volume</span>
              </div>
              <span className="text-3xl font-bold">$4.2B+</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center text-cyan-400 mb-2">
                <Award className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Top Win Rate</span>
              </div>
              <span className="text-3xl font-bold">94.6%</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center text-cyan-400 mb-2">
                <Globe className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Countries</span>
              </div>
              <span className="text-3xl font-bold">120+</span>
            </div>
          </div>
        </div>
      </div>

      {/* Market Overview Section */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Market Overview</h2>
            <button className="text-cyan-400 flex items-center text-sm">
              View All Markets <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {marketData.map((market, index) => (
              <div key={index} className="bg-gray-800 rounded-lg border border-gray-700 p-4 hover:border-cyan-500 transition-all duration-300">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{market.symbol}</span>
                  {market.trend === "up" ? (
                    <ArrowUpRight className="h-4 w-4 text-green-400" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-red-400" />
                  )}
                </div>
                <div className="text-xl font-bold mb-1">{market.price}</div>
                <div className={`text-sm ${market.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {market.change > 0 ? '+' : ''}{market.change}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Traders Section */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Top Traders to Copy</h2>
            <button className="text-cyan-400 flex items-center text-sm">
              View All Traders <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
          
          <div className="flex border-b border-gray-800 mb-6">
            <button 
              className={`pb-3 mr-6 text-sm font-medium ${activeTab === 'all' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400'}`}
              onClick={() => setActiveTab('all')}
            >
              All Traders
            </button>
            <button 
              className={`pb-3 mr-6 text-sm font-medium ${activeTab === 'popular' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400'}`}
              onClick={() => setActiveTab('popular')}
            >
              Most Popular
            </button>
            <button 
              className={`pb-3 mr-6 text-sm font-medium ${activeTab === 'trending' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400'}`}
              onClick={() => setActiveTab('trending')}
            >
              Trending
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topTraders.map((trader) => (
              <div key={trader.id} className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:border-cyan-500 transition-all duration-300">
                <div className="p-5">
                  <div className="flex items-center mb-4">
                    <div className="relative mr-3">
                      <img src={trader.avatar} alt={trader.name} className="h-12 w-12 rounded-full object-cover" />
                      {trader.verified && (
                        <div className="absolute bottom-0 right-0 bg-cyan-500 text-xs rounded-full p-0.5">
                          <Shield className="h-3 w-3" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold flex items-center">
                        {trader.name} 
                        {trader.trending && (
                          <span className="ml-2 bg-blue-900 text-blue-400 text-xs px-1.5 py-0.5 rounded flex items-center">
                            <TrendingUp className="h-3 w-3 mr-0.5" /> Hot
                          </span>
                        )}
                      </h3>
                      <div className="text-gray-400 text-xs flex items-center">
                        <Users className="h-3 w-3 mr-1" /> {trader.followers.toLocaleString()} followers
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-gray-900 p-3 rounded-lg">
                      <div className="text-xs text-gray-400 mb-1">Profit</div>
                      <div className="text-green-400 font-semibold">{trader.profit}%</div>
                    </div>
                    <div className="bg-gray-900 p-3 rounded-lg">
                      <div className="text-xs text-gray-400 mb-1">Win Rate</div>
                      <div className="text-white font-semibold">{trader.winRate}%</div>
                    </div>
                    <div className="bg-gray-900 p-3 rounded-lg">
                      <div className="text-xs text-gray-400 mb-1">30D</div>
                      <div className={`font-semibold ${trader.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {trader.change > 0 ? '+' : ''}{trader.change}%
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {trader.pairs.map((pair, index) => (
                      <span key={index} className="text-xs px-2 py-1 bg-gray-700 rounded-full">{pair}</span>
                    ))}
                  </div>
                  
                  <button className="w-full py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
                    Copy Trader
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Copy Trading Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Follow top-performing traders and automatically replicate their trades in your own account in just three simple steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 relative">
              <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-xl">1</div>
              <div className="mb-4 text-cyan-400">
                <Users className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Traders</h3>
              <p className="text-gray-400">
                Browse through our curated list of verified traders with proven track records and transparent performance metrics.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 relative">
              <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-xl">2</div>
              <div className="mb-4 text-cyan-400">
                <BarChart2 className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Set Parameters</h3>
              <p className="text-gray-400">
                Customize your risk level, investment amount, and choose which strategies to follow based on your trading preferences.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 relative">
              <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-xl">3</div>
              <div className="mb-4 text-cyan-400">
                <Zap className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Auto-Copy Trades</h3>
              <p className="text-gray-400">
                Our system automatically executes trades in your account, mirroring the actions of your selected traders in real-time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 to-blue-900 opacity-90"></div>
            <div 
              className="absolute inset-0 opacity-20" 
              style={{
                backgroundImage: "url('https://api.placeholder.com/1920/1080')",
                backgroundSize: "cover"
              }}
            ></div>
            <div className="relative p-8 md:p-12">
              <div className="md:flex items-center justify-between">
                <div className="mb-8 md:mb-0 md:mr-8">
                  <h2 className="text-3xl font-bold mb-4">Ready to Start Copy Trading?</h2>
                  <p className="text-gray-300 mb-0 md:max-w-xl">
                    Join thousands of traders already profiting from the expertise of professionals. Create your account and start copying in minutes.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button className="w-full md:w-auto px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                    Get Started Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage