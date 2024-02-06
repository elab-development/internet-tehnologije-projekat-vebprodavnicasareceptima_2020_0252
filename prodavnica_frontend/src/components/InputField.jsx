import React from 'react';
import '../style/input.css';

const InputField = ({ label, id, type, placeholder, value, onChange }) => {
  return (
    <div >
      <label htmlFor={id}>{label}:</label>
      <br />
      <input className="input-field"
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
