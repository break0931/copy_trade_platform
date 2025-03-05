// 'use client'
// import React, { useState,useEffect } from 'react'
// import { useParams } from 'next/navigation'
// import Container from '../../components/Container'
// import Link from 'next/link'
// import { useSession } from 'next-auth/react'
// import Strategy from '@/app/Strategy/page'
// function Copy() {
//     const { data: session } = useSession();
    
//     const { name } = useParams();  // Access the dynamic part of the URL
//     // Check if the query object is defined before trying to destructure
//     if (!name) {
//         return <div>Loading...</div>;
//     }
//     const decodedName = decodeURIComponent(name);
//     const [strategies,setStrategies] = useState("")
  
//     const fetchMt5Account = async () => {
//         try{
//             const response = await fetch("../api/mt5account", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ user_id: session?.user?.id }),
//             });
            
//             if (!response.ok) {
//                 throw new Error('Failed to fetch data');
//             }
//             const result = await response.json();
//             setMt5accounts(result);
//         } catch(error) {
//             console.error("Error:", error);
//         }
//     };
//     useEffect(()=>{
//         if (session?.user?.id) {
//             fetchMt5Account();
//         }
//     },[session])
//     useEffect(() => {
//         const fetchstrategyinfo = async () => {
//             try{
//                 const response= await fetch("/api/strategyinfo",{
//                     method: "POST",
//                     headers: { "Content-Type": "application/json" },
//                     body: JSON.stringify({ name: name }),
//                 })
//                 if (!response.ok) {
//                 throw new Error(`Error: ${response.status}`);
//                 }
//                 const data = await response.json();
//                 setStrategies(data)
//                 console.log(data)
//             }catch (error) {
//                 console.error('Error fetching strategies:', error);
//             }
//         }  
//         fetchstrategyinfo();
       
//     } , [])


    
//     const [mt5accounts, setMt5accounts] = useState([]);
    
    
    
//     const [selectedType, setSelectedType] = useState("All");
//     const [selectedAccount, setSelectedAccount] = useState(null);
//     // console.log(selectedAccount)
//     // console.log(strategies._id)
//     const filteredAccounts =
//     selectedType === "All" ? mt5accounts : mt5accounts.filter((account) => account.account_type === selectedType);




//     const handleSubmit = async () => {  
//         try{
//             const response = await fetch("/api/subscribed" , {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ user_id: session?.user?.id , 
//                                        mt5_id : selectedAccount.mt5_id,
//                                        strategy_id : strategies._id
//                 }),
//             })
             
//             if (!response.ok) {
//                 throw new Error('Failed to fetch data');
//             }

//         }catch(error){
//             console.log(error);
//         }
//     }

//     return (
//         <Container>
//             <div className='min-h-screen w-full px-4 md:px-0 md:w-3/4 lg:w-1/2 mx-auto py-4'>
//                 <div className='border rounded-xl bg-white shadow-sm overflow-hidden'>
//                     {/* Header Section */}
//                     <div className='p-4'>
//                         <div className='flex flex-wrap items-center gap-2 sm:gap-4'>
//                             <Link href={`/Strategy/${strategies.name}`} className="flex-shrink-0">
//                                 <div className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//                                     <svg width="14" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M7 1L1 7L7 13" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                                     </svg>
//                                 </div>
//                             </Link>
                            
//                             <div className='flex-1 text-lg sm:text-2xl font-bold truncate'>
//                                 {decodedName }
//                             </div>
                            
//                             <div className='flex items-center ml-auto space-x-2'>
//                                 <img className='object-contain w-8 h-8 sm:w-10 sm:h-10' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWc7JBahO7-JwjRdbpKFoccdmAmZCBz-y6A&s' alt="Currency icon" />
//                                 <span className='whitespace-nowrap'>{strategies.symbol}</span>
//                             </div>
//                         </div>
//                     </div>
                    
//                     {/* Filter Section */}
//                     <div className='px-4 sm:px-8 py-4 border-t border-b flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3'>
//                         <h3 className='text-lg font-bold'>Select MT5 account</h3>
//                         <div>
//                             <select
//                                 className="p-2 border rounded-md w-full"
//                                 value={selectedType}
//                                 onChange={(e) => setSelectedType(e.target.value)}
//                             >
//                                 <option value="All">All</option>
//                                 <option value="real">Real</option>
//                                 <option value="demo">Demo</option>
//                             </select>
//                         </div>
//                     </div>
                    
