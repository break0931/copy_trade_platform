import { NextResponse } from 'next/server'
import { connectMongoDB } from '../../../../lib/mongodb';

import Subscribe from '../../../../models/subscribe';
import { message } from 'antd';


export async function POST(req) {

  const {mt5_id,strategie_id} = await req.json();
  console.log( "mt5id   " , mt5_id ,  "  strategy   " , strategie_id);
  if (  !mt5_id || !strategie_id ) return NextResponse.json({ error: "Missing params" }, { status: 400 });

  try {
    await connectMongoDB();
    const newSubscribed = new Subscribe({
        strategie_id : strategie_id,
        mt5_id : mt5_id,
        status : "active" 
    })
    await newSubscribed.save();
    // result.map(doc => doc.mt5Account);
    return NextResponse.json( {message: "Subscribe Strategy success"} , { status: 200 });
  
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
