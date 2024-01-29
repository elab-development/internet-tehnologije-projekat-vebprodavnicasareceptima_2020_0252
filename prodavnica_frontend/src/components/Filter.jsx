import React from 'react';
import { FaSearch } from "react-icons/fa";
import '../style/filter.css';

function Filter({pretrazi}){
  return(  
  <div className="pretraga">
        <input type="text" id="kriterijum" placeholder="Pretrazi" 
          name="search" onChange={()=>pretrazi(document.getElementById('kriterijum').value)}/>
          <button type="submit" className='dugme_pretraga'  ><FaSearch /></button>
    </div>
  )
}

export default Filter;