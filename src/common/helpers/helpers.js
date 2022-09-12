import screenState from "../../state/screenState";

export const enterPage = (content, screenOrder = 1) => {
    content.current.style.maxHeight = '100vh';
    content.current.style.transform = 'none';
    content.current.style.transition = 'none';
    content.current.scrollTo(0, window.innerHeight * screenOrder);
    screenState.enterScreen(screenOrder + 1)
    screenState.setIsScreenOpened(true)
}
export const exitPage = (content, screenOrder = 1) => {
    content.current.style.maxHeight = null;
    content.current.style.transform = null;
    setTimeout(() => content.current.style.transition = null, 500)
    screenState.exitScreen(screenOrder + 1)
    screenState.setIsScreenOpened(false)
}

// classNames for main wrapper
const FIRST_SCREEN = 'first-screen animate'
const SECOND_SCREEN = 'second-screen black'
const THIRD_SCREEN = 'third-screen black'
const FOURTH_SCREEN = 'fourth-screen black'

export const changeNameByOrder = (screenNumber, isScreenOpened) => {
    const changeClassName = (className) => {
        if (isScreenOpened) return `${className} page-content`
        else return className.replace(' page-content', '')
    }
    if (screenNumber === 1) return changeClassName(FIRST_SCREEN)
    if (screenNumber === 2) return changeClassName(SECOND_SCREEN)
    if (screenNumber === 3) return changeClassName(THIRD_SCREEN)
    if (screenNumber === 4) return changeClassName(FOURTH_SCREEN)
    else return changeClassName(FIRST_SCREEN)
}