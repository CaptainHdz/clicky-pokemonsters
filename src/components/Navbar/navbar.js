import React from 'react';
import './style.css';

function Title(props) {

    return(

        <div>
            <nav className="nav-shadow navbar mb-0 fixed-top">
                <ul>
                    <li className="navbar-brand nav-item mr-0 mb-0 pb-0 font-weight-bold text-light">PokeMemory</li>
                    <li className="status nav-item navbar-brand mr-0">{props.gameStatus}</li>
                    <li className="text-light nav-item score navbar-brand mt-0">Score: {props.score} | Top Score: {props.topScore}</li>
                </ul>
            </nav> 
        </div>

    );
}


export default Title;