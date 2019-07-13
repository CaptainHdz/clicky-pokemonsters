import React from 'react';

function Wrapper(props) {
    return <div className="wrapper container mb-5 mt-5">{props.children}</div>
}

export default Wrapper;