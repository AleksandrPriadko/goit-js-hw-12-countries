import countryTpl from '../template/articles.hbs';
import refs from '../js/refs';

function updateCountry(data) {
  const murkup = countryTpl(data);
  refs.countryContainer.insertAdjacentHTML('beforeend', murkup);
}
export default updateCountry;
