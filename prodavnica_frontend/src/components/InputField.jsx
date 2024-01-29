import React from 'react';

const InputField = ({ label, id, type, placeholder, value, onChange }) => {
  return (
    <div className="input-field">
      <label htmlFor={id}>{label}:</label>
      <br />
      <input
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
