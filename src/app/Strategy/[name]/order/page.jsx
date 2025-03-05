// 'use client'
// import React, { useState, useEffect } from 'react'
// import Container from '../../../components/Container'

// import { DatePicker } from "antd";
// import { Table, Select, Button } from "antd";
// import { useParams } from "next/navigation";

// import Link from 'next/link'

// function Order() {
//   const { name } = useParams();  // Access the dynamic part of the URL
//   // Check if the query object is defined before trying to destructure
//   if (!name) {
//     return <div>Loading...</div>;
//   }

//   console.log("name" , name)
//   const { RangePicker } = DatePicker;
//   const { Option } = Select;
//   const [dateRange, setDateRange] = useState(null);
//   const [symbol, setSymbol] = useState("All");
//   const [side, setSide] = useState("All");
//   const [account, setAccount] = useState("All");
//   const [botName, setBotName] = useState("All");

//   const columns = [
//     { title: "Account", dataIndex: "account", key: "account" },
//     { title: "Side", dataIndex: "side", key: "side" },
//     { title: "Entry Time", dataIndex: "entryTime", key: "entryTime" },
//     { title: "Exit Time", dataIndex: "exitTime", key: "exitTime" },
//     { title: "Entry Price", dataIndex: "entryPrice", key: "entryPrice" },
//     { title: "Exit Price", dataIndex: "exitPrice", key: "exitPrice" },
//     { title: "Size", dataIndex: "size", key: "size" },
//     { title: "Profit", dataIndex: "profit", key: "profit" },

//   ];

//   const data = [
//     {
//       key: "1", id: '543425254235',
//       symbol:'XAUUSD',
//       account: "demo2",
//       side: "Short",
//       entryTime: "07/01/2025 05:00:02",
//       exitTime: "09/01/2025 21:00:04",
//       entryPrice: "1.2344",
//       exitPrice: "1.2555",
//       size: 0.47,
//       profit: 167
//     },
//     {
//       key: "4", id: '543425254235',
//       symbol:'XAUUSD',

//       account: "demo2",
//       side: "Short",
//       entryTime: "07/01/2025 05:00:02",
//       exitTime: "09/01/2025 21:00:04",
//       entryPrice: "1.2344",
//       exitPrice: "1.2555",
//       size: 0.47,
//       profit: -17
//     }, {
//       id: '543425254235',
//       symbol:'XAUUSD',

//       key: "5",
//       account: "demo2",
//       side: "Short",
//       entryTime: "07/01/2025 05:00:02",
//       exitTime: "09/01/2025 21:00:04",
//       entryPrice: "1.2344",
//       exitPrice: "1.2555",
//       size: 0.47,
//       profit: -13
//     }, {
//       id: '543425254235',
//       symbol:'XAUUSD',

//       key: "6",
//       account: "demo2",
//       side: "Short",
//       entryTime: "07/01/2025 05:00:02",
//       exitTime: "09/01/2025 21:00:04",
//       entryPrice: "1.2344",
//       exitPrice: "1.2555",
//       size: 0.47,
//       profit: 167
//     }, {      symbol:'XAUUSD',

//       id: '543425254235',

//       key: "7",
//       account: "demo2",
//       side: "Short",
//       entryTime: "07/01/2025 05:00:02",
//       exitTime: "09/01/2025 21:00:04",
//       entryPrice: "1.2344",
//       exitPrice: "1.2555",
//       size: 0.47,
//       profit: 0
//     }, {
//       id: '543425254235',
//       key: "8",      symbol:'XAUUSD',

//       account: "demo2",
//       side: "Short",
//       entryTime: "07/01/2025 05:00:02",
//       exitTime: "09/01/2025 21:00:04",
//       entryPrice: "1.2344",
//       exitPrice: "1.2555",
//       size: 0.47,
//       profit: 167
//     }, {
//       id: '543425254235',
//       key: "9",      symbol:'XAUUSD',

