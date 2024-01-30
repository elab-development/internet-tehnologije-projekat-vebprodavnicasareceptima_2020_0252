import axios from 'axios';

const API_URL = 'https://trackapi.nutritionix.com/v2/natural/nutrients';
const APP_ID = 'f1804fdc'; // Vaš Application ID
const API_KEY = '60562ac6550272c60c63e065fdeaab97'; 

export const getNutrients = async (query) => {
  try {
    const response = await axios.post(API_URL, {
      query: query,
    }, {
      headers: {
        'x-app-id': APP_ID,
        'x-app-key': API_KEY,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
