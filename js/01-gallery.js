
import { galleryItems } from './gallery-items.js';
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

  const modal = basicLightbox.create(`
    <img src="${dataUrl}" width="800" height="600">`)
  modal.show()
}

document.addEventListener("keydown", modalClose);

function modalClose (event){
  if (event === "Escape")
    modal.close()
}

  // modal.close((e) => {
  //   if (e === "Escape") return
  // })
 

