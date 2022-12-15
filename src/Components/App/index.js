import React from "react";
import luxy from 'luxy.js'
import '../../common/assets/style.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import MainScreen from '../MainScreen/MainScreen';
import {useEffect, useRef, useState} from 'react';
import mainBg from '../../common/assets/img/main-bg.webp';
import mainBgFullhd from '../../common/assets/img/main-bg-FullHd.webp';
import Screen from '../MainScreen/ScreenComponent';
import {observer} from "mobx-react-lite";
import {changeNameByOrder} from "../../common/helpers/helpers";
import screenState from '../../state/screenState';
import AppRoutes from './AppRoutes'


const App = observer(() => {
    const [resolution, setResolution] = useState(mainBgFullhd);
    const content = useRef();
    const yDown = useRef(null)
    const yUp = useRef(null)
    useEffect(() => {
        if (window.innerWidth > 1920) setResolution(mainBg)
        luxy.init();
    }, [])
    const handleWheel = (e) => {
        if (screenState.isScreenOpened) return
        const action = e.deltaY > 0 ? 'next' : 'prev'
        screenState.changeScreenOnScroll(action)
    }
    const handleTouchStart = (e) => {
        yDown.current = e.touches[0].clientY
    }
    const handleTouchMove = (e) => {
        if (!yDown.current || screenState.isScreenOpened) return
        yUp.current = e.touches[0].clientY
        const yDiff = yDown.current - yUp.current
        const action = yDiff > 0 ? 'next' : 'prev'
        screenState.changeScreenOnScroll(action)
        yDown.current = null
        yUp.current = null
    }
    const screenComponents = React.useMemo(
        () => screenState.screens.map(
            screen => <Screen key={screen.order} {...screen}/>
        ), [screenState.screens.slice()]
    )
    const screenClassName = React.useMemo(
        () => changeNameByOrder(screenState.currentScreen, screenState.isScreenOpened),
        [screenState.currentScreen, screenState.isScreenOpened]
    )
    return (
        <div
            className={screenClassName}
            onWheel={handleWheel}
            onTouchMove={handleTouchMove}
            onTouchStart={handleTouchStart}
        >
            <div className='main-wrapper'>
                <Navigation />
                <Header />
                <div id="luxy">
                    <div
                        className='content'
                        ref={content}
                    >
                        <MainScreen/>
                        {screenComponents}
                    </div>
                    <AppRoutes content={content} />
                </div>
            </div>
            <div
                className='parallax'
                style={{backgroundImage: `url('${resolution}')`}}
            ></div>
        </div>
    );
})

export default App;
