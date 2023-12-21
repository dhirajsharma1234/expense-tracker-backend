import mongoose from "mongoose";

const userSchema =  new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    username:{
        type:String,
        required:true,
        trim:true,
        minLength:4
    },
    email:{
        type:String,
        trim:true,
        unique:true,
        required:true,
        lowercase:true
    },
    password:{
        type:String,
        required:[true,"Password Required."],
        minLength:8,
        trim:true
    },
},{
    timestamps:true
});

const User = new mongoose.model("User",userSchema);

export { User };