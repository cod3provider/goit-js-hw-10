import {Notify} from 'notiflix/build/notiflix-notify-aio';
import { refs } from './getRefs';

export function fetchCountries(name) {
  return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
  .then(
    response => {
      if (!response.ok) {
        refs.countryList.innerHTML = '';
        Notify.failure('Oops, there is no country with that name');
      }
      return response.json();
    })
  // .then(console.log);
}
