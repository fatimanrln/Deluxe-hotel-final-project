import React from "react";
import classNames from "classnames";

import s from "./styles.module.scss";

const Container = ({ children, className, p, py, px, color }) => {
  return (
    <div
      style={{
        width: "100%",
        background: color ? `var(--${color})` : undefined,
      }}
    >
      <div
        className={classNames(s.container, className)}
        style={{
          paddingLeft: px || p,
          paddingRight: px || p,
          paddingTop: py || p,
          paddingBottom: py || p,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
