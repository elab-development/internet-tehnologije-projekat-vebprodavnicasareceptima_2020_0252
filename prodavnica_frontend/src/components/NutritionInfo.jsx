import React, { useState } from 'react';
import { getNutrients } from '../NutritionService';
import '../style/nutrition.css';

function NutritionInfo() {
  const [query, setQuery] = useState('');
  const [nutritionData, setNutritionData] = useState(null);

  const handleSearch = async () => {
    if (query) {
      const data = await getNutrients(query);
      setNutritionData(data);
    }
  };

  return (
    <div class="scroll-bg">
    <div className="nutrition_forma">
    <div class = "naslov">
      <h2>Nutritivne Informacije</h2>
      <p>Unesite namirnicu ili obrok i saznajte njene nutritivne vrednosti</p>
      </div>
      <input
      id='polje'
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Unesite naziv namirnice"
      />
      <br />
      <button class ="dugme_nutrition" onClick={handleSearch}>Pretraži</button>
      </div>
      {nutritionData && (
  <div className="nutrition_rezultati">
    <h3 className="rez_naslov">Rezultati za {nutritionData.foods[0].food_name}:</h3>
    <div className="nutrition_slika">
      <img src={nutritionData.foods[0].photo.thumb} alt={nutritionData.foods[0].food_name} />
    </div>
    <div className="nutrition_sadrzaj">
      <div className="nutrition_stavka">
        <h4>Kalorije</h4>
        <p>{nutritionData.foods[0].nf_calories} kcal</p>
      </div>
      <div className="nutrition_stavka">
        <h4>Ukupno Masti</h4>
        <p>{nutritionData.foods[0].nf_total_fat} g</p>
      </div>
      <div className="nutrition_stavka">
        <h4>Ukupno Ugljenih Hidrata</h4>
        <p>{nutritionData.foods[0].nf_total_carbohydrate} g</p>
      </div>
      <div className="nutrition_stavka">
        <h4>Proteini</h4>
        <p>{nutritionData.foods[0].nf_protein} g</p>
      </div>
    </div>
  </div>
)}
    </div>
  );
 
}

export default NutritionInfo;
