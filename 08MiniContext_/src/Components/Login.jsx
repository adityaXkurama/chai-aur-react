import React,{useContext,useState} from 'react'
import userContext from '../context/userContext'

function Login() {

    const [userName,setUserName]=useState('')
    const [password,setpassword]=useState('')

    const {setUser}=useContext(userContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({userName,password})
    }
  return (
    <div>
      <h1>Login</h1>
      <input type="text"
      value={userName}
      onChange={(e)=>setUserName(e.target.value)} 
      placeholder='Username' />
      <input type="text" 
      value={password}
      onChange={(e)=>setpassword(e.target.value)}
      placeholder='password' />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
 