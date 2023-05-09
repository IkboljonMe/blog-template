import classes from "./styles.module.scss";

import React from "react";

const Button = (props) => {
  const { type, color, height, width, message } = props;
  if (type === "filled") {
    return (
      <button style={{ color, height, width }} className={classes.filled}>
        {message}
      </button>
    );
  }
  if (type === "outline") {
    return (
      <button style={{ color, height, width }} className={classes.outline}>
        {message}
      </button>
    );
  }
  return (
    <button style={{ color, height, width }} className={classes.default}>
      {message}
    </button>
  );
};

export default Button;
