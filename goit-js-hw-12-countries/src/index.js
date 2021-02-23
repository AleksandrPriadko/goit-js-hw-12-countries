import './styles.css';
import './js/fetchCountries';
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
    console.log(form);
    const inputValue = form.value;
    console.log(inputValue);

    refs.countryContainer.innerHTML = '';

    fetchCountries(inputValue).then(updateCountry);
  }, 500),
);
