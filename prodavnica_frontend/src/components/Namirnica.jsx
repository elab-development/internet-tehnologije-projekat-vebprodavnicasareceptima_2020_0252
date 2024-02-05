import React, { useContext } from 'react';
import '../style/namirnica.css';




function Namirnica({ namirnicaId, naziv, opis, slika, cena, velicina_pakovanja ,dodajUKorpu}) {
  
  
    return (
      <div className="namirnica">
        <div className="namirnica_naziv">
          <p>{naziv}</p>
        </div>
        <div className="namrinica_sadrzaj">


        {slika && <img src={slika} alt="slika namirnice" className="namirnica_slika" />}
        <p className="namirnica_opis">Opis: {opis}</p>
        
        <p className="namirnica_cena">Cena: {cena} RSD</p>

        <p className="namrinica_velicina_pakovanja">Veličina pakovanja: {velicina_pakovanja}</p>

        <button className="namirnica_dugme" onClick={() => dodajUKorpu({
          id: namirnicaId, naziv,cena,velicina: velicina_pakovanja,slika})}>
        Dodaj u korpu
        </button>
       
        </div>
      </div>
    );
}


export default Namirnica;