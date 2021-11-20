import "./home.css"
import Header from "../../components/header/Header"
import Sources from "../../components/sources/Sources.jsx"
import Sidebar from "../../components/sidebar/Sidebar"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Home() {
    const [sources, setSources]=useState([]);

    useEffect(()=>
    {
        const fetchPosts= async()=>
        {
          const res= await axios.get("/posts")
          setSources(res.data)
          
        }
        
        fetchPosts()

    },[])

    return (
        <>
        <Header/>

        <div className="home">
        <Sources sources={sources} >AL LA ARTIK</Sources>
       
       <Sidebar/>
           
        </div>
        </>
    )
}
