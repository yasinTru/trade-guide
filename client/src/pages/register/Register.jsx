import { Link } from "react-router-dom"
import {useState} from "react"
import axios from "axios"
import "./register.css"

export default function Register() {

    const [username, setUsername]= useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [error, setError]=useState(false)

    const handleSubmit = async (e)=>
    {
      e.preventDefault()
      setError(false)
      try
      {
      const res= await axios.post("/auth/register" , 
      {
          username,
          email,
          password
      })
      res.data && window.location.replace("/login")

    }catch(err)
    {
        setError(true)
      console.log(err)
    }}

    return (
        <div className="register">
           <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>

                <label>Username</label>
                <input type="text" className="registerInput" placeholder="Enter your username" onChange={e=>setUsername(e.target.value)}></input>
                <label>E-mail</label>
                <input type="text" className="registerInput" placeholder="Enter your e-mail" onChange={e=>setEmail(e.target.value)}></input>
                <label>Password</label>
                <input type="password" className="registerInput" placeholder="Enter your password" onChange={e=>setPassword(e.target.value)}></input>
                <button className="registerButton" type="submit">Register</button>
                
                <button className="loginButton">
                <Link className="link" to="/login">Login</Link>
                </button>
                {error &&  <span style={{textAlign: 'center', color: 'black', padding:"15px"}}>Something gone wrong.</span> }
                </form>
                
                
        </div>
    )
}
