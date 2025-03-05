'use client'
import React from 'react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { ArrowUpRight, ArrowDownRight, DollarSign, Users, TrendingUp, Award } from 'lucide-react'

import Container from '../components/Container'

// Sample data for charts
const revenueData = [
  { month: 'Jan', revenue: 65000 },
  { month: 'Feb', revenue: 59000 },
  { month: 'Mar', revenue: 80000 },
  { month: 'Apr', revenue: 81000 },
  { month: 'May', revenue: 56000 },
  { month: 'Jun', revenue: 55000 },
  { month: 'Jul', revenue: 60000 },
  { month: 'Aug', revenue: 92000 },
  { month: 'Sep', revenue: 97000 },
];

const customerData = [
  { month: 'Jan', customers: 420 },
  { month: 'Feb', customers: 480 },
  { month: 'Mar', customers: 510 },
  { month: 'Apr', customers: 550 },
  { month: 'May', customers: 590 },
  { month: 'Jun', customers: 620 },
  { month: 'Jul', customers: 670 },
  { month: 'Aug', customers: 720 },
  { month: 'Sep', customers: 780 },
];

// Strategy performance data
const strategyData = [
  { name: 'N9T Volume Trend', currency: 'USDJPY', profit: 44698, growth: 12.4 },
  { name: 'RSI Divergence Premium', currency: 'EURUSD', profit: 38925, growth: 10.2 },
  { name: 'Bollinger Breakout', currency: 'GBPUSD', profit: 33842, growth: 8.7 },
  { name: 'Ichimoku Cloud Strategy', currency: 'AUDUSD', profit: 29754, growth: 7.5 },
  { name: 'MACD Reversal', currency: 'USDCAD', profit: 27980, growth: 6.8 },
];

// Top customer data
const customerDataList = [
  { name: 'Athichat', accountCount: 15, profit: 4553, avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: 'Sarah Johnson', accountCount: 12, profit: 3987, avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: 'Michael Chen', accountCount: 9, profit: 3654, avatar: "https://randomuser.me/api/portraits/men/65.jpg" },
  { name: 'Emma Wilson', accountCount: 7, profit: 2892, avatar: "https://randomuser.me/api/portraits/women/22.jpg" },
  { name: 'Robert Garcia', accountCount: 6, profit: 2345, avatar: "https://randomuser.me/api/portraits/men/41.jpg" },
];

function AdminDashboard() {
  return (
    <Container>
      <div className='min-h-screen py-6 '>
        {/* Dashboard Header */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-800'>Admin Dashboard</h1>
          <p className='text-gray-500 mt-2'>Analytics overview and performance metrics</p>
        </div>
        
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-gray-500 text-sm font-medium">Total Revenue</p>
                <h2 className="text-3xl font-bold mt-1">$300.45K</h2>
              </div>
              <div className="p-2 bg-green-100 rounded-lg">
                <DollarSign size={20} className="text-green-600" />
              </div>
            </div>
            <div className="flex items-center">
              <ArrowUpRight size={16} className="text-green-600 mr-1" />
              <span className="text-green-600 font-medium">34%</span>
              <span className="text-gray-500 text-sm ml-1">vs last month</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-gray-500 text-sm font-medium">Total Customers</p>
                <h2 className="text-3xl font-bold mt-1">1,254</h2>
              </div>
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users size={20} className="text-blue-600" />
              </div>
            </div>
            <div className="flex items-center">
              <ArrowUpRight size={16} className="text-green-600 mr-1" />
              <span className="text-green-600 font-medium">12%</span>
              <span className="text-gray-500 text-sm ml-1">vs last month</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-gray-500 text-sm font-medium">Avg. Transaction</p>
                <h2 className="text-3xl font-bold mt-1">$2,847</h2>
              </div>
              <div className="p-2 bg-purple-100 rounded-lg">
                <TrendingUp size={20} className="text-purple-600" />
              </div>
            </div>
            <div className="flex items-center">
              <ArrowUpRight size={16} className="text-green-600 mr-1" />
              <span className="text-green-600 font-medium">8.7%</span>
              <span className="text-gray-500 text-sm ml-1">vs last month</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-gray-500 text-sm font-medium">Active Strategies</p>
                <h2 className="text-3xl font-bold mt-1">24</h2>
              </div>
              <div className="p-2 bg-amber-100 rounded-lg">
                <Award size={20} className="text-amber-600" />
              </div>
            </div>
            <div className="flex items-center">
              <ArrowUpRight size={16} className="text-green-600 mr-1" />
              <span className="text-green-600 font-medium">15%</span>
              <span className="text-gray-500 text-sm ml-1">vs last month</span>
            </div>
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800">Revenue Overview</h3>
            <div className="flex space-x-2">
              <select className="bg-gray-100 text-gray-800 text-sm rounded-lg px-3 py-1.5 border border-gray-200">
                <option>This Year</option>
                <option>Last Year</option>
                <option>Last 6 Months</option>
              </select>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
                />
                <Line type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Customers Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800">Customer Growth</h3>
            <div className="flex space-x-2">
              <select className="bg-gray-100 text-gray-800 text-sm rounded-lg px-3 py-1.5 border border-gray-200">
                <option>This Year</option>
                <option>Last Year</option>
                <option>Last 6 Months</option>
              </select>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={customerData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  formatter={(value) => [`${value.toLocaleString()}`, 'Customers']}
                />
                <Bar dataKey="customers" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Top Strategies */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-800">Top Strategies</h3>
              <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">View All</button>
            </div>
            <div className="space-y-4 max-h-[45vh] overflow-y-auto pr-2">
              {strategyData.map((strategy, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition duration-150 cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-800">{strategy.name}</h4>
                    <span className="text-green-600 font-bold">+${strategy.profit.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-blue-700">{strategy.currency}</span>
                      </div>
                      <span className="text-gray-500 text-sm">{strategy.currency}</span>
                    </div>
                    <div className="flex items-center text-green-600 text-sm">
                      <ArrowUpRight size={14} className="mr-1" />
                      {strategy.growth}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Top Customers */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-800">Top Customers</h3>
              <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">View All</button>
            </div>
            <div className="space-y-4 max-h-[45vh] overflow-y-auto pr-2">
              {customerDataList.map((customer, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition duration-150 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <img src={customer.avatar} alt={customer.name} className="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <h4 className="font-bold text-gray-800">{customer.name}</h4>
                        <p className="text-gray-500 text-sm">{customer.accountCount} accounts</p>
                      </div>
                    </div>
                    <span className="text-green-600 font-bold">+${customer.profit.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default AdminDashboard