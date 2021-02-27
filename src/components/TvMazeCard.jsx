import React from "react"
import "../style/ItunesCard.css"
function TvMazeCard({image="", link="", title="", media=""}){
    return(
        <div className="col-6 col-md-3 mb-3 mt-3 d-flex align-items-stretch">
            <div className="card">                
                <div className="card-body">
                <img src={image} className="card-img-top"/>
                    <a target="_blank" href={link}>
                        <h5 className="card-title">{title}</h5>
                    </a>                                            
                    {
                        media !== "" ? (
                            <video className="col-12" controls name="media">
                                <source src={media} type="audio/x-m4a" />
                                {media}
                            </video>   
                        ):""
                    }
                </div>
            </div>
        </div>
    )
}
export default TvMazeCard