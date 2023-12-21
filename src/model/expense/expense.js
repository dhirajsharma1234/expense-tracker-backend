import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    date:{
        type:Date,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        trim:true,
        required:true
    }
},{
    timestamps:true
});

const Expense = new mongoose.model("Expense",expenseSchema);

export default Expense;