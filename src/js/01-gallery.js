import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const getEl = el => document.querySelector(el);

const galleryContainer = getEl('.gallery');

const galleryMarkup = galleryItems.map(({ original, description, preview }) => {
  return `<a class='gallery__item' href='${original}'>
              <img class='gallery__image' src='${preview}' alt='${description}'>
           </a>`;
}).join('');

galleryContainer.innerHTML = galleryMarkup;

function openHandler(event) {
  event.preventDefault();
  if (event.target !== event.currentTarget) {
    new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  }
}

galleryContainer.addEventListener('click', openHandler);
