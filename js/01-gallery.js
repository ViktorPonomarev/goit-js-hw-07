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
  <a class="gallery__link" 
  href="large-image.jpg">
    <img class="gallery__image"
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


function onImgContainerClick(event) {
    event.preventDefault();

    const isGallerySwatchEl = event.target.classList.contains('gallery__image');
    
    if (!isGallerySwatchEl) {
       return;
        
    }
    /* 4. Открытие модального окна по клику на элементе галереи. 
     */
    const swatchUrlEl = event.target.dataset.source;
    /* 5. Замена значения атрибута src элемента <img> в модальном окне перед открытием.
     */
     
    const instance = basicLightbox.create(`<img class="modal__image" src="${swatchUrlEl}"/>`);
    instance.show();

    window.addEventListener('keydown', onEscKeyPress); //Включить слушателя по ESC

    /* 6. Закрытие модального она по "ESC"
 */
function onEscKeyPress(event) {
    const ESC_KEY_CODE = 'Escape';
     
    if (event.code === ESC_KEY_CODE) {
       instance.close();
      
        window.removeEventListener('keydown', onEscKeyPress); //Отключить слушателя по ESC
    }
}

}



console.log(galleryItems);

