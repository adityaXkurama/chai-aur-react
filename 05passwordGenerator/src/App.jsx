import { useState,useCallback,useEffect,useRef } from 'react'



function App() {
  const [length,setLength]= useState(8);
  const [numberAllowed,setnumberAllowed]= useState(false);
  const [characterAllowed,setcharacterAllowed]= useState(false);
  const [password,setpassword]= useState("");

  const passwordGenerator =useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="123456789"
    if(characterAllowed) str+="!@#$%^&*~";
    for (let i = 1; i <= length; i++) {
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setpassword(pass)

  },[length,numberAllowed,characterAllowed,setpassword])
let passwordRef=useRef(null)

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select() 
    window.navigator.clipboard.writeText(passwordRef.current.value)
  },[password])

 useEffect(()=>{passwordGenerator()},[length,numberAllowed,characterAllowed,passwordGenerator ])

  return (
    <>
      <div className='w-full mx-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          ref={passwordRef}
          type="text" value={password} 
          className='outline-none w-full py-1 px-3' placeholder='password' 
          readOnly/>
          <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
            copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}} />
            <label>length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{
              setnumberAllowed((prev)=>!prev)
            }} 
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={characterAllowed}
            id="characterInput"
            onChange={()=>{
              setcharacterAllowed((prev)=>!prev)
            }} 
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
 