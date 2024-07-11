import { NavLink } from "react-router-dom";
import {
  AllowedScreenNumber,
  screenActions,
  ScreenContext,
} from "../../hooks/use-screen-state";
import React from "react";

const Header = () => {
  const { dispatch: dispatchScreenState } = React.useContext(ScreenContext);
  const changeScreen = (screenNumber: AllowedScreenNumber) => {
    dispatchScreenState(screenActions.changeCurrentScreen(screenNumber));
  };
  return (
    <header className="header animate">
      <NavLink
        className="logo hide-circle"
        onClick={() => changeScreen(1)}
        to="/"
      >
        <div className="logo-circle"></div>
        <div className="block">portfolio</div>
        <div className="visible">portfolio</div>
      </NavLink>
      <div className="menu">
        <NavLink
          to="/"
          className="menu__item link main"
          onClick={() => changeScreen(1)}
        >
          <span className="block">home</span>
          <span className="visible">home</span>
        </NavLink>
        <NavLink
          to="/"
          className="menu__item link about"
          onClick={() => changeScreen(2)}
        >
          <span className="block">about me</span>
          <span className="visible">about me</span>
        </NavLink>
        <NavLink
          to="/"
          className="menu__item link works"
          onClick={() => changeScreen(3)}
        >
          <span className="block">projects</span>
          <span className="visible">projects</span>
        </NavLink>
        <NavLink
          to="/"
          className="menu__item link contacts"
          onClick={() => changeScreen(4)}
        >
          <span className="block">contacts</span>
          <span className="visible">contacts</span>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
