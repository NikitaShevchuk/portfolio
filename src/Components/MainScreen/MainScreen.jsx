import React from 'react';
import screenState from "../../state/screenState";

const MainScreen = () => {
    const changeScreen = () => screenState.changeCurrentScreen(2)
    return <div className="main-screen">
            <div className="main-screen__text">
                <span>Hello</span><span>, i'm </span><span>Nikita</span><span>. I </span>
                <span>develop </span> <span className="filled">custom web applications</span><span>
                .</span><br/><span>Glad </span> <span>to </span><span>help </span>
                    <span>you 🤝</span>
                    <br/>
            </div>
            <div className="scroll-to-icon" onClick={changeScreen}></div>
        </div>
};

export default MainScreen;