import React, { forwardRef } from "react";
import clsx from "clsx";

const classes = {
  type: {
    h1: "lg:text-2xl text-xl",
    h2: "lg:text-xl text-lg",
    h3: "lg:text-lg text-base",
    h4: "lg:text-base text-sm",
    h5: "lg:text-base text-sm",
    p: "lg:text-sm text-xs",
    custom: "",
  },
};

const Typography = forwardRef(
  ({ children, type, className, style, ...props }, ref) => {
    let Text = `${type}`;

    if (Text === "custom") {
      Text = "h2";
    }

    return (
      <Text
        ref={ref}
        style={style}
        className={clsx(
          `
      ${classes.type[type]}
      ${className}
      `
        )}
        {...props}
      >
        {children}
      </Text>
    );
  }
);

export default Typography;
