import './styles.css';
import './js/fetchCountries';
import refs from './js/refs';
import fetchCountries from './js/fetchCountries';
import updateCountry from './js/update-country';
import debounce from 'lodash.debounce';

refs.input.addEventListener(
  'input',
  debounce(event => {
    event.preventDefault();
    //const form = event.target;
    const inputValue = event.target.value;

    refs.countryContainer.innerHTML = '';
    //form.reset();
    fetchCountries(inputValue).then(updateCountry);
  }, 500),
);
