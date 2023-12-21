import express from "express";
import expenseRouter from "./expenseRoute/expense.js"
import userRouter from "./user/user.js"
const router = new express.Router();

router.use("/expense",expenseRouter);
router.use("/user",userRouter);

export default router;