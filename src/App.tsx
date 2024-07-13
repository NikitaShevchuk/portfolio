import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import luxy from 'luxy.js';
import './assets/style.css';
import Header from './components/header/header';
import Navigation from './components/navigation/navigation';
import MainScreen from './components/main-screen/main-screen';
import mainBg from './assets/img/main-bg.webp';
import mainBgFullhd from './assets/img/main-bg-FullHd.webp';
import Screen from './components/main-screen/screen-component';
import { changeNameByOrder } from './helpers/helpers';
import AppRoutes from './components/app-routes';
import { screenActions, ScreenContext, useScreenState } from './hooks/use-screen-state';
import { useDebouncedCallback } from 'use-debounce';

const App = () => {
  const [bgImage, setBgImage] = React.useState(mainBgFullhd);
  const content = React.useRef<HTMLDivElement>(null);
  const yDown = React.useRef<null | number>(null);
  const yUp = React.useRef<null | number>(null);
  const { dispatch, state } = useScreenState();
  const debouncedScroll = useDebouncedCallback((e: React.WheelEvent) => {
    dispatch(e.deltaY > 0 ? screenActions.nextScreen() : screenActions.prevScreen());
  }, 50);

  const handleWheel = (e: React.WheelEvent) => {
    if (state.isScreenOpen) {
      return;
    }
    debouncedScroll(e);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    yDown.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!yDown.current || state.isScreenOpen) {
      return;
    }
    yUp.current = e.touches[0].clientY;
    const yDiff = yDown.current - (yUp.current ?? 0);
    dispatch(yDiff > 0 ? screenActions.nextScreen() : screenActions.prevScreen());
    yDown.current = null;
    yUp.current = null;
  };

  const screenClassName = React.useMemo(
    () => changeNameByOrder(state.currentScreen, state.isScreenOpen),
    [state.currentScreen, state.isScreenOpen]
  );
  const scrollDown = () => {
    window.scrollTo({
      left: 0,
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  React.useEffect(() => {
    if (window.innerWidth > 1920) {
      setBgImage(mainBg);
    }
    luxy.init();
  }, []);

  return (
    <ScreenContext.Provider value={{ dispatch, state }}>
      <div
        className={screenClassName}
        onWheel={handleWheel}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchStart}
      >
        <div className='main-wrapper'>
          <Navigation />
          <Header />
          <div className='relative' id='luxy'>
            <div className='content' ref={content}>
              <MainScreen />
              {state.screens.map((screen) => (
                <Screen key={screen.order} {...screen} />
              ))}
            </div>
            <AppRoutes />

            <div onClick={scrollDown} className='scroll-down-link'></div>
          </div>
        </div>
        <div className='parallax' style={{ backgroundImage: `url('${bgImage}')` }}></div>
      </div>
    </ScreenContext.Provider>
  );
};

export default App;
