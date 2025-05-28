import { useState } from 'react'
import { sas_db } from '../DB/dbClient'
import { useNavigate } from 'react-router-dom'

function SignUp({ tableName }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [zip, setZip] = useState('')
  const [house, setHouse] = useState('')
  const [street, setStreet] = useState('')
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
    if (error) {
      setMessage(error.message)
    }
    else {


      if (tableName === "business_info") {
        const profileData = {
          b_email: email,
          b_name: name,
          b_zip_code: zip,
          b_house_number: house,
          b_street_name: street,
          b_phone: phone,
        }
        const { data, error } = await sas_db.from(tableName).insert([profileData])

      }
      else if (tableName === "donation_center_info") {
        const profileData = {
          d_email: email,
          d_name: name,
          d_zip_code: zip,
          d_house_number: house,
          d_street_name: street,
          d_phone: phone,
        }
        const { data, error } = await sas_db.from(tableName).insert([profileData])

      }
      else if (tableName === "volunteer_info") {
        const profileData = {
          v_email: email,
          v_name: name,
          v_zip_code: zip,
          v_house_number: house,
          v_street_name: street,
          v_phone: phone,
        }
        const { data, error } = await sas_db.from(tableName).insert([profileData])
      }
      localStorage.setItem('userEmail', email)
      if (tableName === "business_info") {
        navigate('/bdash')
      }
      else if (tableName === "donation_center_info") {
        navigate('/doncendash')
      }
      else if (tableName === "volunteer_info") {
        navigate('/volunteerdash')
      }
    }
  }

  return (
    <form onSubmit={handleSignUp}>
      <h2>Sign Up</h2>
      <input id="emailInput" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <input id="passwordInput" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
      <input id="zipInput" type="address" placeholder="Zip Code" onChange={(e) => setZip(e.target.value)} required />
      <input id="houseInput" type="address" placeholder="House Number" onChange={(e) => setHouse(e.target.value)} required />
      <input id="streetInput" type="address" placeholder="Street Name" onChange={(e) => setStreet(e.target.value)} required />
      <input id="nameInput" type="name" placeholder="Name of Business" onChange={(e) => setName(e.target.value)} required />
      <input id="phoneInput" type="phone" placeholder="Phone" onChange={(e) => setName(e.target.value)} required />
      <button type="submit">Sign Up</button>
      <p>{message}</p>
    </form>
  )
}

export default SignUp;
