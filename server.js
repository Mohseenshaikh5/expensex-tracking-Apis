require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("API Working ✅");
});

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log(err));




const Expense = require("./models/Expense");

// Create expense
app.post("/expenses", async (req, res) => {
  const expense = await Expense.create(req.body);
  res.json(expense);
});

// Get expenses
app.get("/expenses", async (req, res) => {
  const expenses = await Expense.find();
  res.json(expenses);
});

app.listen(process.env.PORT, () => {
  console.log("Server running on port", process.env.PORT);
});