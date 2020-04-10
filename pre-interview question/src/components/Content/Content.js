import React from 'react';
import './Content.scss';


function Content(props) {
    if (!props.name) {
        return null;
    }
    return (
        props.type === 'file' ?
            <div className="file-content">{ `THIS IS FILE: ${props.name}` }</div> :
            <ul className="content-list">
            {
                (props.contents || []).map((item) =>
                    <li key={item.name}>
                        <a onClick={() => props.addPath(item.name)}>
                            <span className={item.type === 'dir' ? "icon dir" : "icon file"}></span>
                            <span>{item.name}</span>
                        </a>
                    </li>)
            }
            </ul>
    )
}

export default Content;