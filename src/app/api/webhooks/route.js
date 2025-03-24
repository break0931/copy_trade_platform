import { buffer } from 'micro';
import Stripe from 'stripe';
import { NextResponse } from 'next/server'; // Import NextResponse
import { headers } from 'next/headers';
import { connectMongoDB } from '../../../../lib/mongodb';
import mongoose from 'mongoose';
import Bill from '../../../../models/bill';
import { UpdateModeEnum } from 'chart.js';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


export async function POST(req) {

    let event;

    try {
        const stripeSignature = (await headers()).get('stripe-signature');

        event = stripe.webhooks.constructEvent(
            await req.text(),
            stripeSignature,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (err) {
        console.error('Error verifying webhook signature:', err.message);
        return NextResponse.json({ error: `Webhook error: ${err.message}` }, { status: 400 });
    }
    // Successfully constructed event.
    console.log('✅ Success:', event.id);


    // Step 4: Handle the webhook event



    switch (event.type) {
        case 'checkout.session.completed':
            await connectMongoDB()
            const session = event.data.object;
            const bill_id = new mongoose.Types.ObjectId(session.metadata?.bill_id);

            console.log('✅ Payment successful:', event.data.object.payment_status);
            await Bill.find({ _id: bill_id })
            await Bill.findOneAndUpdate(
                { _id: bill_id },
                { status: "Paid" },
                { new: true }

            )
            return NextResponse.json({ success: true });
        case 'payment_intent.succeeded':
            console.log('💰 PaymentIntent was successful!', event.data.object.status);
            break;
        case 'payment_intent.payment_failed':
            console.log('❌ Payment failed!', event.data.object.last_payment_error?.message);
            break;
        default:
            console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
}
