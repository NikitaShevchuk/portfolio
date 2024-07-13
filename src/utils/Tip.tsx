interface Props {
  tipIsShown: boolean;
}

const Tip = ({ tipIsShown }: Props) => {
  if (!tipIsShown) {
    return false;
  }
  return (
    <div className='tip'>
      <span className='opacity'>Scroll down to see all page content</span>
    </div>
  );
};

export default Tip;
