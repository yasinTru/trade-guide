import React from 'react'
import "./source.css"

export default function Source({source}) {
    return (
        <div className="source">
            {source.photo}
            <img
            className="sourceImage"
            src={source.photo}
            alt="deadCat"
            ></img>
            <div className="sourceInfo">
                <div className="sourceCategories">
                    {source.categories.map(cate=>
                        (
                            <span className="sourceCategory">{cate.name}</span>
                        ))}
                    <span className="sourceCategory">Formation</span>
                </div>
                <span className="sourceTitle">{source.title}</span>
                <hr/>
                <span className="sourceDate">{new Date(source.createdAt).toDateString()}</span>
            </div>
            <p className="sourceDescription">{source.descripton}</p>   
            
        </div>
    )
}
