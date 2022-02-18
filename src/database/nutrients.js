import axios from 'axios';

// export default async function getNutrients() {
//    let nutrients = [];

//    await axios.get('http://localhost:8080/nutrients')
//       .then(response => {
//          for (const key in response.data) {
//             const nutrient = {
//                id: key,
//                name: response.data[key].name,
//                unit: response.data[key].unit_type,
//                calories: response.data[key].calories,
//                proteins: response.data[key].protein
//             };
//             nutrients.push(nutrient);
//          }
//       })
//       .catch(error => console.log(error));

//    return nutrients;
// } 

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
