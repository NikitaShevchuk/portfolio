import React, { useEffect } from "react";
import { enterPage, exitPage } from "../../common/helpers/helpers";
import StackItem from "./StackItem";
import Footer from "../Footer/Footer";
import { techStack } from "../../constants/techStack";
import { useOnPageOpened } from "../../utils";
import Tip from "../../utils/Tip";

const About = ({ content }) => {
    const tipIsShown = useOnPageOpened();
    useEffect(() => {
        enterPage(content, 1);
        return () => {
            exitPage(content, 1);
        };
    }, []);
    return (
        <>
            <div className="page-content__main">
                <Tip tipIsShown={tipIsShown} />
                <div className="page-content__section">
                    <div className="page-content__title">
                        <div className="page-content__title-count">
                            <span className="text">/</span>
                            <span className="text-red">01</span>
                        </div>
                        <div className="page-content__title-main">ABOUT ME</div>
                        <div className="page-content__title-line"></div>
                    </div>
                    <div className="page-content__main-text">
                        Software engineer with experience in building web apps with React, Redux,
                        and Typescript. Can easily communicate in English during a workflow. My
                        passion is building dynamic, content-aware client-facing systems for online
                        retail, business services, and other areas with a modern tech stack.
                    </div>
                </div>

                <div className="page-content__section">
                    <div className="page-content__title">
                        <div className="page-content__title-count">
                            <span className="text">/</span>
                            <span className="text-red">02</span>
                        </div>
                        <div className="page-content__title-main">SKILLS</div>
                        <div className="page-content__title-line"></div>
                    </div>

                    <div className="page-content__main-text">Technologies I have worked with</div>
                </div>
                <div className="stack">
                    {techStack.map((stackItem) => (
                        <StackItem key={stackItem.title} {...stackItem} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;
