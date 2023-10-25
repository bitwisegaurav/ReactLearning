import { useState } from 'react'
import InputBox from './InputBox'

function App() {
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(1);
  // const [from, setFrom] = useState(1);
  // const [to, setTo] = useState(1);

  return (
    <>
      <div className="grid place-content-center h-screen bg-slate-500">
        <div className='container p-8 bg-slate-700 grid gap-16 rounded-lg text-4xl'>
          <InputBox label="From" currency="usd" value={amount} setValue={setAmount}/>
          <InputBox label="To" currency="inr" value={convertedAmount} setValue={setConvertedAmount}/>
        </div>
      </div>
    </>
  )
}

export default App
