
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
    galeryList: document.querySelector(".gallery"),
}

const galeryMarkup = galleryItems.map(({description,original,preview}) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>` 
}).join('');

refs.galeryList.insertAdjacentHTML("afterbegin",galeryMarkup)

refs.galeryList.addEventListener("click", onGetUrl);

function onGetUrl(event) {
  event.preventDefault();
  if (event.target.tagName !== "IMG") return;
  const dataUrl = event.target.dataset.source;
  console.log(dataUrl);
}


