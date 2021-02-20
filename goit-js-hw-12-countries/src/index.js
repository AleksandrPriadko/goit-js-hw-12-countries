import './styles.css';
import './js/fetchCountries';
import countryTpl from './template/articles.hbs';

const refs = {
  searchCountry: document.querySelector('.js-search-form'),
  countryContainer: document.querySelector('.js-country'),
};

refs.searchCountry.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  console.log(form);
  const inputValue = form.elements.query.value;
  console.log(inputValue);
  const url = `https://restcountries.eu/rest/v2/name/${inputValue}`;

  fetch(url, options)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const murkup = countryTpl(data);
      refs.countryContainer.insertAdjacentHTML('beforeend', murkup);
    })
    .catch(error => conaole.log(error));

  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  };
});
