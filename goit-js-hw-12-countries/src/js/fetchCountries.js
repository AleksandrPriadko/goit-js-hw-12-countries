function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  };

  return fetch(url, options)
    .then(res => res.json())
    .then(data => data)
    .catch(error => conaole.log(error));
}

export default fetchCountries;
