import React from 'react'
import { Link } from 'react-router-dom'
import "./source.css"

export default function Source({source}) {

    const PublicFolder= "http://localhost:4000/images/";

    return (
        <div className="source">
            
            <img
            className="sourceImage"
            src={PublicFolder+ source.photo}
            alt="deadCat"
            ></img>
            <div className="sourceInfo">
                <div className="sourceCategories">
                    {source.categories.map((category, key) =>
                        (
                            <span className="sourceCategory" key={key}>{category.name}</span>
                        ))}
                    
                </div>

                <Link to={`/source/${source._id}`}>
                <span className="sourceTitle">{source.title}</span>
                </Link>
                
                <hr/>
                <span className="sourceDate">{new Date(source.createdAt).toDateString()}</span>
            </div>
            <p className="sourceDescription">{source.description}</p>   
            
        </div>
    )
}
