import jwt from "jsonwebtoken";

const createToken = ({ _id,email }) =>{
    try {
        const token =  jwt.sign({ _id,email,date: Date.now() / 1000 },process.env.SECRET_KEY,{
            expiresIn:"2h"
        });
        return token;
    } catch (error) {
        throw new Error(error.message);
    }
    
}

export { createToken };