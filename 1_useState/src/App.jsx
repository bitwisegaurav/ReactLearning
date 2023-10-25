import { useState } from 'react'
function App() {
  const colors = ["#475569","#FFA07A","#FFD700","#FF69B4","#FF6347","#FF4500","#FF8C00","#FFA500","#FFDAB9","#FFE4E1","#FFE4B5","#FFEFD5","#FFF0F5","#FFF8DC","#FFFACD","#FFFAF0","#FFFF00","#FFFFE0","#FFFFF0","#FFC0CB"];

  const [count, setCount] = useState(0);
  const [colorCount, setColorCount] = useState(0);

  function inc(){
    if(count < 20) setCount(count + 1);
  }

  function dec(){
    if(count > 0) setCount(count - 1);
  }

  function change(){
    setColorCount((colorCount+1)%21);
  }

  return (
    <>
    <div className="grid place-items-center h-screen w-screen text-xl" style={{background: colors[colorCount]}}>
      <div className="grid bg-slate-800 gap-8 text-white px-8 py-6 rounded-lg">
        <p className='bg-gray-300 px-5 py-3 rounded-md text-slate-800 text-center'>Value : {count}</p>
        <div className="flex gap-6">
          <button onClick={inc} className="bg-slate-700 px-7 py-3 rounded-lg hover:bg-slate-600">Increase</button> 
          <button onClick={dec} className="bg-slate-700 px-7 py-3 rounded-lg hover:bg-slate-600">Decrease</button>
        </div>
        <button onClick={change} className="bg-blue-700 px-5 py-3 rounded-lg hover:bg-blue-800">Change color</button>
      </div>
    </div>
    </>
  )
}

export default App