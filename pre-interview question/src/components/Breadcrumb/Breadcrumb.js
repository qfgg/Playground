import React from 'react';
import './Breadcrumb.scss';


function Breadcrumb(props) {
    return (
        <ul className="breadcrumb">
        {
            props.path.map((item, index) =>
                <li key={item}>
                    {
                        index > 0 ? <span> > </span> : null
                    }
                    <a onClick={() => props.cutPath(index, item)}>{item}</a>
                </li>)
        }
        </ul>
    )
}

export default Breadcrumb;