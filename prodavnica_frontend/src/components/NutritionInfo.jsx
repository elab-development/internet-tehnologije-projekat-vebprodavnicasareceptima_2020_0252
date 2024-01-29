import React, { useState } from 'react';
import { getNutrients } from '../NutritionService';

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
    <div>
      <h2>Nutritivne Informacije</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Unesite naziv namirnice"
      />
      <button onClick={handleSearch}>Pretraži</button>
      {nutritionData && (
  <div>
    <h3>Rezultati za {nutritionData.foods[0].food_name}:</h3>
    <div className="nutrition-image">
      <img src={nutritionData.foods[0].photo.thumb} alt={nutritionData.foods[0].food_name} />
    </div>
    <div className="nutrition-facts">
      <div className="nutrition-fact">
        <h4>Kalorije</h4>
        <p>{nutritionData.foods[0].nf_calories} kcal</p>
      </div>
      <div className="nutrition-fact">
        <h4>Ukupno Masti</h4>
        <p>{nutritionData.foods[0].nf_total_fat} g</p>
      </div>
      <div className="nutrition-fact">
        <h4>Ukupno Ugljenih Hidrata</h4>
        <p>{nutritionData.foods[0].nf_total_carbohydrate} g</p>
      </div>
      <div className="nutrition-fact">
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
