import { useState, useEffect } from 'react'
import InputBox from './InputBox'

function App() {
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(1);
  const [conversion, setConversion] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  useEffect(() => {
    setConvertedAmount(
      (amount * conversion)
    );
  }, [amount, conversion])
  
  if(from && to){
    console.log(convertedAmount);
  }

  return (
    <>
      <div className="grid place-content-center h-screen bg-slate-500">
        <div className='container p-8 bg-slate-700 grid gap-16 rounded-lg text-xl'>
          <InputBox label="From" currency="usd" value={amount} setValue={setAmount} setConversion={setConversion} setFrom={setFrom} from={from} to={to} take/>
          <InputBox label="To" currency="inr" value={convertedAmount} setConversion={setConversion} setValue={setConvertedAmount} setTo={setTo}/>
        </div>
      </div>
    </>
  )
}

export default App