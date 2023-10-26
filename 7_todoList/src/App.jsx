import { useEffect, useState } from "react"
import Input from "./components/Input"
import { TodoProvider } from "./contexts/todoContext"
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((preTodos) => [{ ...todo }, ...preTodos]);
  }
  const removeTodo = (id) => {
    setTodos((preTodos) => preTodos.filter((todo) => todo.id !== id));
  }
  const toggleTodo = (id) => {
    setTodos((preTodos) => preTodos.map((preTodo) => (
      preTodo.id === id ? {...preTodo, completed: !preTodo.completed} : {...preTodo}
    )))
  }
  const editTodo = (id, todo) => {
    setTodos((preTodos) => preTodos.map((preTodo) => (
      preTodo.id === id ? todo : preTodo
    )))
    console.table(todos)
  }

  useEffect(() => {
    const values = JSON.parse(localStorage.getItem("todos"));
    if(values) setTodos(values);
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <div className="w-screen h-screen bg-indigo-950 flex justify-center py-4 px-4">
      <div className="w-128 flex flex-col gap-8">
        <h1 className="text-indigo-100 text-3xl text-center">Todo List</h1>
        <TodoProvider value={{todos, addTodo, removeTodo, toggleTodo, editTodo}}>
          <Input/>
          {
            todos.map((todo) => (
              <Todo key={todo.id} todo={todo}/>
            ))
          }
        </TodoProvider>
      </div>
    </div>
  )
}

export default App