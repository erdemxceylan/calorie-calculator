import axios from 'axios';

let nutrients = [];

axios.get('http://localhost:8080/nutrients')
   .then(response => {
      for (const key in response.data) {
         const nutrient = {
            id: key,
            name: response.data[key].name,
            unit: response.data[key].unit_type,
            calories: response.data[key].calories,
            proteins: response.data[key].protein
         };
         nutrients.push(nutrient);
      }
   })
   .catch(error => console.log(error));

export default nutrients;
