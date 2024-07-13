import StackItem from './stack-item';
import Footer from '../footer/footer';
import { techStack } from '../../constants/techStack';
import { useOnPageOpened } from '../../utils';
import Tip from '../../utils/Tip';
import { usePageTransition } from '../../hooks/use-page-transition';

const About = () => {
  const tipIsShown = useOnPageOpened();
  usePageTransition(1);
  return (
    <>
      <div className='page-content__main'>
        <Tip tipIsShown={tipIsShown} />
        <div style={{ paddingTop: '100px' }} className='page-content__section'>
          <div className='page-content__title'>
            <div className='page-content__title-count'>
              <span className='text'>/</span>
              <span className='text-red'>01</span>
            </div>
            <div className='page-content__title-main'>ABOUT ME</div>
            <div className='page-content__title-line'></div>
          </div>
          <div className='page-content__main-text'>
            Software engineer with experience in building web apps with React, Next.js, Node.js, Django, and Typescript.
            Can easily communicate in English during a workflow. My passion is building dynamic, content-aware
            client-facing systems for online retail, business services, and other areas with a modern tech stack.
          </div>
        </div>

        <div className='page-content__section'>
          <div className='page-content__title'>
            <div className='page-content__title-count'>
              <span className='text'>/</span>
              <span className='text-red'>02</span>
            </div>
            <div className='page-content__title-main'>
              EDUCATION <span className='half-opacity'>(2019 - 2023)</span>
            </div>
            <div className='page-content__title-line'></div>
          </div>

          <div className='page-content__main-text'>
            National Taras Shevchenko University of Kyiv{' '}
            <span className='half-opacity'>(Optical and Mechanical College)</span> Software Engineering
          </div>
        </div>
        <div className='page-content__section'>
          <div className='page-content__title'>
            <div className='page-content__title-count'>
              <span className='text'>/</span>
              <span className='text-red'>03</span>
            </div>
            <div className='page-content__title-main'>LANGUAGES</div>
            <div className='page-content__title-line'></div>
          </div>

          <div className='page-content__main-text'>
            English - Upper-Intermediate <span className='half-opacity'>(B2)</span>, Ukrainian - Native
          </div>
        </div>

        <div className='page-content__section'>
          <div className='page-content__title'>
            <div className='page-content__title-count'>
              <span className='text'>/</span>
              <span className='text-red'>03</span>
            </div>
            <div className='page-content__title-main'>COURSES</div>
            <div className='page-content__title-line'></div>
          </div>

          <div className='page-content__main-text'>
            React - The Complete Guide (incl Hooks, React Router, Redux){' '}
            <span className='half-opacity'>by Maximilian Schwarzmüller - udemy.com (58 hours)</span>
            <div style={{ paddingTop: '10px' }} /> The Complete JavaScript Course 2022: From Zero to Expert!
            <span className='half-opacity'> by Jonas Schmedtmann - udemy.com (69 hours)</span>
          </div>
        </div>

        <div className='page-content__section'>
          <div className='page-content__main-subtitle'>Languages & Technologies</div>
        </div>
        <div className='stack'>
          {techStack.languages.map((stackItem) => (
            <StackItem key={stackItem.title} {...stackItem} />
          ))}
        </div>
        <div className='page-content__section'>
          <div className='page-content__main-subtitle'>Frameworks & Libraries</div>
        </div>
        <div className='stack'>
          {techStack.frameworks.map((stackItem) => (
            <StackItem key={stackItem.title} {...stackItem} />
          ))}
        </div>
        <div className='page-content__section'>
          <div className='page-content__main-subtitle'>Databases </div>
        </div>
        <div className='stack'>
          {techStack.databases.map((stackItem) => (
            <StackItem key={stackItem.title} {...stackItem} />
          ))}
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className='page-content__section'>
          <div className='page-content__main-subtitle'>Other Tools & Skills </div>
        </div>
        <div className='stack' style={{ paddingBottom: '100px' }}>
          {techStack.otherTools.map((stackItem) => (
            <StackItem key={stackItem.title} {...stackItem} />
          ))}
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
