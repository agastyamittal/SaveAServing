import { useState } from 'react'
import { sas_db } from '../DB/dbClient'
import { useNavigate } from 'react-router-dom'

function SignUp({tableName}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [phone, setPhone] = useState('')
  const navigate = useNavigate()

  

  const handleSignUp = async (e) => {
    e.preventDefault()
    const { data, error } = await sas_db.auth.signUp({
      email,
      password,
    })
    if (error){ 
      setMessage(error.message)
    }
    else{
      setMessage('Sign-up successful! Check your email for confirmation.')
      const profileData = {
        email: document.getElementById('emailInput').value,
        name: document.getElementById('nameInput').value,
        address: document.getElementById('addressInput').value,
        phone: document.getElementById('phoneInput').value,
      }
      const { data, error } = await sas_db.from(tableName).insert([profileData])
      if(tableName === "businessinfo"){
        navigate('/bdash')
      }
      else if(tableName === "donation_center_info"){
        navigate('/doncendash')
      }
      else if(tableName === "volunteer_info"){
        navigate('/volunteerdash')
      }
      // else if(tableName === "team_info"){
      //   navigate('/teamdash')
      // }
    }
  }

  return (
    <form onSubmit={handleSignUp}>
      <h2>Sign Up</h2>
      <input id="emailInput" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <input id="passwordInput" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
      <input id="addressInput" type="address" placeholder="Address" onChange={(e) => setAddress(e.target.value)} required />
      <input id="nameInput" type="name" placeholder="Name of Business" onChange={(e) => setName(e.target.value)} required />
      <input id="phoneInput" type="phone" placeholder="Phone" onChange={(e) => setName(e.target.value)} required />
      <button type="submit">Sign Up</button>
      <p>{message}</p>
    </form>
  )
}

export default SignUp;
