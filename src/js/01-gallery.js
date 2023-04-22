import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';


const galleryEl = document.querySelector(".gallery");
(function () {
  const markup = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image js-target" src="${preview}"  alt="${description}"  />
   </a>
</li>`
    )
    .join("");
  galleryEl.insertAdjacentHTML("beforeend", markup);
})();

var lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: "250",
  captionsData: "alt",
});

document.body.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    instance.close();
  }
});

console.log(galleryItems);
