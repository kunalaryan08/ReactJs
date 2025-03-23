import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numAll, setNumAll] = useState(false);
  const [charAll, setCharAll] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAll){
      str += "0123456789";
    }
    if(charAll){
      str += "@#$&{}[]:,";
    }

    for(let i = 1; i <= length; ++i){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numAll, charAll, setPassword])

  const CopytoClipboard = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,5);
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(()=>{
    passwordGenerator();
  },[length, numAll, charAll, passwordGenerator])
  return (
    <>
      <h1 className="text-4xl font-bold text-center text-white mt-6">Password Generator</h1>

<div className="w-full max-w-md mx-auto shadow-lg rounded-xl px-6 py-6 my-8 text-orange-500 bg-gray-800">
  {/* Password Display */}
  <div className="flex items-center bg-gray-900 shadow-lg rounded-lg overflow-hidden mb-4 border border-gray-700">
  <input 
    type="text" 
    value={password} 
    className="w-full py-3 px-4 bg-transparent text-white outline-none placeholder-gray-400 text-lg tracking-wide select-all"
    placeholder="Generated Password" 
    readOnly 
    ref={passwordRef}
  />
  <button 
    onClick={CopytoClipboard}
    className="bg-orange-500 hover:bg-orange-600 active:scale-95 active:bg-orange-700 text-white font-medium px-5 py-3 rounded-r-lg transition-all duration-200 ease-in-out shadow-md hover:shadow-lg cursor-pointer"
  >
    Copy
  </button>
</div>


  {/* Password Length Slider */}
  <div className="flex flex-col gap-2">
    <input 
      type="range" 
      min={6} 
      max={100} 
      value={length} 
      className="w-full cursor-pointer accent-orange-500"
      onChange={(e) => {setLength(e.target.value)}}
    />
    <label className="text-white font-medium text-lg">Password Length: {length}</label>
  </div>
  <div className='flex items-center gap-x-1'>
  <input 
      type="checkbox" 
      defaultChecked = {numAll}
      id = "numberInput"
      onChange = {() => {
        setNumAll((prev) => !prev);
      }}
    />
    <label htmlFor="numberInput">Numbers</label>
  </div>
  <div className='flex items-center gap-x-1'>
  <input 
      type="checkbox" 
      defaultChecked = {charAll}
      id = "charInput"
      onChange = {() => {
        setCharAll((prev) => !prev);
      }}
    />
    <label htmlFor="charInput">Characters</label>
  </div>
</div>

    </>
  )
}

export default App
