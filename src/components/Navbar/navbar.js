import React from 'react';
import './style.css';

function Title(props) {
    return(

        <div>
            <nav className="shadow-lg navbar mb-0 fixed-top">
                <ul>
                    <li className="navbar-brand mb-0 pb-0 font-weight-bold text-light">Clicky Game</li>
                    <li className=" float-right navbar-brand mt-0  nav-link">Score: {props.score} | Top Score: {props.topScore}</li>
                </ul>
            </nav> 
        </div>

    );
}


export default Title;