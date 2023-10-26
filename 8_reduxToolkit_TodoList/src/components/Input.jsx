import { useState } from "react";
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todoSlice";

export default function Input() {
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();

  const handleData = (e) => {
    e.preventDefault();
    if (msg.trim() !== "") {
      dispatch(addTodo(msg));
      setMsg("");
    }
  }

  return (
    <form onSubmit={handleData} className="w-full flex gap-6 mb-6">
        <input type="text" name="msg" placeholder="Enter Todo" className="w-full px-5 py-2 rounded-lg" value={msg} onChange={(e) => setMsg(e.target.value)} />
        <button type="Submit" className="text-white bg-green-600 px-5 py-2 rounded-lg">Add</button>
    </form>
  )
}