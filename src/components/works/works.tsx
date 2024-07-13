// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import luxy from 'luxy.js';
import develops from '../../assets/img/develops.png';
import arrow from '../../assets/img/icons/arrow2.svg';
import social from '../../assets/img/projects/social.svg';
import Footer from '../footer/footer';
import { useOnPageOpened } from '../../utils';
import Tip from '../../utils/Tip';
import { usePageTransition } from '../../hooks/use-page-transition';
import React from 'react';

const Works = () => {
  const tipIsShown = useOnPageOpened();
  usePageTransition(2);
  React.useEffect(() => {
    luxy.init();
  }, []);
  return (
    <>
      <div className='page-content__main page-content__projects'>
        <Tip tipIsShown={tipIsShown} />
        <div className='projects-title luxy-el' data-horizontal='1' data-speed-x='30'>
          <div className='projects-title__item'>EXPERIENCE</div>
          <div className='projects-title__item filled'>EXPERIENCE</div>
          <div className='projects-title__item'>EXPERIENCE</div>
          <div className='projects-title__item filled'>EXPERIENCE</div>
          <div className='projects-title__item'>EXPERIENCE</div>
          <div className='projects-title__item filled'>EXPERIENCE</div>
        </div>

        <div className='projects'>
          <div className='projects__item __item-left first'>
            <div className='single-project'>
              <a href='https://develops.today/' className='projects__item-img' target='_blank'>
                <img
                  src={develops}
                  alt=''
                  className='luxy-el svg'
                  data-speed-y='4'
                  data-offset={`-${(100 / 963) * window.innerHeight}`}
                />
              </a>
              <div className='projects__item-title'>
                <div className='page-content__title'>
                  <div className='page-content__title-count'>
                    <span className='text'>/</span>
                    <span className='text-red'>01</span>
                  </div>
                  <div className='page-content__title-main'>Develops Today </div>
                  <div className='page-content__title-line'></div>
                  <div style={{ paddingLeft: '20px', paddingTop: '5px' }}>April 2023 - May 2024 (13 months)</div>
                </div>
              </div>
            </div>
            <div className='flex flex-column justify-between'>
              <div>
                <div className='title'>Achievements</div>
                <ul style={{ opacity: 0.8 }}>
                  <li className='small-text'>
                    Created and maintained a comprehensive marketing platform, increasing user satisfaction by 40%, by
                    developing the UI using Next.js, directly communicating with users to gather feedback, and
                    implementing requested functionality. Improved client onboarding success by 50% by conducting
                    onboarding meetings, maintaining the project, fixing bugs, and developing APIs using Django and Rest
                    Framework. Integrated OpenAI and third-party APIs, and created and maintained a Chrome extension,
                    significantly enhancing platform capabilities.
                  </li>
                  <li className='small-text'>
                    Developed a fully functional NFT marketplace platform, by implementing UI development with
                    Typescript and Next.js, integrating blockchain interactions, and creating functionalities for NFT
                    collections with pipelines to process large amounts of NFTs. Enhanced marketplace usability and user
                    satisfaction by implementing advanced filtering and sorting mechanisms leading to a 35% increase in
                    user engagement. Developed comprehensive marketplace analytics features.
                  </li>
                  <li className='small-text'>
                    Managed a team of intern developers, assigning tasks and reviewing their code to ensure quality and
                    consistency with project requirements.
                  </li>
                  <li className='small-text'>
                    Conducted technical interviews, effectively recruiting and assessing the technical skills of
                    potential candidates, thereby strengthening the development team.
                  </li>
                </ul>
              </div>
              <a
                href='https://develops.today/'
                target='_blank'
                className='third-screen__button hide-circle project__botton'
              >
                <span>
                  Company Website
                  <img src={arrow} alt='' />
                </span>
              </a>
            </div>
          </div>

          <div className='projects__item __item-right second'>
            <div>
              <div className='title'>Achievements</div>

              <ul style={{ opacity: 0.8 }}>
                <li className='small-text'>
                  Developed a resource for publishing and downloading articles and books in different formats
                </li>
                <li className='small-text'>
                  Provided an online service to a customer for searching and managing different schools and courses for
                  children using Wordpress.{' '}
                </li>
                <li className='small-text'>Deployed more than 10 sites on HTML/CSS, Javascript, and WordPress.</li>
              </ul>
            </div>
            <div className='single-project'>
              <a href='#' className='projects__item-img'>
                <img
                  src={social}
                  alt=''
                  className='luxy-el'
                  data-speed-y='-5'
                  data-offset={`${(260 / 1100) * window.innerHeight}`}
                />
              </a>
              <div className='projects__item-title'>
                <div className='page-content__title'>
                  <div className='page-content__title-count'>
                    <span className='text'>/</span>
                    <span className='text-red'>02</span>
                  </div>
                  <div className='page-content__title-main'>Freelance</div>
                  <div className='page-content__title-line'></div>
                  <div style={{ paddingLeft: '20px', paddingTop: '5px' }}>June 2020 - December 2021</div>
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
