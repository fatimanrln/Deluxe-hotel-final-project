import classNames from "classnames";

import s from "./styles.module.scss";

const Divider = ({
  px,
  py,
  height = 1,
  width,
  type = "solid",
  color,
  className,
  style,
}) => {
  return (
    <hr
      className={classNames(s.divider, className)}
      style={{
        paddingBlock: py,
        paddingInline: px,
        borderBottom: `${height}px ${type} var(--${color})`,
        // height,
        width,
        ...style,
      }}
      role="none"
    />
  );
};

export default Divider;
