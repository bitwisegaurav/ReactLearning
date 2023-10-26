
import useTodo from "../contexts/todoContext"

export default function Input() {
    const {addTodo} = useTodo();
    function handleData(e){
        e.preventDefault();
        addTodo({id: Date.now(), title: e.target.msg.value, completed: false, editable: false })
    }
  return (
    <form onSubmit={handleData} className="w-full flex gap-6 mb-6">
        <input type="text" name="msg" placeholder="Enter Todo" className="w-full px-5 py-2 rounded-lg" />
        <button type="Submit" className="text-white bg-green-600 px-5 py-2 rounded-lg">Add</button>
    </form>
  )
}