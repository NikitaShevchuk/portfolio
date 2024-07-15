import React from 'react';
import { AllowedScreenNumber, screenActions, ScreenContext } from './use-screen-state';

export function usePageTransition(screenOrder: number) {
  const { dispatch: dispatchScreenAction } = React.useContext(ScreenContext);

  const enterPage = React.useCallback(() => {
    const content = document.querySelector<HTMLDivElement>('.content');
    if (!content) {
      return;
    }
    content.style.maxHeight = '100vh';
    content.style.transform = 'none';
    content.style.transition = 'none';
    content.scrollTo(0, window.innerHeight * screenOrder);
    dispatchScreenAction(screenActions.enterScreen((screenOrder + 1) as AllowedScreenNumber));
    dispatchScreenAction(screenActions.setIsScreenOpen(true));
  }, [dispatchScreenAction, screenOrder]);

  const exitPage = React.useCallback(() => {
    const content = document.querySelector<HTMLDivElement>('.content');
    if (!content) {
      return;
    }
    content.style.maxHeight = '';
    content.style.transform = '';
    setTimeout(() => {
      content.style.transition = '';
    }, 500);
    dispatchScreenAction(screenActions.exitScreen((screenOrder + 1) as AllowedScreenNumber));
    dispatchScreenAction(screenActions.setIsScreenOpen(false));
  }, [dispatchScreenAction, screenOrder]);

  React.useEffect(() => {
    enterPage();
    return () => {
      exitPage();
    };
  }, [enterPage, exitPage]);
}
