import "./topbar.css"
import avatar from "../../assets/avatar.png"
import { Link } from "react-router-dom"
export default function Topbar() {
    
    return (
        <div className="top">
            <div className="topLeft">
            <i className=" topSocials fab fa-twitter-square"></i>
            <i className=" topSocials fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"> <Link to="/" style={{textDecoration:"none", color:"inherit"}}> HOME </Link>  </li>
                    <li className="topListItem"> <Link to="/formations" style={{textDecoration:"none", color:"inherit"}}> FORMATIONS </Link>  </li>
                    <li className="topListItem"> <Link to="/indicators" style={{textDecoration:"none", color:"inherit"}}> INDICATORS </Link>  </li>
                    <li className="topListItem"><Link to="/addPost" style={{textDecoration:"none", color:"inherit"}}> ADD POST </Link>  </li>
                    <li className="lr"><Link to="/login" style={{textDecoration:"none", color:"inherit"}}>LOGIN </Link> </li>
                    <li className="lr"><Link to="/register" style={{textDecoration:"none", color:"inherit"}}>REGISTER</Link> </li>
                 
                </ul>
            </div>
            <div className="topRight">
            
          
                <img    
                className="topAvatar"
                src= {avatar}
                alt="avatar"
                />  
            
                <i className="fas fa-search"></i>
                
            </div>
              
        </div>
    )
}
