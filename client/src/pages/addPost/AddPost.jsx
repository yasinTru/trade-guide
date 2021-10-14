import "./addPost.css"

export default function AddPost() {
    return (
        <div className="addPost">
            <form className="addForm">
                <div className="addFormGroup">
                <label htmlFor="fileInput">
                <i className="addPostIcon fas fa-plus"></i>
                </label>
                    <input type="file" id="fileInput" style={{display:"none"}} ></input>
                    <input type="text" className="addInput" autoFocus={true} placeholder="Title"></input>
       
                    </div>

                <div className="addFormGroup">
                    <textarea placeholder="Add a Indicator or formation."
                    type="text"
                    className="addInput addText"
                    >
                    </textarea>
                </div>
                <button className="addSubmit">Publish</button>

                    </form>
        </div>


    )
}
