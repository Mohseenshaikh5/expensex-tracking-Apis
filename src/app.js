const express = require("express");
const cors = require("cors");

const expenseRoutes = require("./routes/expense.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Working ✅");
});

app.use("/api", expenseRoutes);

module.exports = app;