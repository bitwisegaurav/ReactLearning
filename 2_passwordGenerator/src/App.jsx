import { useState, useCallback, useEffect } from "react";

function App() {
  let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [result, setResult] = useState("fs@9");
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [length, setLength] = useState(4);
  const [copyBtn, setCopyBtn] = useState("Copy");
  let password = "";

  const passwordGenerator = useCallback(() => {
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()_-+={}[]:;,.|/<>?";

    for (let index = 0; index < length; index++) {
      let charIndex = Math.floor(Math.random() * str.length);
      password += str.charAt(charIndex);
    }
    // console.log(password);
    setResult(password);
    password = "";
  }, [numAllowed, charAllowed, length, setResult]);

  const copyTheData = () => {
    window.navigator.clipboard.writeText(result);
    setCopyBtn("Copied");
    setTimeout(() => {
      setCopyBtn("Copy");
    }, 2000);
  };

  useEffect(() => {
    passwordGenerator();
  }, [numAllowed, charAllowed, length, passwordGenerator]);

  return (
    <>
      <div className="h-screen w-screen grid place-items-center bg-cyan-800">
        <div className="card bg-cyan-950 px-6 py-6 rounded-lg text-white flex flex-col gap-6">
          <h1 className="text-2xl text-center mb-4">Password Generator</h1>
          <div className="generator flex flex-col gap-6">
            <p className="flex gap-6">
              <input
                type="text"
                value={result}
                readOnly
                className="w-80 px-4 py-2 rounded focus:outline-none text-cyan-950"
              />
              <button
                className="px-4 py-2 bg-cyan-800 rounded-md hover:bg-cyan-700"
                onClick={copyTheData}
              >
                {copyBtn}
              </button>
            </p>
            <p className="flex gap-6 items-center">
              <input
                type="range"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                min={4}
                max={20}
                className="w-full appearance-none cursor-pointer bg-cyan-700 h-1 rounded-full outline-none active:outline-none focus:outline-none"
              />
              <span className="w-28">Length: {length}</span>
            </p>
            <div className="flex justify-around">
              <label className="flex items-center gap-4">
                <input
                  type="checkbox"
                  onChange={() => setNumAllowed((pre) => !pre)}
                  className="cursor-pointer"
                />
                <span>Number</span>
              </label>
              <label className="flex items-center gap-4">
                <input
                  type="checkbox"
                  onChange={() => setCharAllowed((pre) => !pre)}
                  className="cursor-pointer"
                />
                <span>Symbols</span>
              </label>
            </div>
            <button
              className="w-full bg-blue-800 px-4 py-2 rounded-md hover:bg-blue-700"
              onClick={passwordGenerator}
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
