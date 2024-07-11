interface Props {
  image: string;
  title: string;
  exp: string;
}
const StackItem = ({ image, title, exp }: Props) => {
  return (
    <div className="stack__item">
      <div className="stack__item-icon">
        <img src={image} alt="" />
      </div>
      <div className="stack__item-text">
        <div className="stack__item-text__title">{title}</div>
        <div className="exp">Experience: {exp}</div>
      </div>
    </div>
  );
};

export default StackItem;
