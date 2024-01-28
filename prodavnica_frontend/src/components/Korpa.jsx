import React, { useContext } from 'react';
import { KorpaContext } from '../App'; // Ažurirajte putanju prema potrebi
import '../style/korpa.css';


function Korpa() {
  const { korpa,ukloniIzKorpe,dodajUKorpu } = useContext(KorpaContext);

  return (
    <div class="scroll-bg">
    <div className="korpa">
        <div className="korpa-stavke">
            <h2>Vaša korpa</h2>
            {korpa.length > 0 ? (
                korpa.map(stavka => (
                    <div className="korpa-stavka" key={stavka.id}>
                        <img src={stavka.slika} alt={stavka.naziv} className="korpa-stavka-slika" />
                        <div className="korpa-stavka-info">
                            <div className="korpa-stavka-opis">
                                <h4>{stavka.naziv}</h4>
                                <p>{stavka.velicina_pakovanja}</p>
                            </div>
                            <div className="korpa-stavka-kontrole">
                                <button onClick={() => ukloniIzKorpe(stavka.id)}>-</button>
                                <span>{stavka.kolicina}</span>
                                <button onClick={() => dodajUKorpu(stavka.id, stavka.naziv, stavka.cena, stavka.velicina_pakovanja)}>+</button>
                            </div>
                            <div className="korpa-stavka-cena">
                                {stavka.cena * stavka.kolicina} RSD
                            </div>
                            <button className="korpa-stavka-ukloni" onClick={() => ukloniIzKorpe(stavka.id)}>Obriši</button>
                        </div>
                    </div>
                ))
            ) : (
                <p>Vaša korpa je prazna.</p>
            )}
        </div>
        <div className="korpa-ukupno">
            <h3>Ukupno za plaćanje:</h3>
            <p>{korpa.reduce((total, stavka) => total + stavka.cena * stavka.kolicina, 0)} RSD</p>
        </div>
    </div>
</div>
  );
}

export default Korpa;
