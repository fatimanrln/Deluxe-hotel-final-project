import React from "react";
import classNames from "classnames";

import s from "./styles.module.scss";

const Grid = ({
  children,
  columns = 1,
  width,
  template,
  gap = { x: 20, y: 20 },
  className,
  style,
}) => {
  return (
    <div
      className={classNames(s.grid, className)}
      style={{
        width,
        gridTemplateColumns: template || `repeat(${columns} , 1fr)`,
        gap: typeof gap === "number" ? `${gap}px` : `${gap.y}px ${gap.x}px`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Grid;
