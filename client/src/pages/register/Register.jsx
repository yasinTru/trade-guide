import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
    return (
        <div className="register">
           <span className="registerTitle">Register</span>
            <form className="registerForm">

                <label>Username</label>
                <input type="text" className="registerInput" placeholder="Enter your username"></input>
                <label>E-mail</label>
                <input type="text" className="registerInput" placeholder="Enter your e-mail"></input>
                <label>Password</label>
                <input type="password" className="registerInput" placeholder="Enter your password"></input>
                <button className="registerButton">Register</button>
                <button className="loginButton">
                <Link className="link" to="/login">Login</Link>
                </button>
                </form>  
                
                
        </div>
    )
}
