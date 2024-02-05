
export const recepti = () => {
  return fetch('http://localhost:8000/api/recept')
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error fetching recepti:', error);
      throw error;
    });
};

export const namirnice = () => {
  return fetch('http://localhost:8000/api/namirnice')
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error fetching namirnice:', error);
      throw error;
    });
};
