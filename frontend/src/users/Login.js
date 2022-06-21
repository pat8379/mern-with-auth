import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  let navigate = useNavigate();
  const [name,setName] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const body = {
        username: name,
        password: password.toString()
      }
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <input placeholder='name' value={name} required onChange={(e) => setName(e.target.value)}/>
      <input placeholder='password' value={password} required onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login