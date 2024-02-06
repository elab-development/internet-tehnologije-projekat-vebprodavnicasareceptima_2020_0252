import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

import "../style/korpa.css";

function Korpa({ korpa, ukloniIzKorpe, dodajUKorpu, user }) {
  const handlePlacanje = () => {
    if (user === "neulogovan") {
      alert("Morate se ulogovati da biste izvršili plaćanje.");
    } else {
    }
  };

  const [exchangeRates, setExchangeRates] = useState({ EURtoRSD: null, RSDtoEUR: null });
  const [selectedCurrency, setSelectedCurrency] = useState("RSD");
  const [totalInSelectedCurrency, setTotalInSelectedCurrency] = useState(0);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get(
          "https://api.forexapi.eu/v2/convert?amount=1&from=EUR&to=RSD&precision=2",
          {
            headers: {
              "X-APIKEY": "1C7zgUXHVCKc4zUTsLc6YP",
            },
          }
        );
        setExchangeRates({
          EURtoRSD: response.data.results.RSD,
          RSDtoEUR: 1 / response.data.results.RSD, // Invertujemo kurs
        });
      } catch (error) {
        console.error("Došlo je do greške pri dohvatanju tečajeva valuta:", error);
      }
    };

    fetchExchangeRates();
  }, []);

  useEffect(() => {
    if (!exchangeRates || korpa.length === 0) return;

    // Ako je odabrana valuta RSD, prikaži ukupnu cijenu u dinarima bez množenja sa kursom
    if (selectedCurrency === "RSD") {
      const totalInRSD = korpa.reduce(
        (total, stavka) => total + stavka.cena * stavka.kolicina,
        0
      );
      setTotalInSelectedCurrency(totalInRSD);
    } else {
      // Inače, izračunaj ukupnu cijenu u odabranoj valuti množenjem sa kursom
      const exchangeRate = selectedCurrency === "EUR" ? exchangeRates.EURtoRSD : exchangeRates.RSDtoEUR;
      const totalInSelectedCurrency = korpa.reduce(
        (total, stavka) => total + stavka.cena * stavka.kolicina * exchangeRates.RSDtoEUR,
        0
      );
      setTotalInSelectedCurrency(totalInSelectedCurrency);
    }
  }, [exchangeRates, korpa, selectedCurrency]);

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };
  return (
    <div className="korpa">
      <div className="korpa-stavke">
        <h2>Vaša korpa</h2>
        <hr />
        {korpa.length > 0 ? (
          korpa.map((stavka) => (
            <div className="korpa-stavka" key={stavka.id}>
              <div className="korpa-stavka-info">
                <img
                  src={stavka.slika}
                  alt={stavka.naziv}
                  className="korpa-stavka-slika"
                />
                <div className="korpa-stavka-opis">
                  <h4>{stavka.naziv}</h4>
                  <p> Velicina pakovanja: {stavka.velicina}</p>
                </div>
                <div className="korpa-stavka-kontrole">
                  <button onClick={() => ukloniIzKorpe(stavka.id)}>-</button>
                  <span>{stavka.kolicina}</span>
                  <button
                    onClick={() =>
                      dodajUKorpu({
                        id: stavka.id,
                        naziv: stavka.naziv,
                        cena: stavka.cena,
                        velicina: stavka.velicina_pakovanja,
                        slika: stavka.slika,
                      })
                    }
                  >
                    +
                  </button>
                </div>
                <div className="korpa-stavka-cena">
                  {stavka.cena * stavka.kolicina} RSD
                </div>
                <button
                  className="korpa-stavka-ukloni"
                  onClick={() => ukloniIzKorpe(stavka.id)}
                >
                  Obriši
                </button>
              </div>
              <div>
                <hr id="linija" />
              </div>
            </div>
          ))
        ) : (
          <p>Vaša korpa je prazna.</p>
        )}
      </div>
      <div className="korpa-ukupno">
        <h3>Ukupno za plaćanje:</h3>
        <p>
          {totalInSelectedCurrency.toFixed(2)} {selectedCurrency}
        </p>

        <select className="combic" value={selectedCurrency} onChange={handleCurrencyChange}>
          <option value="RSD">RSD</option>
          <option value="EUR">EUR</option>
        </select>
        <button className="dugme_placanje"
            onClick={handlePlacanje}
            >Izvrši plaćanje
           
            </button>
      </div>
    </div>
  );
}

export default Korpa;
/*<div className="korpa-ukupno">
            <h3>Ukupno za plaćanje:</h3>
            <p>{korpa.reduce((total, stavka) => total + stavka.cena * stavka.kolicina, 0)} RSD</p>
            <button className="dugme_placanje"
            onClick={handlePlacanje}
            >Izvrši plaćanje
           
            </button>
        </div>*/
