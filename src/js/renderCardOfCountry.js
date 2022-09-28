import { refs } from './getRefs';

export function renderCard(data) {
  const markup = data.map(el => `
    <li>
      <h1 class='country-header'>
        <img class='country-flag' src='${el.flags.svg}'>
        ${el.name.official}
      </h1>
      <p class='country-main-text'><span class='country-span-text'>Capital:</span> ${el.capital}</p>
      <p class='country-main-text'><span class='country-span-text'>Population:</span> ${el.population}</p>
      <p class='country-main-text'><span class='country-span-text'>Languages:</span> ${(Object.values(el.languages))}</p>
    </li>
  `).join(' ');
  refs.countryList.innerHTML = markup;
}