//                     {/* Accounts List */}
//                     <div className='p-4 space-y-4 max-h-[60vh] overflow-y-auto'>
//                         <div className='flex flex-col items-center space-y-4'>
//                             {filteredAccounts.map((account, index) => (
//                                 <div
//                                     key={index}
//                                     onClick={() => setSelectedAccount(account)}
//                                     className={`bg-[#1A2432] w-full sm:w-4/5 md:w-3/4 p-4 sm:p-6 rounded-lg cursor-pointer transition-all duration-300 ${
//                                         selectedAccount?.mt5_id === account.mt5_id
//                                         ? 'scale-105 shadow-lg'
//                                         : 'hover:translate-y-[-4px]'
//                                     }`}
//                                 >
//                                     <div className='flex flex-wrap gap-2 mb-2'>
//                                         <div className={`px-2 py-1 rounded text-xs text-white font-medium ${
//                                             account.account_type === 'real'
//                                             ? 'bg-[#024035]'
//                                             : 'bg-[#BAAA00]'
//                                         }`}>
//                                             {account.account_type}
//                                         </div>
//                                         <div className='bg-[#2E3849] px-2 py-1 rounded text-xs text-white font-medium'>MT5</div>
//                                     </div> 
//                                     <div className='text-white mt-2'>{account.name}</div>
//                                     <div className='text-gray-300 font-bold mt-1'>ID: {account.mt5_id}</div>
//                                     <div className='flex justify-between items-center mt-2'> 
//                                         <div className='text-xl sm:text-2xl font-bold text-white'>$10000</div>
//                                         {selectedAccount?.mt5_id === account.mt5_id && (
//                                             <div className='bg-brandColor flex items-center justify-center rounded w-8 h-8 sm:w-10 sm:h-10'> 
//                                                 <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1A2432">
//                                                     <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
//                                                 </svg>
//                                             </div>
//                                         )}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
                    
//                     {/* Footer Button */}
//                     <div className='p-4 sm:p-6 border-t'>
//                         <Link className='block w-full' href="/dashboard">
//                             <button className='w-full rounded-lg p-3 bg-brandColor text-white font-medium hover:opacity-90 transition-opacity' onClick={handleSubmit}>
//                                 Done
//                             </button>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </Container>
//     )
// }

// export default Copy



'use client'
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Container from '../../components/Container'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { ChevronLeft, Check, TrendingUp, DollarSign, Zap } from 'lucide-react'