//       account: "demo2",
//       side: "Short",
//       entryTime: "07/01/2025 05:00:02",
//       exitTime: "09/01/2025 21:00:04",
//       entryPrice: "1.2344",
//       exitPrice: "1.2555",
//       size: 0.47,
//       profit: 167
//     },
//   ];

//   const handleSearch = () => {
//     console.log("Date Range:", dateRange);
//     console.log("Symbol:", symbol);
//     console.log("Side:", side);
//     console.log("Account:", account);
//     console.log("Bot Name:", botName);
//   };

//   return (
//     <Container>
      
//       <div className=' min-h-screen'>
//         <div className='head_topic'>Orders</div>
//         <div className='flex space-x-4 font-semibold my-4 text-lg'>
//           <Link  href={`/Strategy/${name}`}>
//             <div className='cursor-pointer  '>Stats</div>
//           </Link>
//           <div className='cursor-pointer border-brandColor border-b-4'>Orders</div>
//         </div>
//         <div className="">
//           <div className="flex flex-wrap items-center gap-4 mb-4">
//             <RangePicker
//               className="w-full md:w-1/4"
//               onChange={(dates) => setDateRange(dates)}
//               format="DD/MM/YYYY"
//             />
//             <Select
//               className="w-full md:w-1/5"
//               value={symbol}
//               onChange={(value) => setSymbol(value)}
//             >
//               <Option value="All">All</Option>
//               <Option value="EURUSD">EURUSD</Option>
//               <Option value="XAUUSD">XAUUSD</Option>
//             </Select>
//             <Select
//               className="w-full md:w-1/5"
//               value={side}
//               onChange={(value) => setSide(value)}
//             >
//               <Option value="All">All</Option>
//               <Option value="Long">Long</Option>
//               <Option value="Short">Short</Option>
//             </Select>
//             <Select
//               className="w-full md:w-1/5"
//               value={account}
//               onChange={(value) => setAccount(value)}
//             >
//               <Option value="All">All</Option>
//               <Option value="demo2">demo2</Option>
//               <Option value="sawadeekub">sawadeekub</Option>
//             </Select>
//             <Select
//               className="w-full md:w-1/5"
//               value={botName}
//               onChange={(value) => setBotName(value)}
//             >
//               <Option value="All">All</Option>
//               <Option value="Demo">Demo</Option>
//             </Select>
//             <div className="flex gap-2">
//               <Button type="primary" onClick={handleSearch}>
//                 Search
//               </Button>
//               <Button onClick={() => window.location.reload()}>Reset</Button>
//             </div>
//           </div>
//           {/* <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} /> */}

//           <div className="w-full border rounded-lg shadow-md bg-white">
//             {/* Table header */}
//             <div className='flex justify-between bg-gray-100 text-gray-700'>
//               <div className=" font-semibold p-4 rounded-t-lg">
//                 Order Details
//               </div>
//             </div>
//             {/* Table content */}
//             <div className="text-gray-600 p-4 space-y-4">
//               {/* Table Header Row */}
//               <div className="hidden md:flex justify-between text-sm font-semibold border-b pb-2">
//                 <div className="w-1/5">Order ID</div>
//                 <div className="w-1/5">Account</div>
//                 <div className="w-1/5">Side</div>
//                 <div className="w-1/5">Symbol</div>
//                 <div className="w-1/5">Entry Time</div>
//                 <div className="w-1/5">Exit Time</div>
//                 <div className="w-1/5">Entry Price</div>
//                 <div className="w-1/5">Exit Price</div>
//                 <div className="w-1/5">Profit</div>

//               </div>

