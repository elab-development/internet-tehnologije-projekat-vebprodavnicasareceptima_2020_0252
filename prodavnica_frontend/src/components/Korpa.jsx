import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/korpa.css";

function Korpa({ korpa, ukloniIzKorpe, dodajUKorpu, user, promeniUkupno, funkcija }) {
  const navigate = useNavigate();
  const [novaKorpa, setNovaKorpa] = useState([]);

  useEffect(() => {
    setNovaKorpa(napraviNovuKorpu());
  }, []);

  const napraviNovuKorpu = () => {
    return korpa.map((stavka) => ({ ...stavka }));
  };

  useEffect(() => {
    setNovaKorpa(napraviNovuKorpu);
  }, [korpa]);

  const promeniCeneStavki = (novaKorpa) => {
    novaKorpa.forEach((stavka) => {
      
        stavka.cena = (stavka.cena * exchangeRates.RSDtoEUR).toFixed(2);
        console.log(stavka.cena);
        
    });
  };


  const handlePlacanje = () => {
    if (user === "neulogovan") {
      alert("Morate se ulogovati da biste izvršili plaćanje.");
    } else if (korpa.length == 0) {
      alert("Korpa je prazna.");
    } else {
      if (selectedCurrency === "RSD") {
        promeniUkupno(selectedCurrency, totalInSelectedCurrency);
        navigate("Placanje");
      } else {
        const ukupno = totalInSelectedCurrency * exchangeRates.EURtoRSD;
        promeniUkupno(selectedCurrency, ukupno, totalInSelectedCurrency);
        navigate("Placanje");
      }
    }
  };

  const [exchangeRates, setExchangeRates] = useState({
    EURtoRSD: null,
    RSDtoEUR: null,
  });
  const [selectedCurrency, setSelectedCurrency] = useState("RSD");
  const [totalInSelectedCurrency, setTotalInSelectedCurrency] = useState(0);

  useEffect(() => {
    const novaKorpa = napraviNovuKorpu();
    if (selectedCurrency === "EUR") {
      promeniCeneStavki(novaKorpa);
    }
    setNovaKorpa(novaKorpa);
  }, [korpa, selectedCurrency]);

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
        console.error(
          "Došlo je do greške pri dohvatanju tečajeva valuta:",
          error
        );
      }
    };

    fetchExchangeRates();
  }, []);

  useEffect(() => {
    if (korpa.length === 0){
      funkcija(selectedCurrency, exchangeRates.RSDtoEUR); 
      setTotalInSelectedCurrency(0);}
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
      const exchangeRate =
        selectedCurrency === "EUR"
          ? exchangeRates.EURtoRSD
          : exchangeRates.RSDtoEUR;
      const totalInSelectedCurrency = korpa.reduce(
        (total, stavka) =>
          total + stavka.cena * stavka.kolicina * exchangeRates.RSDtoEUR,
        0
      );
      setTotalInSelectedCurrency(totalInSelectedCurrency);
    }
    funkcija(selectedCurrency, exchangeRates.RSDtoEUR);
    console.log(selectedCurrency);
  }, [exchangeRates, korpa, selectedCurrency]);

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };
  return (
    <div className="korpa">
      <div className="korpa-stavke">
        <h2>Vaša korpa</h2>
        <hr />
        {novaKorpa.length > 0 ? (
          novaKorpa.map((stavka) => (
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
                  {stavka.cena * stavka.kolicina} {selectedCurrency}
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

        <select
          className="combic"
          value={selectedCurrency}
          onChange={handleCurrencyChange}
        >
          <option value="RSD">RSD</option>
          <option value="EUR">EUR</option>
        </select>
        <button className="dugme_placanje" onClick={handlePlacanje}>
          Izvrši plaćanje
        </button>
      </div>
    </div>
  );
}

export default Korpa;
