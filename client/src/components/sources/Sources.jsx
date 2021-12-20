import Source from "../source/Source"
import "./sources.css"

export default function Sources({sources}) {
    return (
        <div className="sources">
           
            {sources.map((p, pos)=>
            (
                <Source key={pos} source={p}></Source>
              
    ))  
   
        }
    
           
         
            
           
               
        </div>
    );
} 
