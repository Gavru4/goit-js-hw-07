import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs  = {
galeryList: document.querySelector(".gallery")
}

const galeryMarcup = galleryItems.map(({ description, original, preview }) => {
    `<li><a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a></li>`
})