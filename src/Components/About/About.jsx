import React, {useEffect} from 'react';
import {enterPage, exitPage} from "../../common/helpers/helpers";
import StackItem from "./StackItem";
import Footer from "../Footer/Footer";
import { techStack } from '../../constants/techStack';

const About = ({content}) => {
    useEffect( () => {
        enterPage(content, 1)
        return () => {
            exitPage(content, 1)
        }
    } , [] )
    return (<>
        <div className="page-content__main">
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
                    Freelance software engineer with experience working with clients.
                    Can easily communicate in English during workflow. Have got a hands-on experience with React.
                    Ready to develop software engineering skills with React and Angular to bring the best solution.
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

                <div className="page-content__main-text">
                    Technologies I have worked with
                </div>
            </div>
            <div className="stack">
                {techStack.map( stackItem => <StackItem {...stackItem} /> )}
            </div>
        </div>
        <Footer />
    </>);
};

export default About;