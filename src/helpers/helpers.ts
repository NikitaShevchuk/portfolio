// classNames for main wrapper
const FIRST_SCREEN = 'first-screen animate';
const SECOND_SCREEN = 'second-screen black';
const THIRD_SCREEN = 'third-screen black';
const FOURTH_SCREEN = 'fourth-screen black';

export const changeNameByOrder = (screenNumber: number, isScreenOpened: boolean) => {
  const changeClassName = (className: string) => {
    if (isScreenOpened) {
      return `${className} page-content`;
    } else {
      return className.replace(' page-content', '');
    }
  };
  if (screenNumber === 1) {
    return changeClassName(FIRST_SCREEN);
  }
  if (screenNumber === 2) {
    return changeClassName(SECOND_SCREEN);
  }
  if (screenNumber === 3) {
    return changeClassName(THIRD_SCREEN);
  }
  if (screenNumber === 4) {
    return changeClassName(FOURTH_SCREEN);
  } else {
    return changeClassName(FIRST_SCREEN);
  }
};
