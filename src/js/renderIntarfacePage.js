import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { renderCountryList } from './renderCountryList';
import { renderCard } from './renderCardOfCountry';

export function renderInterface(data) {
  if (data.length > 1 && data.length < 10) {
    renderCountryList(data);
  }

  if (data.length === 1) {
    renderCard(data);
  }

  if (data.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
  }
}