//               {/* Table Rows */}
//               {data.map((data, idx) => (
//                 <div
//                   key={idx}
//                   className="flex flex-col md:flex-row justify-between items-center text-sm border-b pb-2 cursor-pointer hover:bg-gray-100 transition"
//                 // onClick={() => setSelectedBill(data)}
//                 >
//                   <div className="w-full md:w-1/5 mb-2 md:mb-0"><span className='md:hidden font-semibold'>Order ID :</span>{data.id}</div>
//                   <div className="w-full md:w-1/5 mb-2 md:mb-0"><span className='md:hidden font-semibold'>Account:</span>{data.account}</div>
//                   <div className="w-full md:w-1/5 mb-2 md:mb-0"><span className='md:hidden font-semibold'>Side :</span>{data.side}</div>
//                   <div className="w-full md:w-1/5 mb-2 md:mb-0"><span className='md:hidden font-semibold'>Symbol :</span>{data.symbol}</div>

//                   <div className="w-full md:w-1/5 mb-2 md:mb-0"><span className='md:hidden font-semibold'>Entry Time :</span>{data.entryTime}</div>
//                   <div className="w-full md:w-1/5 mb-2 md:mb-0"><span className='md:hidden font-semibold'>Exit Time :</span>{data.exitTime}</div>
//                   <div className="w-full md:w-1/5 mb-2 md:mb-0"><span className='md:hidden font-semibold'>Entry Price :</span>{data.entryPrice}</div>
//                   <div className="w-full md:w-1/5 mb-2 md:mb-0"><span className='md:hidden font-semibold'>Exit Price :</span>{data.exitPrice}</div>
//                   <div
//                     className={`w-full md:w-1/5 font-bold ${data.profit > 0
//                         ? 'text-profit'
//                         : data.profit === 0
//                           ? 'text-gray-600'
//                           : 'text-red-600'
//                       }`}
//                   >
//                     <span className='md:hidden font-semibold text-gray-600'>Profit :</span>{data.profit}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
      
//     </Container>

//   )
// }

// export default Order


// 'use client'
// import React, { useState, useEffect } from 'react'
// import Container from '../../../components/Container'

// import { DatePicker, Table, Select, Button, Badge, Statistic, Card, Tooltip, Tag } from "antd"
// import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'
// import Link from 'next/link'
// import { Line } from 'recharts'
// import { useParams } from 'next/navigation'
// function Order() {
//    const { name } = useParams()
  
//   if (!name) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brandColor"></div>
//       </div>
//     )
//   }
//   const { RangePicker } = DatePicker
//   const { Option } = Select
//   const [dateRange, setDateRange] = useState(null)
//   const [symbol, setSymbol] = useState("All")
//   const [side, setSide] = useState("All")
//   const [account, setAccount] = useState("All")
//   const [botName, setBotName] = useState("All")
//   const [selectedOrder, setSelectedOrder] = useState(null)
//   const [summaryStats, setSummaryStats] = useState({
//     totalProfit: 0,
//     winRate: 0,
//     totalTrades: 0,
//     avgProfit: 0
//   })

//   // Mock data
//   const data = [
//     {
//       key: "1", id: '543425254235',
//       symbol: 'XAUUSD',
//       account: "demo2",
//       side: "Short",
//       entryTime: "07/01/2025 05:00:02",
//       exitTime: "09/01/2025 21:00:04",
//       entryPrice: "1.2344",
//       exitPrice: "1.2555",
//       size: 0.47,
//       profit: 167
//     },
//     {
//       key: "4", id: '543425254235',
//       symbol: 'XAUUSD',
//       account: "demo2",
//       side: "Short",
//       entryTime: "07/01/2025 05:00:02",
//       exitTime: "09/01/2025 21:00:04",
//       entryPrice: "1.2344",
//       exitPrice: "1.2555",
//       size: 0.47,
//       profit: -17
//     },
//     // Other data objects...
//     {
//       id: '543425254235',
//       symbol: 'XAUUSD',
//       key: "9",
//       account: "demo2",
//       side: "Short",
//       entryTime: "07/01/2025 05:00:02",
//       exitTime: "09/01/2025 21:00:04",
//       entryPrice: "1.2344",
//       exitPrice: "1.2555",
//       size: 0.47,
//       profit: 167
//     },
//     {
//       id: '543425254236',
//       symbol: 'XAUUSD',
//       key: "9",
//       account: "demo2",
//       side: "Long",
//       entryTime: "07/01/2025 05:00:02",
//       exitTime: "09/01/2025 21:00:04",
//       entryPrice: "1.2344",
//       exitPrice: "1.2555",
//       size: 0.47,
//       profit: 167
//     },
//   ]

