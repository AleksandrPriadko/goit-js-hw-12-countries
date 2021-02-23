import { errorFetch } from '../js/error-message';

function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  return fetch(url)
    .then(res => res.json())
    .then(data => data)
    .catch(() => errorFetch());
}

export default fetchCountries;
