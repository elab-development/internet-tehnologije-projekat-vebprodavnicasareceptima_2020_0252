import React, { useContext } from 'react';
import '../style/namirnica.css';
import { KorpaContext } from '../App';


function Namirnica({ namirnicaId, naziv, opis, slika, cena, velicina_pakovanja , kategorijaId}) {
  const { dodajUKorpu } = useContext(KorpaContext);

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


        <button className="namirnica_dugme" onClick={() => dodajUKorpu(namirnicaId, naziv, cena, velicina_pakovanja,slika)}>Dodaj u korpu</button>
        </div>
      </div>
    );
}


export default Namirnica;