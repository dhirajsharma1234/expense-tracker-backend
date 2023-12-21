import "dotenv/config.js"
import express from "express";
import cors from "cors";
import router from "./router/route.js";
import morgan from "morgan";
import helmet from "helmet";
import { connectDB } from "./db/conn.js";
const app = express();

const PORT = process.env.PORT || 8006

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));

app.use("/api",router);


app.listen(PORT,async() =>{
    console.log(`server is listening to the port ${PORT}`);
    await connectDB()
})
