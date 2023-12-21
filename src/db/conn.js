import mongoose from "mongoose";

export const connectDB = async() =>{
    try {
        const DB_URI = process.env.DB_URI;
        const connect = await mongoose.connect(DB_URI);

        if(connect)
            console.log(`Db connected successfully......`);

    } catch (error) {
        throw new Error(error.message);       
    }
}