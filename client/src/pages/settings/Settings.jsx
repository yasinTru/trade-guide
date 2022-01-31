import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
import {Context} from "../../../src/context/Context";
import {useContext} from "react";
import { useState } from "react"
import axios from "axios";

export default function Settings() {

    const {user, dispatch}= useContext(Context)
    const PublicFolder= "http://localhost:4000/images/"
    const [file, setFile] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [success, setSuccess] = useState("")
   

    const handleSubmit= async (e)=>
    {
        e.preventDefault();
        dispatch({type:"UPDATE_START"})
        const updatedUser= 
        {
            userId: user._id,
            username,
            email,
            password,
        }
        if(file) 
        {
            const data= new FormData();
            const filename=Date.now()+ file.name;
            data.append("name", filename)
            data.append("file", file);
            updatedUser.profilePic=filename;

            try
            {
                await axios.post("/upload", data)
                
            }
            catch(err)
            {}
        }
        try
        {
            const res= await axios.put("/users/" + user._id, updatedUser)
           setSuccess(true)
           dispatch({type:"UPDATE_SUCCESS", payload: res.data})
          
        }
        catch(err)
        {   
            dispatch({type:"UPDATE_FAILURE"})
        }
        
    }


    return (
        <div className="settings">
            <div className="line"></div>
            <div className="horizonLine"></div>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle" >Update Your Account </span>
                  <span className="settingsDeleteTitle">Can delete your account: <br ></br> <strong>Delete Account </strong></span>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <label></label>
                    <div className="settingsPp">
                        <img
                        src={file ? URL.createObjectURL(file): PublicFolder + user.profilePic}
                        alt=""
                        ></img>
                        <label htmlFor="fileInput">
                        <i className="settingsIcon far fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} onChange={(e)=> setFile(e.target.files[0])}></input>

                    </div>

                <label>Username:</label>
                <input type="text" placeholder={"current username: "+user.username}  onChange={e=> setUsername(e.target.value)}></input>
                <label>E-mail:</label>
                <input type="email" placeholder={"current e-mail: " + user.email} onChange={e=> setEmail(e.target.value)}></input>
                <label>Password:</label>
                <input type="password" placeholder="Change password..." onChange={e=> setPassword(e.target.value)}></input>
                <button className="settingsSubmit" type="submit">Update </button>
                {success && (<span style={{color:"green", textAlign:"center", margin:"14px"}}> Profil güncellendi. </span>)}
                </form>

            </div>
            <Sidebar></Sidebar>
            
        </div>
    )
}
