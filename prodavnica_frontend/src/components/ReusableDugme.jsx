import React from 'react';
import '../style/dugme.css';

const ReusableDugme = ({ label, onClick }) => {
  return (
    <div >
      <button className='dugme' onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default ReusableDugme;
