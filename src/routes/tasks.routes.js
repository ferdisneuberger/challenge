const express = require("express");
const tasks = require("../data/tasks");

const router = express.Router();

router.get("/", (req, res) => {
  console.info("GET Listar Tarefas - Inicio");
  return res.status(200).json(tasks);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  
  if (typeof id !== "number" || isNaN(id)) {
    console.error({
      task_id: req.params.id,
      message: 'id inválido'
    });
    return res.status(400).json({error: "id inválido"});
  }

  const task = tasks.find((item) => item.id === id);
  
  if(!task){
    console.error({
      task_id: id,
      message: 'tarefa não encontrada'
    });
    return res.status(404).json({error: "tarefa não encontrada"});
  }
  
  return res.status(200).json(task);
});

router.post("/", (req, res) => {
  const {id, title, done} = req.body;
  const task = tasks.find((item) => item.id === id);

  if (id === undefined || title === undefined || done === undefined) {
    console.error({
      requestBody: req.body,
      message: "Faltam campos obrigatórios."
    });
    return res.status(400).json({error: "Faltam campos obrigatórios."});
  };
  
  if (typeof(id) !== "number" || isNaN(id)) {
    console.error({
      requestBody: req.body,
      message: "Id inválido."
    });
    return res.status(400).json({error: "Id inválido."});
  }

  if (task) {
    console.error({
      requestBody: req.body,
      message: "Essa tarefa já existe."
    });
    return res.status(409).json({error: "Essa tarefa já existe."});
  }

  if (typeof(title) !== "string" || title.trim() === "") {
    console.error({
      requestBody: req.body,
      message: "Title inválido."
    });
    return res.status(400).json({error: "Title inválido."});
  }

  if (typeof(done) !== "boolean") {
    console.error({
      requestBody: req.body,
      message: "Done inválido."
    });
    return res.status(400).json({error: "Done inválido."});
  }
  
  const taskToSave = {
    id, 
    title: title.toUpperCase(), 
    done,
  }
  tasks.push(taskToSave);

  return res.status(201).json(taskToSave);
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
