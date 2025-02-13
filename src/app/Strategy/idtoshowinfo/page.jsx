'use client'
import React  from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import ReactECharts from 'echarts-for-react';
import MyChart from '@/app/components/Mycharts'
import Link from 'next/link'
function Dashboard() {

    const data = [
        { name: 'Point 1', value: -10 },
        { name: 'Point 2', value: -20 },
        { name: 'Point 3', value: 15 },
        { name: 'Point 4', value: 40 },
        { name: 'Point 5', value: 50 },
        { name: 'Point 1', value: 40 },
        { name: 'Point 2', value: 20 },
        { name: 'Point 3', value: 35 },
        { name: 'Point 1', value: 40 },
        { name: 'Point 1', value: 110 },
        { name: 'Point 2', value: 120 },
        { name: 'Point 3', value: 115 },
        { name: 'Point 4', value: 140 },
        { name: 'Point 5', value: 150 },
        { name: 'Point 1', value: 140 },
        { name: 'Point 2', value: 120 },
        { name: 'Point 3', value: 135 },
        { name: 'Point 1', value: 140 },
        { name: 'Point 1', value: 110 },
        { name: 'Point 2', value: 120 },
        { name: 'Point 3', value: 115 },
        { name: 'Point 4', value: 140 },
        { name: 'Point 5', value: 150 },
        { name: 'Point 1', value: 140 },
        { name: 'Point 2', value: 120 },
        { name: 'Point 3', value: 135 },
        { name: 'Point 1', value: 140 },
        { name: 'Point 2', value: 160 },
        { name: 'Point 3', value: 75 },
        { name: 'Point 3', value: 75 },
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

  const optionPNL = {
    title: {
      text: 'PNL Daily',
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jun'], // Labels for X-axis
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: true, // Show Y-axis line
      },
    },
    series: [
      {
        name: 'Sales',
        type: 'bar', // Bar chart type
        data: [50, 200, 150, 80, 70, 110, -20], // Bar values
        barWidth: '50%', // Width of each bar
        itemStyle: {
            borderRadius: [10, 10, 10, 10],
            color: '#26B7A9', // Bar color
          
        },
      },
    ],
  };


  const optionFreq = {
    title: {
      text: 'Frequency',
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: ['7 days', '15 days', '30 days'], // Labels for X-axis
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: true, // Show Y-axis line
      },
    },
    series: [
      {
        name: 'Sales',
        type: 'bar', // Bar chart type
        data: [15, 67, 144], // Bar values
        barWidth: '50%', // Width of each bar
        itemStyle: {
            borderRadius: [10, 10, 10, 10],
          color: 'rgb(255, 25, 25)', // Bar color
        },
      },
    ],
  };

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



    return (


        <Container>
            <Navbar />
            <div className=' min-h-screen mx-4 md:mx-20 xl:mx-80'>
                <div className=''>
                    <div className=''>
                        <h3 className='head_topic'>Copy Trading Info</h3>
                        <div className='flex space-x-4 font-semibold my-4 text-lg'>
                            <div className='cursor-pointer border-brandColor border-b-4 '>Stats</div>
                            <Link href='/order'>
                              <div className='cursor-pointer'>Orders</div>
                            </Link>
                        </div>
                        <div className='xl:flex gap-2 '>
                            <div className='xl:w-1/3   border p-4 rounded space-y-4 bg-white'>
                                <div className='flex justify-between '>
                                    <div className='w-2/3 '>
                                        <h3 className=' font-bold text-lg'>N9T volume trendlined dsadsa</h3>
                                        <div className='flex w-16 h-10 items-center gap-2'>
                                            <img className='object-fill ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWc7JBahO7-JwjRdbpKFoccdmAmZCBz-y6A&s"></img>
                                            <p>USDJPY</p>
                                        </div>
                                    </div>
                                    <div  className=''>
                                        <button className='bg-[#59A49B] w-fit p-2 rounded text-white'>
                                          <a href='/copy'>Copy</a>
                                        </button>
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 xs:grid-cols-2  gap-2  '>
                                    <div className='flex border items-center p-1 rounded'>
                                        <div className='flex  items-center mx-2'>
                                            <img className='w-10  ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWc7JBahO7-JwjRdbpKFoccdmAmZCBz-y6A&s"></img>
                                        </div>
                                        <div>
                                            <p>Leverage</p>
                                            <p>500</p>
                                        </div>
                                      
                                    </div>
                                    <div className='flex border items-center p-1 rounded'>
                                        <div className='flex  items-center mx-2'>
                                            <img className='w-10 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWc7JBahO7-JwjRdbpKFoccdmAmZCBz-y6A&s"></img>
                                        </div>
                                        <div>
                                            <p>Commission</p>
                                            <p>25%</p>
                                        </div>
                                      
                                    </div>
                                    <div className='flex border items-center p-1 rounded'>
                                        <div className='flex items-center mx-2'>
                                            <img className='w-10 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWc7JBahO7-JwjRdbpKFoccdmAmZCBz-y6A&s"></img>
                                        </div>
                                        <div>
                                            <p>Win rate</p>
                                            <p>75%</p>
                                        </div>
                                      
                                    </div>
                                    <div className='flex border items-center p-1 rounded'>
                                        <div className='flex  items-center mx-2'>
                                            <img className='w-10 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWc7JBahO7-JwjRdbpKFoccdmAmZCBz-y6A&s"></img>
                                        </div>
                                        <div>
                                            <p>Risk Reward Ratio</p>
                                            <p>3.14</p>
                                        </div>
                                    </div>
                                    <div className='flex border items-center p-1 rounded'>
                                        <div className='flex  items-center mx-2'>
                                            <img className=' w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWc7JBahO7-JwjRdbpKFoccdmAmZCBz-y6A&s"></img>
                                        </div>
                                        <div>
                                            <p>Max Drawdown</p>
                                            <p>25%</p>
                                        </div>
                                    </div>
                                    <div className='flex border items-center p-1 rounded'>
                                        <div className='flex items-center mx-2'>
                                            <img className='w-10 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWc7JBahO7-JwjRdbpKFoccdmAmZCBz-y6A&s"></img>
                                        </div>
                                        <div>
                                            <p>Avg Hold Time</p>
                                            <p>3 hours</p>
                                        </div>
                                    </div>

                                </div>
                                <div className='bg-gray-300 w-full p-3 rounded flex items-center justify-between'>
                                    <div className='bg-white rounded w-32 h-20 text-center flex flex-col justify-center ' >
                                        <p>Trades Total</p>
                                        <p className='font-bold'>1499</p>
                                    </div>
                                    <div className='bg-white rounded w-32  h-20 flex' >
                                        <ReactECharts option={optionDough} style={{ height: '100%', width: '100%' }} />

                                    </div>
                                </div>
                                <div className=''>
                                    <div className='flex justify-between '>
                                        <div className='flex items-center '>
                                            <div className='bg-green-500 rounded-3xl w-4 h-4 mr-1'></div>
                                            <p>Trades Won</p>
                                        </div>
                                        <p>1187 / 67%</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='flex items-center '>
                                            <div className='bg-red-500 rounded-3xl w-4 h-4 mr-1'></div>
                                            <p>Trades Lost</p>
                                        </div>
                                        <p>312 / 33%</p>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className='xl:flex xl:flex-wrap xl:w-2/3 w-full border rounded p-4 space-y-4 bg-white'>
                                <div className='flex flex-col md:flex-row w-full   '>
                                    <div className='grid grid-cols-2 md:block mx-4 space-y-4 '>
                                        <div className='md:w-44 border rounded mt-4 '>
                                            <div className='w-10 flex '>
                                                <img className='object-contain mx-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWc7JBahO7-JwjRdbpKFoccdmAmZCBz-y6A&s'></img>
                                                <div>
                                                    <p>1 วัน</p>
                                                    <p>dasasd</p>
                                                </div>
                                            </div>
                                        </div>
                                       
                                        <div className='border rounded '>
                                            <div className='w-10 flex '>
                                                <img className='object-contain mx-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWc7JBahO7-JwjRdbpKFoccdmAmZCBz-y6A&s'></img>
                                                <div>
                                                    <p>7 วัน</p>
                                                    <p>dasasd</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border rounded '>
                                            <div className='w-10 flex '>
                                                <img className='object-contain mx-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWc7JBahO7-JwjRdbpKFoccdmAmZCBz-y6A&s'></img>
                                                <div>
                                                    <p>30 วัน</p>
                                                    <p>dasasd</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border rounded '>
                                            <div className='w-10 flex '>
                                                <img className='object-contain mx-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWc7JBahO7-JwjRdbpKFoccdmAmZCBz-y6A&s'></img>
                                                <div>
                                                    <p>90 วัน</p>
                                                    <p>dasasd</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border rounded '>
                                            <div className='w-10 flex '>
                                                <img className='object-contain mx-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWc7JBahO7-JwjRdbpKFoccdmAmZCBz-y6A&s'></img>
                                                <div className=''>
                                                    <p>ตั้งแต่เริ้มต้น</p>
                                                    <p>dasasd</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className='w-full  my-4'>
                                        <ReactECharts  option={option} style={{ width: '100%', height: '400px' }} />
                                    </div> */}
                                    <div className='w-full  my-4'>
                                        <MyChart  option={option} style={{ height: '400px' }} />
                                    </div>
                                </div>
                                {/* <div className='w-full  xl:w-2/3   border rounded '>
                                    <ReactECharts option={optionPNL} style={{ width: '100%', height: '300px' }}/>
                                </div>
                                <div className='w-full   xl:w-1/3  border rounded'>
                                    <ReactECharts option={optionFreq}  style={{ width: '100%', height: '300px' }} />
                                </div>
                                 */}

                                <div className='w-full  xl:w-2/3    '>
                                    <MyChart option={optionPNL} style={{ height: '300px' }}/>
                                </div>
                                <div className='w-full   xl:w-1/3  '>
                                    <MyChart option={optionFreq} style={{ height: '300px' }}  />
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

export default Dashboard