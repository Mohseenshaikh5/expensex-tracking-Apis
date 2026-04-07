const Expense = require("../models/expense.model");

const createExpense = async (data) => {
  return await Expense.create(data);
};

const getExpenses = async () => {
  return await Expense.find().sort({ createdAt: -1 });
};

 const getExpenseById = async (id) => {
  return await Expense.findById(id);
};

const updateExpense = async (id, data) => {
  return await Expense.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

const deleteExpense = async (id) => {
  return await Expense.findByIdAndDelete(id);
};
module.exports = {
  createExpense,
  getExpenses,
  getExpenseById,
  updateExpense,
  deleteExpense
};