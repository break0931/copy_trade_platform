import mongoose, { Schema } from "mongoose";

const billSchema = new Schema(
    {
        amount: {
            type: Number,
            required: true
        },
        bill_created: {
            type: Date,
            required: false
        },
        due_date:{
            type: Date,
            require:false
        },
        status:{
            type: String,
            default: 'Unpaid',
            required : false
        },
        session_id:{
            type: String,
            
        },
        mt5_id:{
            type: String,
           
         
        }
      

    },
    { timestamps: true }
)

const Bill = mongoose.models.Bill || mongoose.model("Bill", billSchema);
export default Bill;