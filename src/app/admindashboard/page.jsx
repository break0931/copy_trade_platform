'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Container from '../components/Container'
import LineChart from '../components/LineChart';

function AdminDashboard() {
  
  return (
    <Container>
      <Navbar />
      <div className='min-h-screen mx-4 md:mx-20 xl:mx-80'>
        <div className='head_topic'> Admin Dashboard</div>
        <a href="/Adobe Scan 06 ม.ค. 2025 (3).pdf" target="_blank" rel="noopener noreferrer">
          Open PDF
        </a>
        {/* Header Section */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-200 p-4 rounded-lg text-center">
            <h2 className="text-3xl font-bold">300.45 K</h2>
            <p className="text-gray-600">Total Revenue</p>
            <p className="text-green-500 font-bold mt-2">+34% </p>
            <p className='text-gray-600'>This month</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg text-center">
            <h2 className="text-3xl font-bold">300.45 K</h2>
            <p className="text-gray-600">Total Customer</p>
            <p className="text-green-500 font-bold mt-2">+34% </p>
            <p className='text-gray-600'>This month</p>
          </div>
        </div>

        {/* Earnings Chart */}
        <div className=" rounded-lg p-6 mb-4 ">
          <h3 className="text-lg font-bold mb-2">Revenues</h3>
          <div className="h-80 ">
            {/* Simple Line Chart */}
            <div className="h-80 relative">
            {/* Simple Line Chart */}
              <LineChart/>
            </div>
          </div>
        </div>
        {/* Customer Chart */}
        <div className=" rounded-lg p-6 mb-4 ">
          <h3 className="text-lg font-bold mb-2">Customers</h3>
          <div className="h-80 ">
            {/* Simple Line Chart */}
           <LineChart/>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Top Strategies </h3>
            <ul className="space-y-2 max-h-[45vh] overflow-y-auto">
              <li className="bg-white  rounded-lg h-fit p-2 cursor-pointer">
                <h3 className=' font-bold text-lg'>N9T volume trendlined dsadsa</h3>
                <div className='lg:flex justify-between'>
                  <div className='flex w-16 h-10 items-center gap-2'>
                    <img className='object-fill ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWc7JBahO7-JwjRdbpKFoccdmAmZCBz-y6A&s"></img>
                    <p>USDJPY</p>
                  </div>
                  <div className=' font-bold m-2'>+$44,698</div>
                </div>
              </li>
              <li className="bg-white  rounded-lg h-fit p-2 cursor-pointer">
                <h3 className=' font-bold text-lg'>N9T volume trendlined dsadsa</h3>
                <div className='lg:flex justify-between'>
                  <div className='flex w-16 h-10 items-center gap-2'>
                    <img className='object-fill ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWc7JBahO7-JwjRdbpKFoccdmAmZCBz-y6A&s"></img>
                    <p>USDJPY</p>
                  </div>
                  <div className=' font-bold m-2'>+$44,698</div>
                </div>
              </li>
              <li className="bg-white  rounded-lg h-fit p-2 cursor-pointer">
                <h3 className=' font-bold text-lg'>N9T volume trendlined dsadsa</h3>
                <div className='lg:flex justify-between'>
                  <div className='flex w-16 h-10 items-center gap-2'>
                    <img className='object-fill ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWc7JBahO7-JwjRdbpKFoccdmAmZCBz-y6A&s"></img>
                    <p>USDJPY</p>
                  </div>
                  <div className=' font-bold m-2'>+$44,698</div>
                </div>
              </li>
              <li className="bg-white  rounded-lg h-fit p-2 cursor-pointer">
                <h3 className=' font-bold text-lg'>N9T volume trendlined dsadsa</h3>
                <div className='lg:flex justify-between'>
                  <div className='flex w-16 h-10 items-center gap-2'>
                    <img className='object-fill ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWc7JBahO7-JwjRdbpKFoccdmAmZCBz-y6A&s"></img>
                    <p>USDJPY</p>
                  </div>
                  <div className='font-bold m-2'>+$44,698</div>
                </div>
              </li>
              <li className="bg-white  rounded-lg h-fit p-2 cursor-pointer">
                <h3 className=' font-bold text-lg'>N9T volume trendlined dsadsa</h3>
                <div className='lg:flex justify-between'>
                  <div className='flex w-16 h-10 items-center gap-2'>
                    <img className='object-fill ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWc7JBahO7-JwjRdbpKFoccdmAmZCBz-y6A&s"></img>
                    <p>USDJPY</p>
                  </div>
                  <div className=' font-bold m-2'>+$44,698</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Top Customer </h3>
            <ul className="space-y-2 max-h-[45vh] overflow-y-auto">
              <li className="bg-white rounded-lg h-fit cursor-pointer" >
                <div className='lg:flex justify-between p-2'>
                  <div className='flex '>
                      <div className='flex w-10 h-10 items-center gap-2'>
                        <img className='object-fill ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWc7JBahO7-JwjRdbpKFoccdmAmZCBz-y6A&s"></img>
                      </div>
                      <div>
                        <p className='font-bold'>Athichat</p>
                        <p className='text-gray-600'>total account 15</p>
                      </div>
                    
                  </div>
                  <div className='text-profit font-bold m-2'>
                    +$4,553
                  </div>
                </div>
              </li>
              <li className="bg-white rounded-lg h-16 cursor-pointer" ></li>
              <li className="bg-white rounded-lg h-16 cursor-pointer" ></li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </Container>
  )
}

export default AdminDashboard