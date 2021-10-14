import React from 'react'
import "./header.css"
import HeaderImg from "../../assets/header.jpg"

export default function Header() {
    return (
        <div className="header">
             <div className="headerCircle"></div>
           <div className="headerTitles">
               <span className="titleSmall">trading </span>
               <span className="titleLarge">GUIDE</span>
               
           </div>
          
            <img className="headerImage" src={HeaderImg} alt="header"></img>
        </div>
         
    )
}
