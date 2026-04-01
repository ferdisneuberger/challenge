const express = require("express");
const tasksRouter = require("./routes/tasks.routes");
const logger = require("./middlewares/logger");

const app = express();

app.use(express.json());
app.use(logger);

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/tasks", tasksRouter);

app.use((req, res) => {
  res.status(404).json({ message: "rota nao encontrada" });
});

module.exports = app;
