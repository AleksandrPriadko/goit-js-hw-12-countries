import refs from '../js/refs';
import articles from '../template/articles.hbs';
import countriesList from '../template/countriesList.hbs';
import {
  errorFetch,
  errorQuerySpecific,
  successQuery,
  successQueryList,
} from './error-message';

function updateMarkup(data) {
  if (data.length === 1) {
    MarkupOne(data);
    successQuery();
    return;
  }
  if (data.length > 2 && data.length <= 10) {
    MarkupList(data);
    successQueryList();
    return;
  }
  if (data.length > 10) {
    errorQuerySpecific();
    return;
  } else {
    errorFetch();
    return;
  }
}
function MarkupOne(data) {
  const markup = articles(data);
  refs.countryContainer.insertAdjacentHTML('beforeend', markup);
}
function MarkupList(data) {
  const markup = countriesList(data);
  refs.countryContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateMarkup;
