import { useState } from 'react'
import { sas_db } from '../DB/dbClient'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';

function Login({ redirectRoute }) {
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
    localStorage.removeItem('userEmail')
    localStorage.setItem('userEmail', email)
    if (error) {
      setMessage(error.message)
    }
    else {
      setMessage('Logged in successfully!')
      navigate(redirectRoute)
    }
  }

  return (
    <Box marginTop="75px" alignItems="center" justifyContent="center" display="flex" sx={{ maxWidth: "800px", mx: "auto", px: 3, p: 3, bgcolor: '#F8F8F8', borderRadius: 2}}>
    <form onSubmit={handleLogin}>
      <h4>Enter your Email and Password</h4>
      
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
      <p>{message}</p>
      
    </form>
    </Box>
  )
}

export default Login
