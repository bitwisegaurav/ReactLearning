import Login from './Login'
import Profile from './Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <>
    <div className="flex justify-center items-center gap-20 bg-slate-700 text-white h-screen w-full">
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>
    </div>
    </>
  )
}

export default App
