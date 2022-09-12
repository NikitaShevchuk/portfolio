import React from 'react';
import {NavLink} from "react-router-dom";
import {observer} from "mobx-react-lite";
import screenState from "../../state/screenState";

const Navigation = observer(() => {
    const changeScreen = (screenNumber) => {
        screenState.changeCurrentScreen(screenNumber)
    }
    const nextScreen = () => screenState.nextScreen()
    return <><div className="navigation">
            <NavLink to='/' className="navigation__arrow link">
                <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.02084 10.9393C0.435051 11.5251 0.435051 12.4749 1.02084 13.0607L10.5668 22.6066C11.1526 23.1924 12.1023 23.1924 12.6881 22.6066C13.2739 22.0208 13.2739 21.0711 12.6881 20.4853L4.20282 12L12.6881 3.51472C13.2739 2.92893 13.2739 1.97919 12.6881 1.3934C12.1023 0.807611 11.1526 0.807611 10.5668 1.3934L1.02084 10.9393ZM47.0815 10.5L2.0815 10.5V13.5L47.0815 13.5V10.5Z"
                        fill="white"/>
                </svg>
            </NavLink>
            <div
                className="navigation__scrolldown link"
                onClick={nextScreen}
            >
                <div className="navigation__scrolldown-text">
                    scroll
                </div>
                <div className="navigation__scrolldown-line"></div>
            </div>
        </div>
        <div className='navigation__count'>
            <div
                className="navigation__line main"
                onClick={ () => changeScreen(1) }
            ></div>
            <div
                className="navigation__line about"
                onClick={ () => changeScreen(2) }
            ></div>
            <div
                className="navigation__line works"
                onClick={ () => changeScreen(3) }
            ></div>
            <div
                className="navigation__line contacts"
                onClick={ () => changeScreen(4) }
            ></div>
        </div></>
});

export default Navigation;