import React, {useEffect} from 'react';
import {enterPage, exitPage} from "../../common/helpers/helpers";
import StackItem from "./StackItem";
import html from '../../common/assets/img/stack/html.svg'
import css from '../../common/assets/img/stack/css.svg'
import git from '../../common/assets/img/stack/git.svg'
import ts from '../../common/assets/img/stack/ts.svg'
import sass from '../../common/assets/img/stack/sass.svg'
import bootstrap from '../../common/assets/img/stack/bootstrap.svg'
import figma from '../../common/assets/img/stack/figma.svg'
import illustrator from '../../common/assets/img/stack/illustrator.svg'
import js from '../../common/assets/img/stack/js.svg'
import npm from '../../common/assets/img/stack/npm.svg'
import photoshop from '../../common/assets/img/stack/photoshop.svg'
import react from '../../common/assets/img/stack/react.svg'
import redux from '../../common/assets/img/stack/redux.svg'
import xd from '../../common/assets/img/stack/xd.svg'
import mui from '../../common/assets/img/stack/mui.svg'
import Footer from "../Footer/Footer";

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
                    I develop fast and optimized web applications with React.js
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
                    Here you can see tech stack I currently use.
                </div>
            </div>
            <div className="stack">

                <div className="stack__row">
                    <StackItem image={html} title={'HTML'} exp={'2 years'} />
                    <StackItem image={css} title={'CSS'} exp={'2 years'} />
                    <StackItem image={js} title={'JS'} exp={'2 years'} />
                    <StackItem image={sass} title={'SASS'} exp={'2 years'} />
                    <StackItem image={ts} title={'Typescript'} exp={'6 months'} />
                </div>
                <div className="stack__row">
                    <StackItem image={react} title={'React'} exp={'6 months'} />
                    <StackItem image={redux} title={'Redux'} exp={'6 months'} />
                    <StackItem image={npm} title={'NPM'} exp={'6 months'} />
                    <StackItem image={git} title={'GIT'} exp={'6 months'} />
                    <StackItem image={bootstrap} title={'Bootstrap'} exp={'6 months'} />
                </div>
                <div className="stack__row">
                    <StackItem image={mui} title={'Material UI'} exp={'3 months'} />
                    <StackItem image={photoshop} title={'Photoshop'} exp={'1 year'} />
                    <StackItem image={figma} title={'Figma'} exp={'1 year'} />
                    <StackItem image={xd} title={'Adobe XD'} exp={'1 year'} />
                    <StackItem image={illustrator} title={'Illustrator'} exp={'1 year'} />
                </div>
            </div>
        </div>
        <Footer />
    </>);
};

export default About;