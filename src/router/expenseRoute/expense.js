import express from "express";
const router = new express.Router();
import { expenseObj } from "../../controller/expense/expense.js";

router.route("/")
.post(expenseObj.addExpense)
.get(expenseObj.getExpense);

router.route("/:id")
.patch(expenseObj.updateExpense)
.delete(expenseObj.deleteExpense);

export default router;