import "./home.css"
import Header from "../../components/header/Header"
import Sources from "../../components/sources/Sources"
import Sidebar from "../../components/sidebar/Sidebar"
export default function Home() {
    return (
        <>
        <Header/>

        <div className="home">   
       <Sources/>
       <Sidebar/>
           
        </div>
        </>
    )
}
