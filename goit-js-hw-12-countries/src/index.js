import './styles.css';
import refs from './js/refs';
import fetchCountries from './js/fetchCountries';
import updateCountry from './js/update-country';
import debounce from 'lodash.debounce';
import './css/styles.css';

refs.input.addEventListener(
  'input',
  debounce(event => {
    event.preventDefault();
    const form = event.target;
    const inputValue = form.value;
    refs.countryContainer.innerHTML = '';
    if (inputValue !== '') {
      return fetchCountries(inputValue).then(updateCountry);
    }
  }, 500),
);
