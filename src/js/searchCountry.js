import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './getRefs';
import { fetchCountries } from './fetchCoutries';
import { checkInput } from './checkInput';
import { renderInterface } from './renderIntarfacePage';
import { DEBOUNCE_DELAY } from '../index';
const debounce = require('lodash.debounce');

refs.searchBox.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));

function onSearchCountry() {
  let name = refs.searchBox.value.trim();

  if (!checkInput(name)) {
    Notify.warning('Please enter a-z or A-Z');
    refs.countryList.innerHTML = '';
    return;
  }

  if (name === '') {
    refs.countryList.innerHTML = '';
    return;
  }

  if (name.length === 1) {
    Notify.info('Too many matches found. Please enter a more specific name.');
    refs.countryList.innerHTML = '';
    return;
  }
  fetchCountries(name).then(renderInterface);
}