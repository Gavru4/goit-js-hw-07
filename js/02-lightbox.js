import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs  = {
galeryList: document.querySelector(".gallery")
}

const galeryMarcup = galleryItems.map(({description, original, preview}) => {
  return `<li> 
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`}).join("")

refs.galeryList.insertAdjacentHTML("afterbegin", galeryMarcup);

let galleryImg = document.querySelector(".gallery__image")

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
      captionDelay: 250,
      
   });
  