import { useState } from "react";
import InputBox from "./InputBox"
import { useEffect } from "react";

function fetchData(currency, setData){
  fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
  .then((res) => res.json())
  .then(res => {
    setData(res[currency]);
  })
}

function App() {
  const [fromCurr, setFromCurr] = useState("usd");
  const [toCurr, setToCurr] = useState("inr");
  const [fromAmount, setFromAmount] = useState(1);
  const [toAmount, setToAmount] = useState(1);
  const [conversion, setConversion] = useState(1);
  const [data, setData] = useState({});

  useEffect(() => {
    setConversion(data[toCurr])
    setToAmount(fromAmount * data[toCurr])
  }, [fromCurr, toCurr, data, fromAmount]);
  useEffect(() => {
    fetchData(fromCurr, setData);
  }, [fromCurr, toCurr, data, fromAmount, conversion, toAmount])

  const values = {
    fromCurr,
    setFromCurr,
    toCurr,
    setToCurr,
    fromAmount,
    setFromAmount,
    toAmount,
    setToAmount,
    conversion,
    setConversion,
    data,
  }

  return (
    <>
      <div className="grid place-content-center h-screen bg-slate-500">
        <div className='container p-8 bg-slate-700 grid gap-16 rounded-lg text-xl'>
          <InputBox values={values} from/>
          <InputBox values={values} />
        </div>
      </div>
    </>
  )
}

export default App