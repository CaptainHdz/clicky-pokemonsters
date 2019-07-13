import React from "react"
import './style.css';



function Card(props) {
    return(
      <img src={props.image}  onClick={props.turnClickedTrue}  alt={props.name} className="col-3 img-thumbnail"/>
    )
}

export default Card;