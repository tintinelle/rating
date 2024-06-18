import style from "./styles.module.scss";

const Button = ({ buttonClass, handleClick, text, width }) => {
  return (
    <button
      style={{ width: `${width}` }}
      className={`${style["button"]} ${style[`${buttonClass}`]}`}
      onClick={() => handleClick()}
    >
      {text}
    </button>
  );
};

export default Button;
