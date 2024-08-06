import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState({firstName :"",lastName:""})
  const firstNameRef=useRef(null)
  const lastNameRef=useRef(null)
  let fname=""
  let lname=""
  return (
    <>
     <div>
      <input type="text" value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}  />
      <input type="text" value={name.lastName}  onChange={e=>setName({...name,lastName:e.target.value})} />
      <button onClick={()=>setName}>Enter</button>
     </div>
     <h3>The firstname is {name.firstName} and the lastname is {name.lastName}</h3>
    </>
  )
}

export default App
