import { useSelector } from "react-redux";
import Input from "./components/Input"
import Todo from "./components/Todo";

function App() {
  const todos = useSelector(state => state.todos);
  
  return (
    <div className="w-screen h-screen bg-indigo-950 flex justify-center py-4 px-4">
      <div className="w-128 flex flex-col gap-8">
        <h1 className="text-indigo-100 text-3xl text-center">Todo List</h1>
          <Input />
          {todos.map((todo) => <Todo key={todo.id} todo={todo}/>)}
      </div>
    </div>
  )
}

export default App