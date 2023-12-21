import Expense from "../../model/expense/expense.js";


class ExpenseTrack {
    addExpense = async(req,res) =>{
        try {
            const {date,description,amount} = req.body;

            if(!date || !description || !amount) {
                return res.status(406).json({status:406,message:"Empty field should not acceptable."})
            }

            const expenseObj = new Expense({
                date,description,amount
            });

            const expenseData = await expenseObj.save();

            return res.status(201).json({status:201,expense:expenseData});
        } catch (error) {
            return res.status(400).json({status:400,error:error.message});
        }
    }

    updateExpense = async(req,res) =>{
        try {
            const { id } = req.params;
            const {date,description,amount} = req.body;

            if(!date || !description || !amount)
                return res.status(406).json({status:406,message:"Empty field should not acceptable."})

            const expense = await Expense.findOne({ _id:id });

            if(!expense) 
                return res.status(404).json({status:404,message:"Expense not found."})


            await Expense.findByIdAndUpdate(expense._id,{
                $set:{
                    date,description,amount
                }
            });

            return res.status(200).json({status:200,message:"Expense updated successfully."})            
        } catch (error) {
            console.log(error);
            return res.status(400).json({status:400,error:error.message});
        }
    }

    deleteExpense = async(req,res) =>{
        try {
            const { id } = req.params;

            const expense = await Expense.findOne({ _id:id });

            if(!expense) 
                return res.status(404).json({status:404,message:"Expense not found."})


            await Expense.findByIdAndDelete(expense._id);

            return res.status(200).json({status:200,id:expense._id,message:"Expense removed successfully."})            
        } catch (error) {
            return res.status(400).json({status:400,error:error.message});
        }
    }

    getExpense = async(req,res) =>{
        try {
            const expense = await Expense.find().sort({ createdAt:-1 });
            return res.status(200).json({status:200,expense})         
        } catch (error) {
            return res.status(400).json({status:400,error:error.message});
        }
    }

    getRecentExpense = async(req,res) =>{
        try {
            const expense = await Expense.find();
            return res.status(200).json({status:200,expense})         
        } catch (error) {
            return res.status(400).json({status:400,error:error.message});
        }
    }

}

const expenseObj = new ExpenseTrack();
export { expenseObj };