function Copy() {
    const { data: session } = useSession();
    
    const { name } = useParams();  // Access the dynamic part of the URL
    // Check if the query object is defined before trying to destructure
    if (!name) {
        return (
            <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
                <div className="animate-pulse text-cyan-400">Loading...</div>
            </div>
        );
    }
    const decodedName = decodeURIComponent(name);
    const [strategies, setStrategies] = useState("");
    const [mt5accounts, setMt5accounts] = useState([]);
    const [selectedType, setSelectedType] = useState("All");
    const [selectedAccount, setSelectedAccount] = useState(null);
  
    const fetchMt5Account = async () => {
        try{
            const response = await fetch("../api/available_mt5", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ user_id: session?.user?.id }),
            });
            
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const result = await response.json();
            setMt5accounts(result);
        } catch(error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        if (session?.user?.id) {
            fetchMt5Account();
        }
    }, [session]);

    
    const fetchstrategyinfo = async () => {
        try{
            const response = await fetch("/api/strategyinfo", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: name }),
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            setStrategies(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching strategies:', error);
        }
    }  
    useEffect(() => {
       
        fetchstrategyinfo();
    }, []);
    
    const filteredAccounts =
        selectedType === "All" 
            ? mt5accounts 
            : mt5accounts.filter((account) => account.account_type === selectedType);

    const handleSubmit = async () => {  
        try{
            const response = await fetch("../api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                  
                    mt5_id: selectedAccount.mt5_id,
                    strategie_id: strategies._id
                }),
            });
             
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white">
        
                <div className="max-w-3xl mx-auto py-8 px-4">
                    <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-lg overflow-hidden">
                        {/* Header Section */}
                        <div className="p-6 border-b border-gray-700">
                            <div className="flex items-center gap-4">
                                <Link href={`/Strategy/${strategies.name}`} className="flex-shrink-0">
                                    <div className="p-2 hover:bg-gray-700 rounded-full transition-colors">
                                        <ChevronLeft className="h-5 w-5 text-cyan-400" />
                                    </div>
                                </Link>
                                
                                <div className="flex-1 text-xl md:text-2xl font-bold truncate">
                                    {decodedName}
                                </div>
                                
                                <div className="flex items-center ml-auto space-x-2">
                                    <div className="bg-gray-700 p-2 rounded-lg">
                                        <TrendingUp className="h-5 w-5 text-cyan-400" />
                                    </div>
                                    <span className="text-cyan-400 font-medium whitespace-nowrap">{strategies.symbol}</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Filter Section */}
                        <div className="px-6 py-4 border-b border-gray-700 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                            <h3 className="text-lg font-bold text-white">Select MT5 account</h3>
                            <div>
                                <select
                                    className="p-2 bg-gray-700 border border-gray-600 rounded-lg text-white w-full focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                    value={selectedType}
                                    onChange={(e) => setSelectedType(e.target.value)}
                                >
                                    <option value="All">All</option>
                                    <option value="real">Real</option>
                                    <option value="demo">Demo</option>
                                </select>
                            </div>
                        </div>
                        
                        {/* Accounts List */}
                        <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto bg-gray-900">
                            <div className="flex flex-col items-center space-y-4">
                                {filteredAccounts.length > 0 ? (
                                    filteredAccounts.map((account, index) => (
                                        <div
                                            key={index}
                                            onClick={() => setSelectedAccount(account)}
                                            className={`w-full sm:w-4/5 p-4 rounded-lg cursor-pointer transition-all duration-300 border ${
                                                selectedAccount?.mt5_id === account.mt5_id
                                                ? 'scale-105 shadow-lg border-cyan-500 bg-gray-800'
                                                : 'border-gray-700 bg-gray-800 hover:border-cyan-500 hover:translate-y-[-4px]'
                                            }`}
                                        >
                                            <div className="flex flex-wrap gap-2 mb-2">
                                                <div className={`px-2 py-1 rounded text-xs text-white font-medium ${
                                                    account.account_type === 'real'
                                                    ? 'bg-gradient-to-r from-green-600 to-green-700'
                                                    : 'bg-gradient-to-r from-yellow-600 to-yellow-700'
                                                }`}>
                                                    {account.account_type}
                                                </div>
                                                <div className="bg-gray-700 px-2 py-1 rounded text-xs text-cyan-400 font-medium">MT5</div>
                                            </div> 
                                            <div className="text-white mt-2 font-medium">{account.name}</div>
                                            <div className="text-gray-400 font-bold mt-1">ID: {account.mt5_id}</div>
                                            <div className="flex justify-between items-center mt-3"> 
                                                <div className="flex items-center">
                                                    <DollarSign className="h-5 w-5 text-cyan-400 mr-1" />
                                                    <span className="text-xl font-bold text-white">10,000</span>
                                                </div>
                                                {selectedAccount?.mt5_id === account.mt5_id && (
                                                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full p-1.5"> 
                                                        <Check className="h-5 w-5 text-white" />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-8 text-gray-400">
                                        No available MT5 accounts found
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        {/* Footer Button */}
                        <div className="p-6 border-t border-gray-700 bg-gray-800">
                            <Link className="block w-full" href="/subscribed">
                                <button 
                                    onClick={handleSubmit}
                                    disabled={!selectedAccount}
                                    className={`w-full rounded-lg p-3 font-medium transition-all duration-300 flex items-center justify-center ${
                                        selectedAccount 
                                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-cyan-500/30 hover:shadow-lg text-white' 
                                            : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                    }`}
                                >
                                    {selectedAccount ? (
                                        <>Start Copy Trading <Zap className="ml-2 h-5 w-5" /></>
                                    ) : (
                                        'Select an account to continue'
                                    )}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default Copy