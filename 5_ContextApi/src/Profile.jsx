import {useContext} from 'react'
import UserContext from './context/UserContext'

export default function Profile(){

    const {user} = useContext(UserContext);

    return (
        <>
        <div className="flex flex-col items-center gap-6 h-64 w-96 bg-slate-900 bg-opacity-50 px-6 py-4 rounded-xl">
            <h1 className="text-3xl">User Profile</h1>
            <div className="bg-slate-600 px-4 py-4 w-full text-center rounded-lg mt-6">Welcome {user ? user.username : "Guest"}</div>
        </div>
        </>
    )
}