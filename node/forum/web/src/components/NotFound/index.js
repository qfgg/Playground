import React, { Component } from "react";
import './index.scss';
import notFoundJPG from '../../assets/img/404.png';


function NotFound() {
    return (
        <div className="not-found">
            <img src={notFoundJPG} />
        </div>
    );
}

export default NotFound;