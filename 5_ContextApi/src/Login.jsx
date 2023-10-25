import {useState, useContext} from 'react'
import UserContext from './context/UserContext'

export default function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext);

    const handleData = (e) => {
        e.preventDefault();
        console.log("Login");
        setUser({username, password});
    }

    return (
        <>
        <div className="flex flex-col items-center gap-6 w-96 bg-slate-900 bg-opacity-50 px-6 py-4 rounded-xl">
            
            <h1 className="text-3xl">Login Page</h1>
            <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} name="username" className="w-full rounded-lg px-4 py-2 text-slate-800 placeholder:text-slate-500"/>
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}  name="password" className="w-full rounded-lg px-4 py-2 text-slate-800 placeholder:text-slate-500"/>
            <button onClick={handleData} className="bg-blue-800 px-4 py-2 rounded-lg hover:bg-blue-900 hover:text-gray-300">Submit</button>
        </div>
        </>
    )
}