interface Props {
  tipIsShown: boolean;
}

const Tip = ({ tipIsShown }: Props) => {
  return (
    <div className="tip">
      {tipIsShown && (
        <span className="opacity">Scroll down to see all page content</span>
      )}
    </div>
  );
};

export default Tip;
