import "./sidebar.css"
import {useState, useEffect} from "react"
import axios from "axios"
import {Link} from "react-router-dom"
export default function Sidebar() {
    const [cats, setCats]= useState([]);


    useEffect(() =>
    {
        const getCats= async ()=>
        {
            const res= await axios.get("/categories")
            setCats(res.data)
        }
        getCats()
    },[])

    

    return (
       
            <div className="sidebar">
                <div className="sidebarItem">
                    <span className="sidebarTitle">ABOUT THIS SITE</span>
                    <img className="aboutImage"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaOAPoxDDqmcNf4CqtrcwHGcnkNbas_7lrOw&usqp=CAU"
                    alt="btc"
                    >
                    </img>
                    <p>Bu site kendi araştırmalarım ve öğrendiklerimin kaydedilmiş hali, gelecekte öğreneceklerim
                        için ise bir veri merkezi olması amacıyla kurulmuştur.
                    </p>
                    <br></br>
                   
                    <p>This site was established to be a recording of my own research and learning, and a data center for what I will learn in the future.
                    </p>

                </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                {cats.map((c, keyCat)=>(
                    <Link to={`/?categories=?${c.name}`} className="link" key={keyCat}>
                    <li className="sidebarListItem" key={keyCat}>{c.name}</li>
                   </Link>
                ))}
                
                
                
            </ul>
                
            </div>
            </div>
    )
}
