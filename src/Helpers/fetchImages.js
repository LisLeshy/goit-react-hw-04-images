// import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// const KEY = '30103705-be42ac45167c9dd0b6d899882';
// export const fetchImages = async (querty, page) => {
//   const { data } = await axios.get(
//     '?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12'
//   );
//   return data;
// };
import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '30103705-be42ac45167c9dd0b6d899882';

export const fetchImages = async (query, page) => {
  const { data } = await axios.get(
    `?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
console.log(fetchImages);
