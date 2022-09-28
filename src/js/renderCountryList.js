import { refs } from './getRefs';

export function renderCountryList(response) {
  const markup = response.map(el => `
  <li class='country-main-text'>
    <img class='country-flag' src='${el.flags.svg}'>
    ${el.name.official}
  </li>
`).join(' ');
  refs.countryList.innerHTML = markup;
}