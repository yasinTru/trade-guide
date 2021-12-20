import "./home.css"
import Header from "../../components/header/Header"
import Sources from "../../components/sources/Sources.jsx"
import Sidebar from "../../components/sidebar/Sidebar"
import { useEffect, useState } from "react"
import axios from "axios"
import {useLocation} from "react-router"

export default function Home() {
    const [sources, setSources]=useState([]);
    const {search}= useLocation()
  

    useEffect(()=>
    {
        const fetchPosts= async()=>
        {
          const res= await axios.get("/posts" +search)
          setSources(res.data) 
          console.log(res.data)
        }
        
        fetchPosts()

    },[search])

    return (
        <>
        <Header/>

        <div className="home">
        <Sources sources={sources} ></Sources>
       
       <Sidebar/>
           
        </div>
        </>
    )
}
