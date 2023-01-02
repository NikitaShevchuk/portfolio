import firstScreenImage from "../common//assets/img/firstScreen.png";
import thirdScreenImage from "../common/assets/img/thirdScreen.svg";
import fourthScreenImage from "../common/assets/img/fourthScreen.svg";
import { makeAutoObservable } from "mobx";
import Contacts from "../Components/MainScreen/Contacts";

class screenState {
    currentScreen = localStorage.getItem("currentScreen")
        ? Number(localStorage.getItem("currentScreen"))
        : 1;
    screens = [
        {
            className: "second-screen screen",
            link: "/about",
            title: "Nikita Shevchuk",
            subtitle: "front-end developer",
            image: firstScreenImage,
            order: "01",
            showButton: false,
        },
        {
            className: "third-screen screen",
            link: "/works",
            title: "My projects",
            subtitle: "list of my best works",
            image: thirdScreenImage,
            order: "02",
            showButton: true,
        },
        {
            className: "fourth-screen screen",
            link: "",
            title: "Contacts",
            textToCopy: [`shevchuk.nikita.gh@gmail.com`, `+380931471176`],
            Body: Contacts,
            image: fourthScreenImage,
            order: "03",
            showButton: false,
        },
    ];
    isScreenOpened = false;
    constructor() {
        makeAutoObservable(this, {}, { deep: true });
    }
    enterScreen = (screenNumber) => {
        const screenIndex = screenNumber - 2;
        this.screens[screenIndex].className += " animate";
    };
    exitScreen = (screenNumber) => {
        const screenIndex = screenNumber - 2;
        this.screens[screenIndex].className = this.screens[
            screenIndex
        ].className.replace(" animate", "");
    };
    changeCurrentScreen = (screenNumber) => {
        this.currentScreen = screenNumber;
        localStorage.setItem("currentScreen", screenNumber);
    };
    changeScreenOnScroll(action = "next") {
        // 'next' | 'prev'
        if (action === "next") this.nextScreen();
        else this.prevScreen();
    }
    nextScreen() {
        const canIncrease = this.currentScreen < this.screens.length + 1;
        if (canIncrease) {
            ++this.currentScreen;
            localStorage.setItem("currentScreen", String(this.currentScreen));
        }
    }
    prevScreen() {
        const canDecrease = this.currentScreen > 1;
        if (canDecrease) {
            --this.currentScreen;
            localStorage.setItem("currentScreen", String(this.currentScreen));
        }
    }
    setIsScreenOpened(isScreenOpened) {
        this.isScreenOpened = isScreenOpened;
    }
}

export default new screenState();
