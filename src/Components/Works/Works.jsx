import React, {useEffect} from 'react';
import luxy from 'luxy.js'
import ecommerce from '../../common/assets/img/projects/e-commerce.svg'
import arrow from '../../common/assets/img/icons/arrow2.svg'
import kudyr from '../../common/assets/img/projects/kudyr.svg'
import social from '../../common/assets/img/projects/social.svg'
import peekaboovillage from '../../common/assets/img/projects/peekaboovillage.svg'
import {enterPage, exitPage} from "../../common/helpers/helpers";
import Footer from "../Footer/Footer";

const Works = ({content}) => {
    useEffect(() => {
        enterPage(content, 2);
        luxy.init();
        return () => exitPage(content, 2)
    }, [])
    return (<>
        <div className="page-content__main page-content__projects">

            <div className="projects-title luxy-el" data-horizontal="1" data-speed-x="30">
                <div className="projects-title__item">WORKS</div>
                <div className="projects-title__item filled">WORKS</div>
                <div className="projects-title__item">WORKS</div>
                <div className="projects-title__item filled">WORKS</div>
                <div className="projects-title__item">WORKS</div>
                <div className="projects-title__item filled">WORKS</div>
            </div>

            <div className="projects">

                <div className="projects__item __item-left first">
                    <div className="single-project">
                        <a href="https://nikitashevchuk.github.io/e-commerce" className="projects__item-img" target="_blank">
                            <img src={ecommerce} alt="" className="luxy-el svg" data-speed-y="4"
                                 data-offset={`-${100 / 963 * window.innerHeight}`} />
                        </a>
                        <div className="projects__item-title">
                            <div className="page-content__title">
                                <div className="page-content__title-count">
                                    <span className="text">/</span>
                                    <span className="text-red">01</span>
                                </div>
                                <div className="page-content__title-main">E-commerce project</div>
                                <div className="page-content__title-line"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projects__item __item-right second">

                    <a href="https://www.upwork.com/" target="_blank"
                       className="third-screen__button hide-circle project__botton">
                        <span>see all projects<img src={arrow} alt="" /></span>
                    </a>

                    <div className="single-project">
                        <a href="https://nikitashevchuk.github.io/my-app" className="projects__item-img" target="_blank">
                            <img src={social} alt="" className="luxy-el" data-speed-y="-5"
                                 data-offset={`${260 / 963 * window.innerHeight}`} />
                        </a>
                        <div className="projects__item-title">
                            <div className="page-content__title">
                                <div className="page-content__title-count">
                                    <span className="text">/</span>
                                    <span className="text-red">02</span>
                                </div>
                                <div className="page-content__title-main">Social network project</div>
                                <div className="page-content__title-line"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projects__item __item-left last">

                    <div className="single-project">
                        <a href="https://peekaboovillage.ru/" className="projects__item-img" target="_blank">
                            <img src={peekaboovillage} alt="" className="luxy-el"
                                 data-speed-y="-4"
                                 data-offset={`${260 / 963 * window.innerHeight}`} />
                        </a>
                        <div className="projects__item-title">
                            <div className="page-content__title">
                                <div className="page-content__title-count">
                                    <span className="text">/</span>
                                    <span className="text-red">03</span>
                                </div>
                                <div className="page-content__title-main">peekaboovillage.ru</div>
                                <div className="page-content__title-line"></div>
                            </div>
                        </div>
                    </div>

                    <div className="single-project">
                        <a href="https://kudyr.ru/" className="projects__item-img" target="_blank">
                            <img src={kudyr} alt="" className="luxy-el" data-speed-y="2"
                                 data-offset={`-${130 / 963 * window.innerHeight}`} />
                        </a>
                        <div className="projects__item-title">
                            <div className="page-content__title">
                                <div className="page-content__title-count">
                                    <span className="text">/</span>
                                    <span className="text-red">04</span>
                                </div>
                                <div className="page-content__title-main">kudyr.ru</div>
                                <div className="page-content__title-line"></div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        <Footer />
    </>);
};

export default Works;