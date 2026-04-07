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

console.log("ENV TEST:", process.env.MONGO_URI);
// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log(err));




const Expense = require("./models/Expense");

// Create expense
app.post("/expenses", async (req, res) => {
  try {
    const expense = await Expense.create(req.body);
    res.status(200).json({ msg: "Expense created successfully", data: expense });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get expenses
app.get("/expenses", async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json({ msg: "Expenses Lists successfully", data: expenses });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});