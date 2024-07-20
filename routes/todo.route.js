const route = require("express").Router()

const { getAllTodos, addTodo } = require("./../controller/todo.controller")

route
    .get("/fetch", getAllTodos)
    .post("/add", addTodo)
module.exports = route