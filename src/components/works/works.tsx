// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import luxy from 'luxy.js';
import develops from '../../assets/img/develops.png';
import cubex from '../../assets/img/cubex.svg';
import avenga from '../../assets/img/avenga.svg';
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
              <a href='http://cubex-ua.com/' className='projects__item-img' target='_blank'>
                <img
                  src={cubex}
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
                  <div className='page-content__title-main'>CubeX </div>
                  <div className='page-content__title-line'></div>
                  <div style={{ paddingLeft: '20px', paddingTop: '5px' }}>October 2024 - November 2025 (13 months)</div>
                </div>
              </div>
            </div>
            <div className='flex flex-column justify-between'>
              <div>
                <div className='title'>Achievements</div>
                <ul style={{ opacity: 0.8 }}>
                  <li className='small-text'>
                    Enhanced a large internal CMS (Next.js, Nest.js, MongoDB, PostgreSQL, microservices) with CRM
                    integrations, automation workflows, and advanced page builder improvements, reducing template
                    creation time by 80%.
                  </li>
                  <li className='small-text'>
                    Developed a full AI-driven healthcare platform (Next.js, Nest.js, PostgreSQL, AWS) with session
                    transcription, Stripe billing, and analytics dashboards, improving clinical documentation
                    efficiency.
                  </li>
                  <li className='small-text'>
                    Built scalable backend infrastructure for an appointment management system, implementing AWS
                    microservices, caching, and geolocation search to support thousands of active users.
                  </li>
                  <li className='small-text'>
                    Led developer interviews and contributed to team growth and technical decision-making across
                    multiple projects.
                  </li>
                </ul>
              </div>
              <a
                href='http://cubex-ua.com/'
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
            <div className='flex flex-column justify-between'>
              <div>
                <div className='title'>Achievements</div>

                <ul style={{ opacity: 0.8 }}>
                  <li className='small-text'>
                    Built and launched an AI-powered marketing platform (Next.js, Django REST) from the ground up,
                    collaborating with early users to define and refine core features. Created and maintained a Chrome
                    extension, significantly enhancing platform capabilities.
                  </li>
                  <li className='small-text'>
                    Contributed to NFT marketplace, improved UX/UI, driving 35% user growth. Integrated blockchain
                    interactions and created functionalities for NFT collections with pipelines to process large amounts
                    of NFTs.
                  </li>
                  <li className='small-text'>
                    Mentored interns, conducted technical interviews, and led code reviews to maintain code quality and
                    team consistency..
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

            <div className='single-project'>
              <a href='https://develops.today/' className='projects__item-img'>
                <img
                  src={develops}
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
                  <div className='page-content__title-main'>Develops Today</div>
                  <div className='page-content__title-line'></div>
                  <div style={{ paddingLeft: '20px', paddingTop: '5px' }}>April 2023 - May 2024 (13 months)</div>
                </div>
              </div>
            </div>
          </div>

          <div className='projects__item __item-left first'>
            <div className='single-project'>
              <a href='https://www.avenga.com/' className='projects__item-img' target='_blank'>
                <img
                  src={avenga}
                  alt=''
                  className='luxy-el svg'
                  data-speed-y='4'
                  data-offset={`-${(100 / 450) * window.innerHeight}`}
                />
              </a>
              <div className='projects__item-title'>
                <div className='page-content__title'>
                  <div className='page-content__title-count'>
                    <span className='text'>/</span>
                    <span className='text-red'>03</span>
                  </div>
                  <div className='page-content__title-main'>Avenga </div>
                  <div className='page-content__title-line'></div>
                  <div style={{ paddingLeft: '20px', paddingTop: '5px' }}>May 2022 - February 2023 (10 months)</div>
                </div>
              </div>
            </div>
            <div className='flex flex-column justify-between'>
              <div>
                <div className='title'>Achievements</div>
                <ul style={{ opacity: 0.8 }}>
                  <li className='small-text'>
                    Developed and maintained web applications using React.js, Node.js, and PostgreSQL.
                  </li>
                  <li className='small-text'>
                    Implemented frontend components, backend APIs, and database integrations.
                  </li>
                  <li className='small-text'>
                    Collaborated with a small team to gather client requirements and deliver functional solutions.
                  </li>
                  <li className='small-text'>
                    Contributed to CI/CD pipelines, automated testing, and deployment workflows.
                  </li>
                </ul>
              </div>
              <a
                href='https://www.avenga.com/'
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Works;
