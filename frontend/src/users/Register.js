import React, { useState } from 'react'

function Register() {
  const [name,setName] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <input placeholder='name' value={name} required onChange={(e) => setName(e.target.value)}/>
      <input placeholder='password' value={password} required onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={handleSubmit}>Register</button>
    </div>
  )
}

export default Register