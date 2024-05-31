import classNames from "classnames";
import { Link } from "react-router-dom";

import s from "./styles.module.scss";

const Text = ({
  ls,
  lh,
  as = "div",
  rows,
  size,
  style,
  color = "gray-500",
  hoverColor,
  weight,
  children,
  className,
  centered = false,
  uppercase = false,
  onClick,
  to,
}) => {
  const getHoverColor = () => ({
    ":hover": {
      color: `var(--${color})`,
    },
  });

  const AsElement = as === "link" ? Link : as;

  return (
    <AsElement
      className={classNames(
        s.text,
        {
          [s.clickable]: onClick,
          [s.link]: as === "link",
        },
        className
      )}
      style={{
        color: `var(--${color})`,
        fontSize: size,
        fontWeight: weight,
        lineHeight: lh,
        letterSpacing: ls,
        WebkitLineClamp: rows,
        textTransform: uppercase ? "uppercase" : undefined,
        textAlign: centered ? "center" : undefined,
        ...(hoverColor ? getHoverColor() : {}),
        ...style,
      }}
      onClick={onClick}
      to={to}
    >
      {children}
    </AsElement>
  );
};

export default Text;
