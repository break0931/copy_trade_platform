'use client'
import React, { useState } from "react";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Container from '../components/Container'
import MyChart from "../components/Mycharts";
import ReactECharts from 'echarts-for-react';
import AccountMenu from "../components/AccountMenu";
import Link from "next/link";
function Dashboard() {

    const optionDough = {
    title: {
      text: 'Doughnut Chart Example',
      left: 'center'
      ,
      show:false
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
      ,
      show:false
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      show:false
    },
    series: [
      {
        name: 'Category',
        type: 'pie',
        radius: ['40%', '70%'], // Inner radius and outer radius
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'outside',
          formatter: '{b}: {d}%' // Label format
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Won' },
          { value: 735, name: 'Lost' },
      
        ]
      }
    ]
    };
    const data = [
      { name: 'Point 2', value: 100 },
      { name: 'Point 1', value: 110 },
      { name: 'Point 1', value: 120 },
      { name: 'Point 2', value: 130 },
      { name: 'Point 2', value: 100 },
      { name: 'Point 1', value: 110 },
      { name: 'Point 1', value: 120 },
      { name: 'Point 2', value: 130 },
      { name: 'Point 3', value: 145 },
      { name: 'Point 4', value: 150 },
      { name: 'Point 5', value: 155 },
      { name: 'Point 1', value: 125 },
    
      
    ];
    const option = {
      title: {
        text: 'Profit',
      },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: data, // Labels
    },
    yAxis: {
      type: 'value',
      
      axisLine: {
        show: true, // Shows the Y-axis line
      },
      splitLine: {
        show: true, // Adds grid lines
      },
    },
    series: [
      {
        name: 'Data',
        type: 'line',
        data: data, // Positive and negative values
        areaStyle: {}, // Enables the filled area
        smooth: true, // Makes the line smooth
        symbol: 'none',
        lineStyle: {
          color: '#71E0D1', // Line color
        },
        itemStyle: {
          color: '#71E0D1', // Point color
        },
      },
    ],
    };

    const accountData = [  
        {id:234264313, accountName:'The OA' , amount:100000 , accountType:'Demo'},
        {id:123321355 , accountName:'The OA33' , amount:120000 , accountType:'Real'},
        {id:432431236 , accountName:'The OA55' , amount:130000 , accountType:'Real'},
        {id:527653137, accountName:'TheDDDD' , amount:40000 , accountType:'Demo'},
    ];
    const [selectedType, setSelectedType] = useState("All"); // ค่าเริ่มต้นเป็น Real

    const filteredAccounts =
    selectedType === "All"
      ? accountData
      : accountData.filter((account) => account.accountType === selectedType);


   
    return (


        <Container>
            <Navbar />
            <div className='min-h-screen mx-4 md:mx-20 xl:mx-80 '>
              <div className="head_topic">Dashboard</div>
              <div >
               
                
                  <div className="sm:flex  sm:space-x-4 mb-8">
                      
                      <div className=" h-80 xs:h-auto rounded flex flex-col xs:flex-row xs:flex-wrap bg-white p-2 border">
                          {/* Headline Section */}
                          <div className="w-full m-2">
                              <h3 className="text-2xl font-bold">Account Overview</h3>
                              <h3 className="text-lg font-bold">CTRLC Billionares</h3>
                          </div>

                          {/* Doughnut Chart */}
                          <div className="h-36 w-full flex  justify-start items-center">
                              <ReactECharts option={optionDough} style={{ height: '100%', width: '50%' }} />
                              <div className="  ">
                                  <div className="font-bold text-xl">$73,000</div>
                                  <div className="font-bold">Today's PNL</div>
                                  <div className="text-[#00FF9B] font-bold hover:scale-125 cursor-pointer duration-300 mx-1">+$986</div>
                                  <Link href='/Strategy/idtoshowinfo'>
                                      <div className="text-blue-600 cursor-pointer text-sm hover:underline">View Analysis</div>

                                  </Link>
                              </div>
                          </div>

                          {/* Info Section */}
                        
                      </div>

                    
                      <div className="w-full  rounded bg-white p-4 border">
                          <MyChart option = {option} style = {{ height:'250px'}}/>
                      </div>
                </div>
                <div className="head_topic">MT5 Accounts</div>

                <div className="grid grid-cols-2 md:grid-cols-3  text-white gap-4 ">
                  {filteredAccounts.map((account, index) => (
                      <div
                          key={index}
                          className='bg-[#1A2432] border  h-40 p-8 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300'   
                      >
                          <div className="flex items-center justify-between">
                              <div className='flex space-x-2 mb-2'>
                                  <div className={`bg-[#024035] w-max px-2 rounded  text-xs text-center ${
                                      account.accountType === 'Real'
                                      ? 'bg-[#024035]'
                                      : 'bg-[#BAAA00]'
                                  }`}>
                                      {account.accountType}
                                  </div>
                                  <div className='bg-[#2E3849] w-max px-2 rounded text-xs text-center'>MT5</div>
                              </div>
                              <AccountMenu/>
                          </div>
                           
                          <div> {account.accountName}</div>
                          <div className='text-gray-300 font-bold'> {account.id}</div>
                          <div className='text-2xl font-bold'>${account.amount}</div>
                            
                        
                        
                      </div>
                      ))}
                      <Link href='/addaccount'>
                          <div className="border text-black h-40 p-8 rounded-lg flex justify-center items-center cursor-pointer hover:scale-105 transition-transform duration-300">
                              add MT5 account
                          </div>
                      </Link>
                     
                </div>
              </div>
              
            </div>
            <Footer />
        </Container>


    )
}

export default Dashboard