//   // Calculate summary statistics
//   useEffect(() => {
//     const filteredData = data
//     const totalProfit = filteredData.reduce((sum, order) => sum + order.profit, 0)
//     const winningTrades = filteredData.filter(order => order.profit > 0).length
//     const totalTrades = filteredData.length
//     const winRate = totalTrades > 0 ? (winningTrades / totalTrades * 100).toFixed(1) : 0
//     const avgProfit = totalTrades > 0 ? (totalProfit / totalTrades).toFixed(2) : 0

//     setSummaryStats({
//       totalProfit,
//       winRate,
//       totalTrades,
//       avgProfit
//     })
//   }, [ symbol, side, account, botName, dateRange])

//   const handleSearch = () => {
//     console.log("Date Range:", dateRange)
//     console.log("Symbol:", symbol)
//     console.log("Side:", side)
//     console.log("Account:", account)
//     console.log("Bot Name:", botName)
//     // Here you would fetch filtered data from your API
//   }

//   const columns = [
//     { 
//       title: "Order ID", 
//       dataIndex: "id", 
//       key: "id",
//       ellipsis: true,
//       sorter: (a, b) => a.id.localeCompare(b.id)
//     },
//     { 
//       title: "Symbol", 
//       dataIndex: "symbol", 
//       key: "symbol",
//       sorter: (a, b) => a.symbol.localeCompare(b.symbol)
//     },
//     {
//       title: "Account",
//       dataIndex: "account",
//       key: "account",
//       sorter: (a, b) => a.account.localeCompare(b.account)
//     },
//     {
//       title: "Side",
//       dataIndex: "side",
//       key: "side",
//       render: side => (
//         <Tag color={side === "Long" ? "green" : "red"}>
//           {side}
//         </Tag>
//       ),
//       sorter: (a, b) => a.side.localeCompare(b.side)
//     },
//     {
//       title: "Entry Time",
//       dataIndex: "entryTime",
//       key: "entryTime",
//       sorter: (a, b) => new Date(a.entryTime) - new Date(b.entryTime)
//     },
//     {
//       title: "Exit Time",
//       dataIndex: "exitTime",
//       key: "exitTime",
//       sorter: (a, b) => new Date(a.exitTime) - new Date(b.exitTime)
//     },
//     {
//       title: "Entry Price",
//       dataIndex: "entryPrice",
//       key: "entryPrice",
//       sorter: (a, b) => parseFloat(a.entryPrice) - parseFloat(b.entryPrice)
//     },
//     {
//       title: "Exit Price",
//       dataIndex: "exitPrice",
//       key: "exitPrice",
//       sorter: (a, b) => parseFloat(a.exitPrice) - parseFloat(b.exitPrice)
//     },
//     {
//       title: "Size",
//       dataIndex: "size",
//       key: "size",
//       sorter: (a, b) => a.size - b.size
//     },
//     {
//       title: "Profit",
//       dataIndex: "profit",
//       key: "profit",
//       render: profit => (
//         <span style={{ 
//           color: profit > 0 ? 'green' : profit < 0 ? 'red' : 'gray',
//           fontWeight: 'bold'
//         }}>
//           {profit > 0 ? '+' : ''}{profit}
//         </span>
//       ),
//       sorter: (a, b) => a.profit - b.profit
//     },
//   ]

//   return (
//     <Container>
//       <div className='min-h-screen'>
//         <div className='text-3xl font-bold text-gray-900 mb-2 text-2xl font-bold mb-2'>Strategy Details</div>
        
//         {/* Navigation Tabs */}
//         <div className='flex space-x-6 border-b border-gray-200 pb-2 mb-8'>
//             <Link href={`/Strategy/${name}`}>
//                 <div className='cursor-pointer hover:text-brandColor font-medium py-2 px-1 transition-colors'>Stats</div>
//             </Link> 
//             <div className=' cursor-pointer text-brandColor border-brandColor border-b-4 font-semibold py-2 px-1'>Orders</div>
              
