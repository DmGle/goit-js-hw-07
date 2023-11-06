import { galleryItems } from './gallery-items.js';
// Change code below this line
    
const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
gallery.addEventListener("click", handleClick);

function createMarkup(arr) {
    return arr.map(({preview, original, description}) => `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
            </a>
        </li>
    `)
    .join("")
}

function handleClick(event){
    event.preventDefault();
    if (event.target.classList.contains('gallery__image')) {
        const imageURL = event.target.getAttribute('src');
        const imageAlt = event.target.getAttribute('alt');

        const lightbox = basicLightbox.create(`
            <img src="${imageURL}" alt="${imageAlt}">
        `);
        lightbox.show();
    }
}

console.log(galleryItems);
