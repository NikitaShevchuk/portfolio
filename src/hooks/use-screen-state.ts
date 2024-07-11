import firstScreenImage from "../assets/img/firstScreen.png";
import thirdScreenImage from "../assets/img/thirdScreen.svg";
import fourthScreenImage from "../assets/img/fourthScreen.svg";

import Contacts from "../components/main-screen/contacts";
import React from "react";
import { Add, IntRange } from "../utils/typing";

const initialScreens = [
  {
    className: "second-screen screen" as string,
    link: "/about",
    title: "Nikita Shevchuk",
    subtitle: "front-end developer",
    image: firstScreenImage,
    order: "01",
    showButton: false,
  },
  {
    className: "third-screen screen" as string,
    link: "/works",
    title: "My projects",
    subtitle: "list of my best works",
    image: thirdScreenImage,
    order: "02",
    showButton: true,
  },
  {
    className: "fourth-screen screen" as string,
    link: "",
    title: "Contacts",
    textToCopy: [`shevchuk.nikita.gh@gmail.com`, `+380931471176`],
    Body: Contacts,
    image: fourthScreenImage,
    order: "03",
    showButton: false,
  },
] as const;

type Screens = typeof initialScreens;

export type AllowedScreenNumber = IntRange<
  1,
  Add<typeof initialScreens.length, 2>
>;

const initialState = {
  currentScreen: (localStorage.getItem("currentScreen") ??
    1) as AllowedScreenNumber,
  isScreenOpen: false,
  screens: initialScreens,
};

export type ScreenState = typeof initialState;
export const ScreenContext = React.createContext<{
  state: ScreenState;
  dispatch: React.Dispatch<ScreenActions>;
}>({ state: initialState, dispatch: () => {} });
export enum ScreenActionTypes {
  ENTER_SCREEEN = "ENTER_SCREEN",
  EXIT_SCREEN = "EXIT_SCREEN",
  CHANGE_CURRENT_SCREEN = "CHANGE_CURRENT_SCREEN",
  NEXT_SCREEN = "NEXT_SCREEN",
  PREV_SCREEN = "PREV_SCREEN",
  SET_IS_SCREEN_OPEN = "SET_IS_SCREEN_OPEN",
}

export const screenActions = {
  enterScreen: (screenNumber: AllowedScreenNumber) => ({
    type: ScreenActionTypes.ENTER_SCREEEN,
    payload: screenNumber,
  }),
  exitScreen: (screenNumber: AllowedScreenNumber) => ({
    type: ScreenActionTypes.EXIT_SCREEN,
    payload: screenNumber,
  }),
  changeCurrentScreen: (screenNumber: AllowedScreenNumber) => ({
    type: ScreenActionTypes.CHANGE_CURRENT_SCREEN,
    payload: screenNumber,
  }),
  nextScreen: () => ({
    type: ScreenActionTypes.NEXT_SCREEN,
    payload: undefined,
  }),
  prevScreen: () => ({
    type: ScreenActionTypes.PREV_SCREEN,
    payload: undefined,
  }),
  setIsScreenOpen: (isScreenOpen: boolean) => ({
    type: ScreenActionTypes.SET_IS_SCREEN_OPEN,
    payload: isScreenOpen,
  }),
};

type ScreenActions = Omit<
  ReturnType<(typeof screenActions)[keyof typeof screenActions]>,
  "payload"
> & {
  payload: unknown;
};

function reducer(state: ScreenState, action: ScreenActions): ScreenState {
  if (action.type === ScreenActionTypes.ENTER_SCREEEN) {
    const screenIndex = (action.payload as number) - 2;
    const updatedScreens = [...state.screens];
    updatedScreens[screenIndex] = {
      ...state.screens[screenIndex],
      className: state.screens[screenIndex] + " animate",
    };
    return {
      ...state,
      screens: updatedScreens as unknown as Screens,
    };
  }
  if (action.type === ScreenActionTypes.EXIT_SCREEN) {
    const screenIndex = (action.payload as number) - 2;
    const updatedScreens = [...state.screens];
    const prevClassName = state.screens[screenIndex].className;
    updatedScreens[screenIndex] = {
      ...state.screens[screenIndex],
      className: prevClassName.replace(" animate", ""),
    };
    return {
      ...state,
      screens: updatedScreens as unknown as Screens,
    };
  }
  if (action.type === ScreenActionTypes.CHANGE_CURRENT_SCREEN) {
    return { ...state, currentScreen: action.payload as AllowedScreenNumber };
  }
  if (action.type === ScreenActionTypes.NEXT_SCREEN) {
    const nextScreen = (state.currentScreen + 1) as AllowedScreenNumber;
    const nextScreenIndexIsValid = nextScreen <= state.screens.length + 1;
    if (!nextScreenIndexIsValid) {
      return state;
    }
    return { ...state, currentScreen: nextScreen };
  }
  if (action.type === ScreenActionTypes.PREV_SCREEN) {
    const prevScreen = (state.currentScreen - 1) as AllowedScreenNumber;
    const prevScreenIndexIsValid = prevScreen > 0;
    if (!prevScreenIndexIsValid) {
      return state;
    }
    return { ...state, currentScreen: prevScreen };
  }
  if (action.type === ScreenActionTypes.SET_IS_SCREEN_OPEN) {
    return { ...state, isScreenOpen: action.payload as boolean };
  }

  console.warn("Unknown action type", action);

  return state;
}

export function useScreenState() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return { state, dispatch };
}
