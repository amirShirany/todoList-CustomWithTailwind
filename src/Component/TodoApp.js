/** @format */
import { useState, useEffect } from "react"
import NavBar from "./NavBar"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [selectedOption, setSelectedOption] = useState("All")
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    filterTodos(selectedOption.value)
  }, [todos, selectedOption])

  const addTodo = (input) => {
    // console.log(input);
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    }
    setTodos([...todos, newTodo])
  }
  const completeTodo = (id) => {
    // item => findIndex => clone
    const index = todos.findIndex((todo) => todo.id === id)
    // clone : DO NOT MUTATE
    const selectedTodo = { ...todos[index] }
    selectedTodo.isCompleted = !selectedTodo.isCompleted
    // clone : todos
    const updatedTodos = [...todos]
    updatedTodos[index] = selectedTodo
    setTodos(updatedTodos)
  }

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((Delete) => Delete.id !== id)
    setTodos(filteredTodos)
  }

  const updateTodo = (id, newValue) => {
    const index = todos.findIndex((todo) => todo.id === id)
    const selectedTodo = { ...todos[index] }
    selectedTodo.text = newValue
    const updatedTodos = [...todos]
    updatedTodos[index] = selectedTodo
    setTodos(updatedTodos)
  }

  // 10 : todods => 5 completed =>
  const filterTodos = (status) => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((t) => t.isCompleted))
        break
      case "Uncompleted":
        setFilteredTodos(todos.filter((t) => !t.isCompleted))
        break
      default:
        setFilteredTodos(todos) // All todos
    }
  }

  const selectHandler = (e) => {
    setSelectedOption(e)
    filterTodos(e.value)
    // console.log(e);
  }

  return (
    <div className="container">
      <NavBar
        unCompletedTodos={todos.filter((x) => !x.isCompleted).length}
        selectedOption={selectedOption}
        onChange={selectHandler}
      />
      <TodoForm submitTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        onComplete={completeTodo}
        onDelete={deleteTodo}
        onUpdateTodo={updateTodo}
      />
    </div>
  )
}

export default TodoApp
