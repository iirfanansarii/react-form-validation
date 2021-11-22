import React, { useState } from 'react';
import './forminput.css';

function FormInut(props) {
  const [focused, setFocused] = useState(false);
  const { id, label, errorMessages, handleChange, ...inputsProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="forminput">
      <label htmlFor={label}>{label}</label>
      <input
        type="text"
        {...inputsProps}
        onChange={handleChange}
        onBlur={handleFocus}
        focused={focused.toString()}
        onFocus={() =>
          inputsProps.name === 'confirmPassword' && setFocused(true)
        }
      />
      <span>{props.errorMessages}</span>
    </div>
  );
}

export default FormInut;

/* 
onFocus : works when you click on any item
onBlur: when go from one item to another
Note: since confirm password is last input field so we have set setFocused
*/
