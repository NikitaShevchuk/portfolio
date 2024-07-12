import { TechStackItem } from "../../constants/techStack";

interface Props extends TechStackItem {}

const StackItem = ({ image, title, exp, style }: Props) => {
  return (
    <div className="stack__item">
      <div className="stack__item-icon">
        <img src={image} alt="" style={style} />
      </div>
      <div className="stack__item-text">
        <div className="stack__item-text__title">{title}</div>
        <div className="exp">Experience: {exp}</div>
      </div>
    </div>
  );
};

export default StackItem;
