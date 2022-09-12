import React, {Suspense} from "react";
import './App.css';
import luxy from 'luxy.js'
import './common/assets/style.css';
import {Route, Routes} from 'react-router-dom';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import MainScreen from './Components/MainScreen/MainScreen';
import {useEffect, useRef, useState} from 'react';
import mainBg from './common/assets/img/main-bg.webp';
import mainBgFullhd from './common/assets/img/main-bg-FullHd.webp';
import Screen from './Components/MainScreen/ScreenComponent';
import {observer} from "mobx-react-lite";
import {changeNameByOrder} from "./common/helpers/helpers";
import screenState from './state/screenState';

const About = React.lazy(() => import('./Components/About/About'))
const Works = React.lazy(() => import('./Components/Works/Works'))

const App = observer(() => {
    const [resolution, setResolution] = useState(mainBgFullhd);
    const content = useRef();
    let yDown = useRef(null)
    let yUp = useRef(null)
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
                    <Routes>
                        <Route
                            path='/about'
                            element={
                                <Suspense fallback={'loading...'}>
                                    <About content={content}/>
                                </Suspense>
                            }
                        />
                        <Route
                            path='/works'
                            element={
                                <Suspense fallback={'loading...'}>
                                    <Works content={content}/>
                                </Suspense>
                            }
                        />
                    </Routes>
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
