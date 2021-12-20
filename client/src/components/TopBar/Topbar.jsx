import "./topbar.css"
import {Context} from "../../../src/context/Context";
import {useContext} from "react";
import { Link } from "react-router-dom"
export default function Topbar() {

    const {user, dispatch}= useContext(Context); 
    const PublicFolder= "http://localhost:4000/images/"
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
      };  

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
                   
                    <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
          </ul>
          </div>
                   
                 
                
            
            <div className="topRight">
            {user ? (
                <Link to="/settings">
                <img className="topAvatar"
                src={PublicFolder +user.profilePic}
                alt="avatar"
                />  
            </Link>
            ):(
                <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to="/login">
                    LOGIN
                  </Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/register">
                    REGISTER
                  </Link>
                </li>
              </ul>
            )}
            <i className="topSearchIcon fas fa-search"></i>
          </div>
        </div>
      );
        
    
}
