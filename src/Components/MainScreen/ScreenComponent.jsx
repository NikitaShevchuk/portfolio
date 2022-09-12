import React from 'react';
import {NavLink} from "react-router-dom";

const Screen = ({className, link, title, subtitle, image, order, showButton}) => {
    return (
        <div className={className}>
            <div className="screen-content">
                <div className="screen__title __title">
                    <NavLink
                        to={link}
                        className="screen__title-text link __title-text"
                    >
                        {title}
                    </NavLink>
                    <div className="title-lines">
                        <div className="title-lines__item"></div>
                        <div className="title-lines__item"></div>
                    </div>
                    <div className="screen__title-subtitle __title-subtitle">
                        {subtitle}
                    </div>
                    {showButton &&
                        <NavLink
                            to={link}
                            className="third-screen__button hide-circle"
                        >
                            See more
                        </NavLink>
                    }
                </div>
                <NavLink
                    to={link}
                    className="screen-image hide-circle"
                >
                    <img src={image} alt=''/>
                    <span className="blur"></span>
                </NavLink>
                <NavLink
                    to={link}
                    className="screen-order"
                >
                    {order}
                </NavLink>
            </div>
        </div>
    );
};

export default Screen;