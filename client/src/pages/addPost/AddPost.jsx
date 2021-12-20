import "./addPost.css"
import { useState } from "react"
import axios from "axios";
import {Context} from "../../../src/context/Context";
import {useContext} from "react";
export default function AddPost() {

    const [title, setTitle] = useState("")
    const [description, setDesc] = useState("")
    const [file, setFile] = useState("")
    const {user}= useContext(Context)

    const handleSubmit= async (e)=>
    {
        e.preventDefault();
        const newPost= 
        {
            username: user.username,
            title,
            description,
        }
        if(file) 
        {
            const data= new FormData();
            const filename=Date.now()+ file.name;
            data.append("name", filename)
            data.append("file", file);
            newPost.photo=filename;

            try
            {
                await axios.post("/upload", data)
            }
            catch(err)
            {}
        }
        try
        {
           const res= await axios.post("/posts", newPost)
           window.location.replace("/source" + res.data._id)
        }
        catch(err)
        {

        }
        
    }

    return (
        <div className="addPost">
            {
                file && 
                (
                    <img
                        className="addPostImg"
                        src={URL.createObjectURL(file)}
                        alt=""
                        ></img>
                )
            }
            <form className="addForm" onSubmit={handleSubmit}>
                <div className="addFormGroup">
                <label htmlFor="fileInput">
                <i className="addPostIcon fas fa-plus"></i>
                </label>
                    <input type="file" id="fileInput" style={{display:"none"}} onChange={(e)=> setFile(e.target.files[0])} ></input>
                    <input type="text" className="addInput" autoFocus={true} placeholder="Title" onChange={e=> setTitle(e.target.value)}></input>
       
                    </div>

                <div className="addFormGroup">
                    <textarea placeholder="Add a Indicator or formation."
                    type="text"
                    className="addInput addText"
                    onChange={e=> setDesc(e.target.value)}
                    >
                    </textarea>
                </div>
                <button className="addSubmit" type="submit">Publish</button>

                    </form>
        </div>


    )
}
