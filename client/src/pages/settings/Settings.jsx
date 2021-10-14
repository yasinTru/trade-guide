import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Account </span>
                    <span className="settingsDeleteTitle">Delete Account </span>
                </div>
                <form className="settingsForm">
                    <label> Profile Picture</label>
                    <div className="settingsPp">
                        <img
                        src="https://i.ytimg.com/vi/Re4-HaLdmR8/maxresdefault.jpg"
                        alt=""
                        ></img>
                        <label htmlFor="fileInput">
                        <i className="settingsIcon far fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}></input>

                    </div>

                <label>Username:</label>
                <input type="text" placeholder="Yasin"></input>
                <label>E-mail:</label>
                <input type="email" placeholder="dogru@gmail.com"></input>
                <label>Password:</label>
                <input type="password" placeholder="password"></input>
                <button className="settingsSubmit">Update </button>

                </form>

            </div>
            <Sidebar></Sidebar>
            
        </div>
    )
}
