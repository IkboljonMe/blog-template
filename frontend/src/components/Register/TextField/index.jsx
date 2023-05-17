import React, { useState } from "react";

const TextField = (props) => {
  const { onChange, value, type, placeholder, label } = props;

  return (
    <div>
      <input
        onChange={(e) => onChange(e.target.value)}
        required={true}
        type={type}
        placeholder={placeholder}
      />
      <label>{label}</label>
    </div>
  );
};

export default TextField;
