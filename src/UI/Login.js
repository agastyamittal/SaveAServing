import { useState } from 'react'
import { sas_db } from '../DB/dbClient'
import { useNavigate } from 'react-router-dom'

function Login({redirectRoute}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    const { error } = await sas_db.auth.signInWithPassword({
      email,
      password,
    })

    if (error){ 
      setMessage(error.message)
    }
    else{
      setMessage('Logged in successfully!')
     navigate(redirectRoute)
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
      <p>{message}</p>
    </form>
  )
}

export default Login
