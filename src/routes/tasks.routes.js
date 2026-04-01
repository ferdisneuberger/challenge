const express = require("express");
const tasks = require("../data/tasks");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("list");
  res.json(tasks);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((item) => item.id === id);

  console.log("task", task.title);
  res.json(task);
});

router.post("/", (req, res) => {
  const task = req.body;

  tasks.push(task);
  console.log("created");

  res.status(201).json(task);
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = tasks.findIndex((item) => item.id === id);

  tasks[index] = {
    ...tasks[index],
    ...req.body
  };

  console.log("updated");
  res.json(tasks[index]);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = tasks.findIndex((item) => item.id === id);

  if (index === -1) {
    console.log("delete failed");
    return res.status(200).json({ ok: false });
  }

  const removed = tasks.splice(index, 1);

  console.log("deleted");

  if (removed.length) {
    return res.status(204).json(removed[0]);
  }

  res.json({ message: "deleted" });
});

module.exports = router;
