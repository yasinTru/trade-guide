import "./singleSource.css"
import axios from "axios"
import  {useLocation} from "react-router"
import  {useEffect, useState} from "react"
import { Link } from "react-router-dom"
import {Context} from "../../../src/context/Context";
import {useContext} from "react";

export default function SingleSource() {
   
    const location= useLocation()
            const path= location.pathname.split("/")[2]
            const [source, setSource]= useState({})
            const PublicFolder= "http://localhost:4000/images/";
            const {user}= useContext(Context);
            const [title, setTitle]= useState("");
            const [description, setDescription]= useState("")
            const [updateMode, setUpdateMode]= useState(false) 


    useEffect(() => {
        const fetchPost= async ()=> {
            const res = await axios.get("/posts/" + path)
            setSource(res.data)
            setTitle(res.data.title)
            setDescription(res.data.description)
        }
        fetchPost()
    },[path])
            
    const handleDelete = async () => 
    {
        try
        {
            await axios.delete("/posts/"+ path, {data:{username: user.username},});
            window.location.replace("/")
        }
        catch(err)
        {}
        
    }

    const handleUpdate = async ()=>
    {
        try
        {
            await axios.put("/posts/"+ path, {username: user.username, title:title, description});
           // window.location.reload()
            setUpdateMode(false)
        }
        catch(err)
        {}
    }

    return (
        <div className="singleSource">
            
            <div className="singleSourceWrapper">
                {source.photo &&
                (
                    <img src={PublicFolder+ source.photo} alt="obo" className="singleSourceImage" />
                )}
                 {
                    updateMode ? <input type="text" value={title} className ="singleSourceTitleInput" autoFocus
                    onChange={(e)=> setTitle(e.target.value)}
                    /> :(

                 
                <h1 className="singleSourceTitle"> 
                {title}
                {source.username=== user?.username &&
                (
                <div className="sourceEdit">
                    <i className="singleSourceIcon fas fa-pen-square" onClick={()=>setUpdateMode(true)}></i>
                    <i className="singleSourceIcon fas fa-trash" onClick={handleDelete}></i>
                
                </div> 
                )}
                </h1>
                ) }
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author:
                    <Link to={`/?user=${source.username}`} className="link"><b>{source.username}</b>
                    </Link>
                    </span>
                    <span className="singlePostDate">{new Date(source.createdAt).toDateString()} </span>

                </div>
                {updateMode ? (<textarea className="singleSourceDescInput" value={description} onChange={(e)=>setDescription(e.target.value)}/>):
                    (
            
                <p className="singleDescription">
                    {description}
                    
                </p>

                    )}
                   {updateMode && ( 
                   <button className="singleSourceButton" onClick={handleUpdate}> Update</button>
                   )}</div>
            
        </div>
    )
}