//         </div>
        
//         {/* Summary Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//           <Card>
//             <Statistic
//               title="Total Profit/Loss"
//               value={summaryStats.totalProfit}
//               precision={2}
//               valueStyle={{ color: summaryStats.totalProfit >= 0 ? '#3f8600' : '#cf1322' }}
//               prefix={summaryStats.totalProfit >= 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
//               suffix="$"
//             />
//           </Card>
//           <Card>
//             <Statistic
//               title="Win Rate"
//               value={summaryStats.winRate}
//               precision={1}
//               valueStyle={{ color: summaryStats.winRate >= 50 ? '#3f8600' : '#cf1322' }}
//               suffix="%"
//             />
//           </Card>
//           <Card>
//             <Statistic
//               title="Total Trades"
//               value={summaryStats.totalTrades}
//             />
//           </Card>
//           <Card>
//             <Statistic
//               title="Avg. Profit/Trade"
//               value={summaryStats.avgProfit}
//               precision={2}
//               valueStyle={{ color: summaryStats.avgProfit >= 0 ? '#3f8600' : '#cf1322' }}
//               prefix={summaryStats.avgProfit >= 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
//               suffix="$"
//             />
//           </Card>
//         </div>
        
//         {/* Filters Section */}
//         <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
//           <h3 className="text-lg font-semibold mb-4">Filters</h3>
//           <div className="flex flex-wrap items-center gap-4 mb-4">
//             <div className="w-full md:w-auto flex flex-col">
//               <label className="mb-1 text-sm text-gray-600">Date Range</label>
//               <RangePicker
//                 className="w-full"
//                 onChange={(dates) => setDateRange(dates)}
//                 format="DD/MM/YYYY"
//               />
//             </div>
            
//             <div className="w-full md:w-auto flex flex-col">
//               <label className="mb-1 text-sm text-gray-600">Symbol</label>
//               <Select
//                 className="w-full min-w-[120px]"
//                 value={symbol}
//                 onChange={(value) => setSymbol(value)}
//               >
//                 <Option value="All">All</Option>
//                 <Option value="EURUSD">EURUSD</Option>
//                 <Option value="XAUUSD">XAUUSD</Option>
//                 <Option value="GBPUSD">GBPUSD</Option>
//                 <Option value="USDJPY">USDJPY</Option>
//               </Select>
//             </div>
            
//             <div className="w-full md:w-auto flex flex-col">
//               <label className="mb-1 text-sm text-gray-600">Side</label>
//               <Select
//                 className="w-full min-w-[120px]"
//                 value={side}
//                 onChange={(value) => setSide(value)}
//               >
//                 <Option value="All">All</Option>
//                 <Option value="Long">Long</Option>
//                 <Option value="Short">Short</Option>
//               </Select>
//             </div>
            
//             <div className="w-full md:w-auto flex flex-col">
//               <label className="mb-1 text-sm text-gray-600">Account</label>
//               <Select
//                 className="w-full min-w-[120px]"
//                 value={account}
//                 onChange={(value) => setAccount(value)}
//               >
//                 <Option value="All">All</Option>
//                 <Option value="demo2">demo2</Option>
//                 <Option value="sawadeekub">sawadeekub</Option>
//                 <Option value="trading1">trading1</Option>
//               </Select>
//             </div>
            
//             <div className="w-full md:w-auto flex flex-col">
//               <label className="mb-1 text-sm text-gray-600">Bot Name</label>
//               <Select
//                 className="w-full min-w-[120px]"
//                 value={botName}
//                 onChange={(value) => setBotName(value)}
//               >
//                 <Option value="All">All</Option>
//                 <Option value="Demo">Demo</Option>
//                 <Option value="GoldDigger">GoldDigger</Option>
//                 <Option value="FXMaster">FXMaster</Option>
//               </Select>
//             </div>
            
