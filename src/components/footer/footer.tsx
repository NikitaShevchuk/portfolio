import ellipse from '../../assets/img/icons/ellipse.svg';
import secondEllipse from '../../assets/img/icons/ellipse__second.svg';
import fb from '../../assets/img/icons/fbBlack.png';
import github from '../../assets/img/icons/github.svg';
import linkedInIcon from '../../assets/img/icons/linkedInIcon.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <img className='background-ellipse' src={ellipse} alt='' />
      <img className='background-ellipse__second' src={secondEllipse} alt='' />
      <div className='footer__block'>
        <div className='footer-bigText'>Contacts</div>
        <div className='small-text'>
          <div className='footer-link mail'>
            <a href='mailto:nikitashev1112web@gmail.com' className='text'>
              <div className='visible'>shevchuk.nikita.gh@gmail.com</div>
              <div className='block'>shevchuk.nikita.gh@gmail.com</div>
            </a>
          </div>
          <div className='footer-social-icons'>
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
            <div className='footer-link'>
              <a
                href='https://github.com/NikitaShevchuk'
                target='_blank'
                className='footer-social-icons__item linkedin'
                style={{ backgroundImage: `url(${github})` }}
              ></a>
              <a href='https://github.com/NikitaShevchuk' className='text'>
                <div className='visible'>github</div>
                <div className='block'>github</div>
              </a>
            </div>
            <div className='footer-link'>
              <a
                href='https://www.linkedin.com/'
                target='_blank'
                className='footer-social-icons__item linkedin'
                style={{
                  backgroundImage: `url(${linkedInIcon})`
                }}
              ></a>
              <a href='https://www.linkedin.com/' className='text'>
                <div className='visible'>linkedin</div>
                <div className='block'>linkedin</div>
              </a>
            </div>
            <div className='footer-link'>
              <a
                href='https://www.facebook.com/profile.php?id=100007489969348'
                target='_blank'
                className='footer-social-icons__item fb'
                style={{ backgroundImage: `url(${fb})` }}
              ></a>
              <a href='https://www.facebook.com/profile.php?id=100007489969348' className='text'>
                <div className='visible'>facebook</div>
                <div className='block'>facebook</div>
              </a>
            </div>
          </div>
        </div>
        <div className='small-text copyright'>
          <div className='text'>Developed by Mykyta Shevchuk</div>
          <div className='text'>©2022 All rights reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
