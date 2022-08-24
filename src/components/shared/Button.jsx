const Button = ({ type, classname, text, action }) => {
  return (
    <>
      <button type={type} className={classname} onClick={action}>
        {text}
      </button>
    </>
  );
};

export default Button;
