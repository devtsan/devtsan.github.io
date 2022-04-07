import {data, menuitems} from './config.js';
console.log(menuitems);
menuitems.forEach(menu => {
	document.querySelector('#menu').innerHTML += `<a href="${menu.link}" class="w3-bar-item w3-button">${menu.name}`;
})

