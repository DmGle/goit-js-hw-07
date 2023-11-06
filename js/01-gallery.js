import { galleryItems } from './gallery-items.js';
// Change code below this line
    
const gallery = document.querySelector('.gallery');
let lightboxInstance = null;

gallery.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
gallery.addEventListener("click", handleClick);

function createMarkup(arr) {
    return arr.map(({preview, original, description}) => `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
            </a>
        </li>
    `).join("");
}

function handleClick(event) {
    event.preventDefault();
    if (event.target.classList.contains('gallery__image')) {
        const imageURL = event.target.getAttribute('data-source');
        const imageAlt = event.target.getAttribute('alt');

        lightboxInstance = basicLightbox.create(`
            <img src="${imageURL}" alt="${imageAlt}">
        `);
        lightboxInstance.show();

        // Додавання обробника подій для натискання клавіші "Escape"
        document.addEventListener('keydown', handleKeyPress);
    }
}

function handleKeyPress(event) {
    if (event.key === 'Escape') {
        if (lightboxInstance) {
            lightboxInstance.close();
            lightboxInstance = null;
            // Видалення обробника подій після закриття лайтбокса
            document.removeEventListener('keydown', handleKeyPress);
        }
    }
}

console.log(galleryItems);
