import { NavLink } from "react-router-dom";

interface Props {
  className: string;
  link: string;
  title: string;
  textToCopy?: readonly string[];
  image: string;
  order: string;
  showButton: boolean;
  Body?: React.FC;
  subtitle?: string;
}

const Screen = ({
  className,
  link,
  title,
  textToCopy,
  image,
  order,
  showButton,
  Body,
  subtitle,
}: Props) => {
  const copyText = (text: string) => navigator.clipboard.writeText(text);
  return (
    <div className={className}>
      <div className="screen-content">
        <div className="screen__title __title">
          <NavLink to={link} className="screen__title-text link __title-text">
            {title}
          </NavLink>
          <div className="title-lines">
            <div className="title-lines__item"></div>
            <div className="title-lines__item"></div>
          </div>
          <div className="screen__title-subtitle __title-subtitle">
            {subtitle && subtitle}
            {Body && <Body />}
            {textToCopy &&
              textToCopy.map((textItem) => (
                <div
                  key={textItem}
                  onClick={() => copyText(textItem)}
                  className="mt hover-underline"
                >
                  {textItem}
                </div>
              ))}
          </div>
          {showButton && (
            <NavLink to={link} className="screen__button hide-circle">
              Details
            </NavLink>
          )}
        </div>
        <NavLink to={link} className="screen-image hide-circle">
          <img src={image} alt="" />
          <span className="blur"></span>
        </NavLink>
        <NavLink to={link} className="screen-order">
          {order}
        </NavLink>
      </div>
    </div>
  );
};

export default Screen;
