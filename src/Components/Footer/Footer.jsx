import React from 'react';
import ellipse from '../../common/assets/img/icons/ellipse.svg'
import secondEllipse from '../../common/assets/img/icons/ellipse__second.svg'
// import upwork from '../../common/assets/img/icons/upwork.svg'
// import tg from '../../common/assets/img/icons/tgBlack.png'
import fb from '../../common/assets/img/icons/fbBlack.png'
import github from '../../common/assets/img/icons/github.svg'
import linkedInIcon from '../../common/assets/img/icons/linkedInIcon.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <img
                className="background-ellipse"
                src={ellipse} alt=""
            />
            <img
                className="background-ellipse__second"
                src={secondEllipse} alt=""
            />
            <div className="footer__block">
                <div className="footer-bigText">
                    Contacts
                </div>
                <div className="footer-smallText">
                    <div className="footer-link mail">
                        <a
                            href="mailto:nikitashev1112web@gmail.com"
                            className="text"
                        >
                        <div className="visible">
                            shevchuk.nikita.gh@gmail.com
                        </div>
                        <div className="block">
                            shevchuk.nikita.gh@gmail.com
                        </div>
                    </a></div>
                    <div className="footer-social-icons">
                        {/*<div className="footer-link">*/}
                        {/*    <a*/}
                        {/*        href="https://t.me/richestofthejews"*/}
                        {/*        target="_blank"*/}
                        {/*        className="footer-social-icons__item tg"*/}
                        {/*        style={{backgroundImage: `url(${tg})`}}*/}
                        {/*    ></a>*/}
                        {/*    <a href="https://t.me/richestofthejews" className="text">*/}
                        {/*        <div className="visible">*/}
                        {/*            telegram*/}
                        {/*        </div>*/}
                        {/*        <div className="block">*/}
                        {/*            telegram*/}
                        {/*        </div>*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                        {/*<div className="footer-link">*/}
                        {/*    <a*/}
                        {/*        href="https://upwork.com"*/}
                        {/*        target="_blank"*/}
                        {/*        className="footer-social-icons__item upwork"*/}
                        {/*        style={{backgroundImage: `url(${upwork})`}}*/}
                        {/*    ></a>*/}
                        {/*    <a*/}
                        {/*        href="https://www.fl.ru/users/nikitashev1112"*/}
                        {/*        className="text"*/}
                        {/*    >*/}
                        {/*        <div className="visible">*/}
                        {/*            upwork*/}
                        {/*        </div>*/}
                        {/*        <div className="block">*/}
                        {/*            upwork*/}
                        {/*        </div>*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                        <div className="footer-link">
                            <a
                                href="https://github.com/NikitaShevchuk"
                                target="_blank"
                                className="footer-social-icons__item linkedin"
                                style={{backgroundImage: `url(${github})`}}
                            ></a>
                            <a
                                href="https://github.com/NikitaShevchuk"
                                className="text"
                            >
                                <div className="visible">
                                    github
                                </div>
                                <div className="block">
                                    github
                                </div>
                            </a>
                        </div>
                        <div className="footer-link">
                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                className="footer-social-icons__item linkedin"
                                style={{backgroundImage: `url(${linkedInIcon})`}}
                            ></a>
                            <a
                                href="https://www.linkedin.com/"
                                className="text"
                            >
                                <div className="visible">
                                    linkedin
                                </div>
                                <div className="block">
                                    linkedin
                                </div>
                            </a>
                        </div>
                        <div className="footer-link">
                            <a
                                href="https://www.facebook.com/profile.php?id=100007489969348"
                                target="_blank"
                                className="footer-social-icons__item fb"
                                style={{backgroundImage: `url(${fb})`}}
                            ></a>
                            <a
                                href="https://www.facebook.com/profile.php?id=100007489969348"
                                className="text"
                            >
                                <div className="visible">
                                    facebook
                                </div>
                                <div className="block">
                                    facebook
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-smallText copyright">
                    <div className="text">Developed by Mykyta Shevchuk</div>
                    <div className="text">©2022 All rights reserved</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;