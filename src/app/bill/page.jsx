'use client'
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import Footer from '../components/Footer';


      
function Bill() {
  const [selectedBill, setSelectedBill] = useState(null);
  const sampleData = [
    {
      id: '54327754',
      created: '30/01/2568',
      due: '30/02/2568',
      amount: '$1030.25',
      status: 'Unpaid',
      recipient: 'Jenny Rosen',
      sender: 'Rocket Rides',
    },
    {
      id: '54327755',
      created: '31/01/2568',
      due: '28/02/2568',
      amount: '$2045.60',
      status: 'Paid',
      recipient: 'Sam Wilson',
      sender: 'Rocket Rides',
    },
    {
      id: '54327756',
      created: '01/02/2568',
      due: '01/03/2568',
      amount: '$506.15',
      status: 'Expired',
      recipient: 'Alex Morgan',
      sender: 'Rocket Rides',
    },
    {
        id: '54327754',
        created: '30/01/2568',
        due: '30/02/2568',
        amount: '$1030.25',
        status: 'Unpaid',
        recipient: 'Jenny Rosen',
        sender: 'Rocket Rides',
      },
      {
        id: '54327755',
        created: '31/01/2568',
        due: '28/02/2568',
        amount: '$2045.60',
        status: 'Paid',
        recipient: 'Sam Wilson',
        sender: 'Rocket Rides',
      },
      {
        id: '54327756',
        created: '01/02/2568',
        due: '01/03/2568',
        amount: '$506.15',
        status: 'Expired',
        recipient: 'Alex Morgan',
        sender: 'Rocket Rides',
      },  {
        id: '54327754',
        created: '30/01/2568',
        due: '30/02/2568',
        amount: '$1030.25',
        status: 'Unpaid',
        recipient: 'Jenny Rosen',
        sender: 'Rocket Rides',
      },
      {
        id: '54327755',
        created: '31/01/2568',
        due: '28/02/2568',
        amount: '$2045.60',
        status: 'Paid',
        recipient: 'Sam Wilson',
        sender: 'Rocket Rides',
      },
      {
        id: '54327756',
        created: '01/02/2568',
        due: '01/03/2568',
        amount: '$506.15',
        status: 'Expired',
        recipient: 'Alex Morgan',
        sender: 'Rocket Rides',
      },  {
        id: '54327754',
        created: '30/01/2568',
        due: '30/02/2568',
        amount: '$1030.25',
        status: 'Unpaid',
        recipient: 'Jenny Rosen',
        sender: 'Rocket Rides',
      },
      {
        id: '54327755',
        created: '31/01/2568',
        due: '28/02/2568',
        amount: '$2045.60',
        status: 'Paid',
        recipient: 'Sam Wilson',
        sender: 'Rocket Rides',
      },
      {
        id: '54327756',
        created: '01/02/2568',
        due: '01/03/2568',
        amount: '$506.15',
        status: 'Expired',
        recipient: 'Alex Morgan',
        sender: 'Rocket Rides',
      },  {
        id: '54327754',
        created: '30/01/2568',
        due: '30/02/2568',
        amount: '$1030.25',
        status: 'Unpaid',
        recipient: 'Jenny Rosen',
        sender: 'Rocket Rides',
      },
      {
        id: '54327755',
        created: '31/01/2568',
        due: '28/02/2568',
        amount: '$2045.60',
        status: 'Paid',
        recipient: 'Sam Wilson',
        sender: 'Rocket Rides',
      },
      {
        id: '54327756',
        created: '01/02/2568',
        due: '01/03/2568',
        amount: '$506.15',
        status: 'Expired',
        recipient: 'Alex Morgan',
        sender: 'Rocket Rides',
      },
  ];
  const [selectedStatus, setSelectedStatus] = useState("All"); // ค่าเริ่มต้นเป็น Active
  const filteredStatus =
  selectedStatus === "All"
    ? sampleData
    : sampleData.filter((data) => data.status === selectedStatus);

    
    const formatCurrency = (value) =>
        new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
          
  return (
    <Container>
      <Navbar />
      <div className="min-h-screen mx-4 md:mx-10 lg:mx-20 xl:mx-80 ">
        <div className="head_topic">Bill Commission</div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left: Table */}
          <div className="lg:w-2/3 w-full border rounded-lg shadow-md bg-white">
            {/* Table header */}
            <div className='flex justify-between bg-gray-100 text-gray-700'>
                <div className=" font-semibold p-4 rounded-t-lg">
                Bill Details
                </div>
                <div className='flex items-center mx-2'>
                    <select
                        className="p-2 border rounded-md h-10"
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                    >
                        <option value="All">All</option>
                        <option value="Paid">Paid</option>
                        <option value="Unpaid">Unpaid</option>
                        <option value="Expired">Expired</option>
                    </select>
                </div>
                
            </div>
            
            
            {/* Table content */}
            <div className="text-gray-600 p-4 space-y-4">
              {/* Table Header Row */}
              <div className="hidden md:flex justify-between text-sm font-semibold border-b pb-2">
                <div className="w-1/5">Bill ID</div>
                <div className="w-1/5">Bill Created</div>
                <div className="w-1/5">Due Date</div>
                <div className="w-1/5">Amount</div>
                <div className="w-1/5">Status</div>
              </div>

              {/* Table Rows */}
              {filteredStatus.map((bill,idx) => (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row justify-between items-center text-sm border-b pb-2 cursor-pointer hover:bg-gray-100 transition"
                  onClick={() => setSelectedBill(bill)}
                >
                  <div className="w-full md:w-1/5 mb-2 md:mb-0"><span className='md:hidden font-semibold'>Bill ID :</span>{bill.id}</div>
                  <div className="w-full md:w-1/5 mb-2 md:mb-0"><span className='md:hidden font-semibold'>Bill Created :</span>{bill.created}</div>
                  <div className="w-full md:w-1/5 mb-2 md:mb-0"><span className='md:hidden font-semibold'>Due Date :</span>{bill.due}</div>
                  <div className="w-full md:w-1/5 mb-2 md:mb-0"><span className='md:hidden font-semibold'>Amount :</span>{bill.amount}</div>
                  <div
                    className={`w-full md:w-1/5 ${
                      bill.status === 'Unpaid'
                        ? 'text-yellow-600'
                        : bill.status === 'Paid'
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}
                  >
                    <span className='md:hidden font-semibold text-gray-600'>Status :</span>{bill.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Payment Info */}
          <div className="lg:w-1/3 w-full border rounded-lg shadow-md h-80">
            <div className="bg-gray-100 text-gray-700 font-semibold p-4 rounded-t-lg">
              Payment Summary
            </div>
            <div className="p-4">
              {selectedBill ? (
                <>
                  <div className="text-2xl font-bold">{selectedBill.amount}</div>
                  <div className="text-gray-500 mt-1">
                    Due: {selectedBill.due}
                  </div>
                  <div className="text-gray-600 mt-4">
                    <p>
                      To: <span className="font-semibold">{selectedBill.recipient}</span>
                    </p>
                    <p>
                      From: <span className="font-semibold">{selectedBill.sender}</span>
                    </p>
                  </div>
                  <div className="mt-4">
                    <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                      Pay Now
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-gray-500">Select a bill to see details</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default Bill;
