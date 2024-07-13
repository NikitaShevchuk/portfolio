import React from 'react';
import { screenActions, ScreenContext } from '../../hooks/use-screen-state';

const MainScreen = () => {
  const { dispatch: dispatchScreenState } = React.useContext(ScreenContext);
  const changeScreen = () => dispatchScreenState(screenActions.changeCurrentScreen(2));
  return (
    <div className='main-screen'>
      <div className='main-screen__text'>
        <span>Hi</span>
        <span>! I'm </span>
        <span>Nikita </span>
        <span>and </span>
        <span>I'm </span>{' '}
        <span>
          a <span>Software</span> Engineer
        </span>
        <span>.</span>
        <br />
        <span>I will </span> <span>be glad </span> <span>to cooperate 🤝</span>
      </div>
      <div className='scroll-to-icon' onClick={changeScreen}></div>
    </div>
  );
};

export default MainScreen;
