import bcryptjs from "bcryptjs";

const hashPass = async(pass) =>{
    try {
        const password = await bcryptjs.hash(pass,12);
        return password;
    } catch (error) {
        throw new Error(error.message);
    }
}

const compPass = async(pass,userPass) =>{
    try {
        const comparePass = await bcryptjs.compare(pass,userPass);

        if(!comparePass) throw new Error("Password Mismatch!");

        return comparePass;
    } catch (error) {
        throw new Error(error.message);
    }
}


export { hashPass,compPass }