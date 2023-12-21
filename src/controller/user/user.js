import { compPass, hashPass } from "../../util/encryptDecrypt.js";
import { createToken } from "../../util/generateToken.js";
import { User } from "../../model/User/user.js";


class Users {
    register = async(req,res) => {
        try {
            const { name,username,email,password } = req.body;

            if(!name || !username || !email || !password){
                return res.status(406).json({status:406, message:"Empty Field should not acceptable."});
            }
    
            const user = await User.findOne({ email });
    
            if(user) {
                return res.status(400).json({status:400, message:"User Already Registered."});
            }
    
            //encrypt pass
            const pass = await hashPass(password);
    
            const userInstance = new User({
                name,username,email,password:pass,
            });
    
            const userData = await userInstance.save();
    
            const token = createToken(userData);
    
            return res.status(201).json({status:201,user:userData,token});
        } catch (error) {
            return res.status(400).json({ status: 400, message: error.message });
        }
    }
    
    login = async(req,res) =>{
        try {
            const { email,password } = req.body;
    
            const user = await User.findOne({ email });
    
            if(!user) {
                return res.status(400).json({status:400,message:"User not registered."});
            }
    
            const checkPass = await compPass(password,user.password);
    
            const token = createToken(user);
    
            const userWithoutPassword = { ...user._doc };
            delete userWithoutPassword.password;
    
            return res.status(200).json({status:200,message:"Login Successfull!",user:userWithoutPassword,token});
        } catch (error) {
            console.log(error);
            return res.status(400).json({ status: 400, message: error.message });
              
        }
    }
}

const user = new Users();
export { user };