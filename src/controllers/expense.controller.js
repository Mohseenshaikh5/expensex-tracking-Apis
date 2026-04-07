const asyncHandler = require("../utils/asyncHandler");
const expenseService = require("../services/expense.service");

exports.createExpense = asyncHandler(async (req, res) => {
  const expense = await expenseService.createExpense(req.body);
  res.status(201).json({ msg: "Expense created successfully", data: expense });
});

exports.getExpenses = asyncHandler(async (req, res) => {
  const expenses = await expenseService.getExpenses();
  res.status(200).json({ msg: "Expenses retrieved successfully", data: expenses });
});

exports.getExpenseById = asyncHandler(async (req, res) => {
  const expense = await expenseService.getExpenseById(req.params.id);
  if (!expense) {
    return res.status(404).json({ msg: "Expense not found" });
  }
  res.status(200).json({ msg: "Expense Details successfully", data: expense });
}
);

exports.updateExpense = asyncHandler(async (req, res) => {
  const expense = await expenseService.updateExpense(req.params.id, req.body);
  if (!expense) {
    return res.status(404).json({ msg: "Expense not found" });
  }
  res.status(200).json({ msg: "Expense updated successfully", data: expense });
});

exports.deleteExpense = asyncHandler(async (req, res) => {
  const expense = await expenseService.deleteExpense(req.params.id);
  if (!expense) {
    return res.status(404).json({ msg: "Expense not found" , code: 404 });
  } 

  res.status(200).json({ msg: "Expense deleted successfully", code: 200 });
});



