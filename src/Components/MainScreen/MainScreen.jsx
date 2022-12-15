import React from 'react';
import screenState from "../../state/screenState";

const MainScreen = () => {
    const changeScreen = () => screenState.changeCurrentScreen(2)
    return <div className="main-screen">
            <div className="main-screen__text">
                <span>Hi</span><span>! I'm </span><span>Nikita </span><span>and </span>
                <span>I'm </span> <span>a <span>Software</span> Engineer</span><span>
                .</span><br/><span>I will </span> <span>be glad </span> <span>to cooperate 🤝</span>
            </div>
            <div className="scroll-to-icon" onClick={changeScreen}></div>
        </div>
};

export default MainScreen;