const params = new URLSearchParams(window.location.search);
const artcid = params.get('id');
import {data} from './config.js';
fetch(`${data}posts/${artcid}`)
.then(r => r.json())
.then(a => {
  //console.log(a)
  let ac = document.querySelector('#w');
  ac.innerHTML = `<h3 class="w3-padding">${a.title}</h3><small class="w3-padding">Published: ${a.date}</small></br><small class="w3-padding">Modified: ${a.modified}</small><div class="content">${a.content}</div>`
})
