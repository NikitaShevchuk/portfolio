import React from "react";
import linkedInIcon from "../../common/assets/img/icons/linkedInIcon_white.svg";
import github from "../../common/assets/img/icons/github_white.svg";

const Contacts = () => {
    return (
        <div className="footer-social-icons footer-smallText">
            <div className="footer-link">
                <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    className="footer-social-icons__item linkedin"
                    style={{ backgroundImage: `url(${linkedInIcon})` }}
                ></a>
                <a href="https://www.linkedin.com/" className="text">
                    <div className="visible">linkedin</div>
                    <div className="block">linkedin</div>
                </a>
            </div>
            <div className="footer-link">
                <a
                    href="https://github.com/NikitaShevchuk"
                    target="_blank"
                    className="footer-social-icons__item linkedin"
                    style={{ backgroundImage: `url(${github})` }}
                ></a>
                <a href="https://github.com/NikitaShevchuk" className="text">
                    <div className="visible">github</div>
                    <div className="block">github</div>
                </a>
            </div>
        </div>
    );
};

export default Contacts;
