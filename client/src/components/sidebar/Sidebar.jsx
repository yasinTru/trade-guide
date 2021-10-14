import "./sidebar.css"

export default function Sidebar() {
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
                <li className="sidebarListItem">Indicators</li>
                <hr></hr>
                <li className="sidebarListItem">Formations</li>
            </ul>
                
            </div>
            </div>
    )
}
