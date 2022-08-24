import { galleryItems } from './gallery-items.js';
/* 1. Создание и рендер разметки по массиву данных galleryItems
 и предоставленному шаблону элемента галереи.
 */

const imgContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
imgContainer.insertAdjacentHTML('beforeend', cardsMarkup);
imgContainer.addEventListener('click', onImgContainerClick);

function createGalleryCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
    })
        .join('');
}
 
/* 2. Реализация делегирования на div.gallery и получение url 
большого изображения.
 */
galleryItems.addEventListener('click', onImgContainerClick);

function onImgContainerClick(event) {
    event.preventDefault();

    const isGallerySwatchEl = event.target.classList.contains('gallery__image');
    
    if (!isGallerySwatchEl) {
        return;
    }
    
    const swatchUrlEl = event.target.dataset.source;
    instance = basicLightbox.create(`<img class="modal__image" src="${swatchUrlEl}"/>`);
    instance.show();

}


console.log(galleryItems);

