import React, { useContext } from 'react';
import { KorpaContext } from '../App'; // Ažurirajte putanju prema potrebi

function Korpa() {
  const { korpa,ukloniIzKorpe } = useContext(KorpaContext);

  return (
    <div className="korpa">
      <h2>Vaša Korpa</h2>
      <ul>
        {korpa.map(stavka => (
          <li key={stavka.id}>
            <span>{stavka.naziv}</span>
            <span> - Količina: {stavka.kolicina}</span>
            <span> - Cena: {stavka.cena} RSD</span>
            <span> - Ukupno: {stavka.cena * stavka.kolicina} RSD</span>
            <button onClick={() => ukloniIzKorpe(stavka.id)}>Obriši</button>
          </li>
        ))}
      </ul>
      <div className="ukupno">
        Ukupno za plaćanje: {korpa.reduce((total, stavka) => total + stavka.cena * stavka.kolicina, 0)} RSD
      </div>
    </div>
  );
}

export default Korpa;
