import React, { forwardRef } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

const Button = forwardRef(
  (
    {
      children,
      type,
      className,
      disabled,
      variant,
      size,
      style,
      hasIconLeft,
      hasIconRight,
      ...props
    },
    ref
  ) => {
    const classes = {
      base: "inline-flex gap-1 items-center rounded-md ",
      size: {
        normal: "lg:px-3 lg:py-2 px-2 py-1 ",
      },
      disabled: {
        primary:
          "border border-transparent cursor-not-allowed text-gray-400 bg-gray-200",
      },
      variant: {
        primary:
          "bg-indigo-500 hover:bg-indigo-600 border border-transparent ring-transparent outline-none focus:border-indigo-500 text-white transition-colors duration-150 ease-in shadow-md",
      },
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={clsx(
          `
          ${classes.base}
          ${classes.size[size]}
          ${disabled ? "" : classes.variant[variant]}
          ${disabled && classes.disabled[variant]}
          ${className}
          `
        )}
        style={style}
        {...props}
      >
        {hasIconLeft} {children} {hasIconRight}
      </button>
    );
  }
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["submit", "button"]),
  variant: PropTypes.oneOf(["primary"]),
  size: PropTypes.oneOf(["normal"]),
  classes: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: "button",
  size: "medium",
  variant: "primary",
  disabled: false,
  className: "",
};

export default Button;
