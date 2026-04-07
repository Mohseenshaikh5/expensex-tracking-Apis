const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expense.controller");

router.post("/create_expense", expenseController.createExpense);
router.get("/expenses", expenseController.getExpenses);
router.get("/expenses/:id", expenseController.getExpenseById);
router.put("/expenses/:id", expenseController.updateExpense);
router.delete("/expenses/:id", expenseController.deleteExpense);

module.exports = router;