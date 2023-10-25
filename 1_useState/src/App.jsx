import { useState } from 'react'
import './App.css'
function App() {
  const colors = ["#F1F1F1","#FFA07A","#FFD700","#FF69B4","#FF6347","#FF4500","#FF8C00","#FFA500","#FFDAB9","#FFE4E1","#FFE4B5","#FFEFD5","#FFF0F5","#FFF8DC","#FFFACD","#FFFAF0","#FFFF00","#FFFFE0","#FFFFF0","#FFC0CB"];

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
    <div className="container" style={{background: colors[colorCount]}}>
      <div className="card">
        <p className='val'>Value {count}</p>
        <div className="btns">
        <button onClick={inc} style={{marginRight: "20px"}}>Inc</button> 
        <button onClick={dec}>Dec</button>
        </div>
        <button onClick={change}>Change color</button>
      </div>
    </div>
    </>
  )
}

export default App