//             <div className="flex gap-2 self-end mt-4 md:mt-0">
//               <Button type="primary" onClick={handleSearch}>
//                 Search
//               </Button>
//               <Button onClick={() => {
//                 setDateRange(null);
//                 setSymbol("All");
//                 setSide("All");
//                 setAccount("All");
//                 setBotName("All");
//               }}>
//                 Reset
//               </Button>
//             </div>
//           </div>
//         </div>
        
//         {/* Orders Table */}
//         <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//           <Table 
//             columns={columns} 
//             dataSource={data} 
//             pagination={{ 
//               pageSize: 10,
//               showSizeChanger: true,
//               showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} orders`
//             }}
//             rowClassName="hover:bg-gray-50 cursor-pointer"
//             onRow={(record) => ({
//               onClick: () => setSelectedOrder(record),
//             })}
//             scroll={{ x: 'max-content' }}
//             summary={pageData => {
//               let totalProfit = 0;
//               pageData.forEach(({ profit }) => {
//                 totalProfit += profit;
//               });
              
//               return (
//                 <>
//                   <Table.Summary.Row>
//                     <Table.Summary.Cell index={0} colSpan={9}>
//                       <strong>Page Total</strong>
//                     </Table.Summary.Cell>
//                     <Table.Summary.Cell index={1}>
//                       <strong style={{ 
//                         color: totalProfit > 0 ? 'green' : totalProfit < 0 ? 'red' : 'gray',
//                       }}>
//                         {totalProfit > 0 ? '+' : ''}{totalProfit}
//                       </strong>
//                     </Table.Summary.Cell>
//                   </Table.Summary.Row>
//                 </>
//               );
//             }}
//           />
//         </div>
        
//         {/* Order Detail Modal would go here */}
//       </div>
//     </Container>
//   )
// }

// export default Order























