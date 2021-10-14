import React from 'react'
import "./source.css"

export default function Source() {
    return (
        <div className="source">
            <img
            className="sourceImage"
            src="https://blog.finanswebde.com/content/images/2019/12/Blog_Dead_Cat_Bounce.jpg"
            alt="deadCat"
            ></img>
            <div className="sourceInfo">
                <div className="sourceCategories">
                    <span className="sourceCategory">Indicator</span>
                    <span className="sourceCategory">Formation</span>
                </div>
                <span className="sourceTitle">Post Title</span>
                <hr/>
                <span className="sourceDate">2 days ago</span>
            </div>
            <p className="sourceDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Quisquam amet incidunt, corporis deserunt molestias sit est, eius inventore tenetur et 
             quo possimus! Veritatis, dignissimos. Perspiciatis facilis eum totam omnis sequi?
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Quisquam amet incidunt, corporis deserunt molestias sit est, eius inventore tenetur et 
             quo possimus! Veritatis, dignissimos. Perspiciatis facilis eum totam omnis sequi?
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Quisquam amet incidunt, corporis deserunt molestias sit est, eius inventore tenetur et 
             quo possimus! Veritatis, dignissimos. Perspiciatis facilis eum totam omnis sequi?</p>
            
        </div>
    )
}
