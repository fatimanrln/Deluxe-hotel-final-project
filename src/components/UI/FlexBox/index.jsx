import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

import s from "./styles.module.scss";

const FlexBox = forwardRef(
  (
    {
      children,
      as: Element = "div",
      style,
      direction,
      gap,
      align,
      justify,
      column = false,
      height,
      width,
      mt,
      ml,
      mb,
      mr,
      m,
      mx,
      my,
      pt,
      pl,
      pb,
      pr,
      p,
      px,
      py,
      className,
      wrap = false,
      ...props
    },
    ref
  ) => (
    <Element
      className={classNames(s.flexBox, className)}
      style={{
        gap,
        height,
        width,
        flexDirection: column ? "column" : direction,
        alignItems: align,
        justifyContent: justify,
        marginLeft: ml || mx || m,
        marginTop: mt || my || m,
        marginBottom: mb || my || m,
        marginRight: mr || mx || m,
        paddingLeft: pl || px || p,
        paddingTop: pt || py || p,
        paddingBottom: pb || py || p,
        paddingRight: pr || px || p,
        flexWrap: wrap ? "wrap" : undefined,
        ...style,
      }}
      ref={ref}
      {...props}
    >
      {children}
    </Element>
  )
);

export const MFlexBox = motion(FlexBox);

export default FlexBox;
