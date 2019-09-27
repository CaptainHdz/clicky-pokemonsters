import React from "react"
import './style.css';



function Card(props) {
    return(
      <img src={props.image} status={props.clicked} id={props.id} onClick={() => props.turnTrue(props.id)}  alt={props.name} className="col-2 img-thumbnail m-2 shadow pokemon"/>
    )
}

export default Card;