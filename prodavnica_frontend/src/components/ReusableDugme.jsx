import React from 'react';

const ReusableDugme = ({ label, onClick }) => {
  return (
    <div className="login_forma_dugme">
      <button className="login_dugme" onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default ReusableDugme;
