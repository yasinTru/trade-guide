import { Link } from "react-router-dom"
import "./login.css"

export default function Login() {
    return (
        <div className="login">
           <span className="loginTitle">Login</span>
            <form className="loginForm">
                
                <label>E-mail</label>
                <input type="text" className="loginInput" placeholder="Enter your e-mail"></input>
                <label>Password</label>
                <input type="password" className="loginInput" placeholder="Enter your password"></input>
                <button className="loginButton">Login</button>
                <button className="registerButton">
                <Link className="link" to="/register">Register</Link>
                   
                </button>
                </form>  

            
             
                
                
        </div>
    )
}