'use client'
import React, { useState, useEffect } from 'react'
import { 
  TrendingUp, 
  ArrowUp, 
  ArrowDown, 
  ChevronRight, 
  Filter, 
  Calendar, 
  RefreshCw,
  Search,
  Users,
  DollarSign,
  Percent,
  BarChart2
} from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const Order = () => {
  const { name } = useParams()
  
  if (!name) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
      </div>
    )
  }

  // State for filters
  const [dateRange, setDateRange] = useState({ start: '', end: '' })
  const [symbol, setSymbol] = useState("All")
  const [side, setSide] = useState("All")
  const [account, setAccount] = useState("All")
  const [botName, setBotName] = useState("All")
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  // Summary statistics
  const [summaryStats, setSummaryStats] = useState({
    totalProfit: 467,
    winRate: 75.0,
    totalTrades: 4,
    avgProfit: 116.75
  })

  // Mock data
  const data = [
    {
      key: "1", 
      id: '543425254235',
      symbol: 'XAUUSD',
      account: "demo2",
      side: "Short",
      entryTime: "07/01/2025 05:00:02",
      exitTime: "09/01/2025 21:00:04",
      entryPrice: "1.2344",
      exitPrice: "1.2555",
      size: 0.47,
      profit: 167
    },
    {
      key: "2", 
      id: '543425254236',
      symbol: 'EURUSD',
      account: "demo2",
      side: "Long",
      entryTime: "08/01/2025 12:30:15",
      exitTime: "09/01/2025 14:45:22",
      entryPrice: "1.0932",
      exitPrice: "1.0972",
      size: 1.20,
      profit: 150
    },
    {
      key: "3", 
      id: '543425254237',
      symbol: 'GBPUSD',
      account: "trading1",
      side: "Long",
      entryTime: "10/01/2025 09:15:45",
      exitTime: "11/01/2025 16:20:33",
      entryPrice: "1.2687",
      exitPrice: "1.2756",
      size: 0.85,
      profit: 167
    },
    {
      key: "4", 
      id: '543425254238',
      symbol: 'XAUUSD',
      account: "demo2",
      side: "Short",
      entryTime: "07/01/2025 05:00:02",
      exitTime: "09/01/2025 21:00:04",
      entryPrice: "1.2344",
      exitPrice: "1.2555",
      size: 0.47,
      profit: -17
    }
  ]

  // Calculate summary statistics
  useEffect(() => {
    const filteredData = data
    const totalProfit = filteredData.reduce((sum, order) => sum + order.profit, 0)
    const winningTrades = filteredData.filter(order => order.profit > 0).length
    const totalTrades = filteredData.length
    const winRate = totalTrades > 0 ? (winningTrades / totalTrades * 100).toFixed(1) : 0
    const avgProfit = totalTrades > 0 ? (totalProfit / totalTrades).toFixed(2) : 0

    setSummaryStats({
      totalProfit,
      winRate,
      totalTrades,
      avgProfit
    })
  }, [symbol, side, account, botName, dateRange])

  // Handle search
  const handleSearch = () => {
    console.log("Searching with filters:", { dateRange, symbol, side, account, botName })
    // Here you would fetch filtered data from your API
  }

  // Handle reset filters
  const handleReset = () => {
    setDateRange({ start: '', end: '' })
    setSymbol("All")
    setSide("All")
    setAccount("All")
    setBotName("All")
  }

  // Pagination helpers
  const totalPages = Math.ceil(data.length / pageSize)
  const paginatedData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize)
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-2">Strategy Details</h1>
        
        {/* Navigation Tabs */}
        <div className="flex space-x-6 border-b border-gray-800 pb-2 mb-8">
          <Link href={`/Strategy/${name}`} className="cursor-pointer hover:text-cyan-400 font-medium py-2 px-1 transition-all duration-300">
            Stats
          </Link> 
          <div className="cursor-pointer text-cyan-400 border-cyan-400 border-b-4 font-semibold py-2 px-1">
            Orders
          </div>
        </div>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
            <div className="flex items-center text-cyan-400 mb-2">
              <DollarSign className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Total Profit/Loss</span>
            </div>
            <div className="flex items-center">
              <span className={`text-3xl font-bold ${summaryStats.totalProfit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {summaryStats.totalProfit >= 0 ? '+' : ''}{summaryStats.totalProfit}
              </span>
              <span className="text-gray-400 ml-1">$</span>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
            <div className="flex items-center text-cyan-400 mb-2">
              <Percent className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Win Rate</span>
            </div>
            <div className="flex items-center">
              <span className={`text-3xl font-bold ${parseFloat(summaryStats.winRate) >= 50 ? 'text-green-400' : 'text-red-400'}`}>
                {summaryStats.winRate}
              </span>
              <span className="text-gray-400 ml-1">%</span>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
            <div className="flex items-center text-cyan-400 mb-2">
              <BarChart2 className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Total Trades</span>
            </div>
            <span className="text-3xl font-bold">{summaryStats.totalTrades}</span>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
            <div className="flex items-center text-cyan-400 mb-2">
              <TrendingUp className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Avg. Profit/Trade</span>
            </div>
            <div className="flex items-center">
              <span className={`text-3xl font-bold ${parseFloat(summaryStats.avgProfit) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {parseFloat(summaryStats.avgProfit) >= 0 ? '+' : ''}{summaryStats.avgProfit}
              </span>
              <span className="text-gray-400 ml-1">$</span>
            </div>
          </div>
        </div>
        
        {/* Filters Section */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mb-8">
          <div className="flex items-center text-cyan-400 mb-4">
            <Filter className="h-5 w-5 mr-2" />
            <h3 className="text-lg font-semibold">Filters</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
            {/* Date Range */}
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Date Range</label>
              <div className="flex space-x-2">
                <input 
                  type="date" 
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                  value={dateRange.start}
                  onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
                />
                <span className="flex items-center text-gray-500">to</span>
                <input 
                  type="date" 
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                  value={dateRange.end}
                  onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
                />
              </div>
            </div>
            
            {/* Symbol */}
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Symbol</label>
              <select 
                className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
              >
                <option value="All">All</option>
                <option value="EURUSD">EURUSD</option>
                <option value="XAUUSD">XAUUSD</option>
                <option value="GBPUSD">GBPUSD</option>
                <option value="USDJPY">USDJPY</option>
              </select>
            </div>
            
            {/* Side */}
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Side</label>
              <select 
                className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                value={side}
                onChange={(e) => setSide(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Long">Long</option>
                <option value="Short">Short</option>
              </select>
            </div>
            
            {/* Account */}
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Account</label>
              <select 
                className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                value={account}
                onChange={(e) => setAccount(e.target.value)}
              >
                <option value="All">All</option>
                <option value="demo2">demo2</option>
                <option value="sawadeekub">sawadeekub</option>
                <option value="trading1">trading1</option>
              </select>
            </div>
            
            {/* Bot Name */}
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Bot Name</label>
              <select 
                className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                value={botName}
                onChange={(e) => setBotName(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Demo">Demo</option>
                <option value="GoldDigger">GoldDigger</option>
                <option value="FXMaster">FXMaster</option>
              </select>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button 
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center"
              onClick={handleSearch}
            >
              <Search className="h-4 w-4 mr-2" /> Search
            </button>
            <button 
              className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg font-medium hover:border-cyan-500 transition-all duration-300 flex items-center"
              onClick={handleReset}
            >
              <RefreshCw className="h-4 w-4 mr-2" /> Reset
            </button>
          </div>
        </div>
        
        {/* Orders Table */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-max">
              <thead>
                <tr className="bg-gray-900">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Order ID</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Symbol</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Account</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Side</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Entry Time</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Exit Time</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Entry Price</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Exit Price</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Size</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Profit</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((order, index) => (
                  <tr 
                    key={order.key} 
                    className={`hover:bg-gray-700 cursor-pointer transition-colors duration-150 ${index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-750'}`}
                    onClick={() => setSelectedOrder(order)}
                  >
                    <td className="px-4 py-3 text-sm">{order.id}</td>
                    <td className="px-4 py-3 text-sm">{order.symbol}</td>
                    <td className="px-4 py-3 text-sm">{order.account}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${order.side === 'Long' ? 'bg-green-900 text-green-400' : 'bg-red-900 text-red-400'}`}>
                        {order.side === 'Long' ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                        {order.side}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm">{order.entryTime}</td>
                    <td className="px-4 py-3 text-sm">{order.exitTime}</td>
                    <td className="px-4 py-3 text-sm">{order.entryPrice}</td>
                    <td className="px-4 py-3 text-sm">{order.exitPrice}</td>
                    <td className="px-4 py-3 text-sm">{order.size}</td>
                    <td className={`px-4 py-3 text-sm font-bold ${order.profit > 0 ? 'text-green-400' : order.profit < 0 ? 'text-red-400' : 'text-gray-400'}`}>
                      {order.profit > 0 ? '+' : ''}{order.profit}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gray-900">
                  <td colSpan="9" className="px-4 py-3 font-bold text-right">Page Total:</td>
                  <td className={`px-4 py-3 font-bold ${summaryStats.totalProfit > 0 ? 'text-green-400' : summaryStats.totalProfit < 0 ? 'text-red-400' : 'text-gray-400'}`}>
                    {summaryStats.totalProfit > 0 ? '+' : ''}{summaryStats.totalProfit}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-900 border-t border-gray-800">
            <div className="flex items-center text-sm text-gray-400">
              Showing {(currentPage - 1) * pageSize + 1} to {Math.min(currentPage * pageSize, data.length)} of {data.length} orders
            </div>
            <div className="flex space-x-2">
              <button 
                className={`px-3 py-1 rounded-md ${currentPage === 1 ? 'bg-gray-800 text-gray-600 cursor-not-allowed' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button 
                className={`px-3 py-1 rounded-md ${currentPage === totalPages ? 'bg-gray-800 text-gray-600 cursor-not-allowed' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order