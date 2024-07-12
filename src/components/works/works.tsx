// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import luxy from "luxy.js";
import ecommerce from "../../assets/img/projects/e-commerce.svg";
import arrow from "../../assets/img/icons/arrow2.svg";
import kudyr from "../../assets/img/projects/kudyr.svg";
import social from "../../assets/img/projects/social.svg";
import peekaboovillage from "../../assets/img/projects/peekaboovillage.svg";
import Footer from "../footer/footer";
import { useOnPageOpened } from "../../utils";
import Tip from "../../utils/Tip";
import { usePageTransition } from "../../hooks/use-page-transition";
import React from "react";

const Works = () => {
  const tipIsShown = useOnPageOpened();
  usePageTransition(2);
  React.useEffect(() => {
    luxy.init();
  }, []);
  return (
    <>
      <div className="page-content__main page-content__projects">
        <Tip tipIsShown={tipIsShown} />
        <div
          className="projects-title luxy-el"
          data-horizontal="1"
          data-speed-x="30"
        >
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
              <a
                href="https://nikitashevchuk.github.io/e-commerce"
                className="projects__item-img"
                target="_blank"
              >
                <img
                  src={ecommerce}
                  alt=""
                  className="luxy-el svg"
                  data-speed-y="4"
                  data-offset={`-${(100 / 963) * window.innerHeight}`}
                />
              </a>
              <div className="projects__item-title">
                <div className="page-content__title">
                  <div className="page-content__title-count">
                    <span className="text">/</span>
                    <span className="text-red">01</span>
                  </div>
                  <div className="page-content__title-main">E-commerce</div>
                  <div className="page-content__title-line"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="projects__item __item-right second">
            <a
              href="https://github.com/NikitaShevchuk"
              target="_blank"
              className="third-screen__button hide-circle project__botton"
            >
              <span>
                Repository
                <img src={arrow} alt="" />
              </span>
            </a>

            <div className="single-project">
              <a
                href="https://nikitashevchuk.github.io/social-network/"
                className="projects__item-img"
                target="_blank"
              >
                <img
                  src={social}
                  alt=""
                  className="luxy-el"
                  data-speed-y="-5"
                  data-offset={`${(260 / 963) * window.innerHeight}`}
                />
              </a>
              <div className="projects__item-title">
                <div className="page-content__title">
                  <div className="page-content__title-count">
                    <span className="text">/</span>
                    <span className="text-red">02</span>
                  </div>
                  <div className="page-content__title-main">Social network</div>
                  <div className="page-content__title-line"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="projects__item __item-left last">
            <div className="single-project">
              <a
                href="https://nikitashevchuk.github.io/freelance-projects/"
                className="projects__item-img"
                target="_blank"
              >
                <img
                  src={peekaboovillage}
                  alt=""
                  className="luxy-el"
                  data-speed-y="-4"
                  data-offset={`${(260 / 963) * window.innerHeight}`}
                />
              </a>
              <div className="projects__item-title">
                <div className="page-content__title">
                  <div className="page-content__title-count">
                    <span className="text">/</span>
                    <span className="text-red">03</span>
                  </div>
                  <div className="page-content__title-main">
                    peekaboovillage
                  </div>
                  <div className="page-content__title-line"></div>
                </div>
              </div>
            </div>

            <div className="single-project">
              <a
                href="https://github.com/NikitaShevchuk"
                className="projects__item-img"
                target="_blank"
              >
                <img
                  src={kudyr}
                  alt=""
                  className="luxy-el"
                  data-speed-y="2"
                  data-offset={`-${(130 / 963) * window.innerHeight}`}
                />
              </a>
              <div className="projects__item-title">
                <div className="page-content__title">
                  <div className="page-content__title-count">
                    <span className="text">/</span>
                    <span className="text-red">04</span>
                  </div>
                  <div className="page-content__title-main">accounting</div>
                  <div className="page-content__title-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Works;
