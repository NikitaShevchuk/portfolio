import linkedInIcon from '../../assets/img/icons/linkedInIcon_white.svg';
import github from '../../assets/img/icons/github_white.svg';

const Contacts = () => {
  return (
    <div className='footer-social-icons small-text'>
      <div className='footer-link'>
        <a
          href='https://www.linkedin.com/in/mykyta-shevchuk-404928251/'
          target='_blank'
          className='footer-social-icons__item linkedin'
          style={{ backgroundImage: `url(${linkedInIcon})` }}
        ></a>
        <a href='https://www.linkedin.com/in/mykyta-shevchuk-404928251/' className='text'>
          <div className='visible'>linkedin</div>
          <div className='block'>linkedin</div>
        </a>
      </div>
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
    </div>
  );
};

export default Contacts;
