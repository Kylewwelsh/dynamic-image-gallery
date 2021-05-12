'use strict';
// import for the object arrays to create gallery
import {images} from './imageArrays.js'; 

// selects the gallery in the html main tag
const galleryContainer = document.querySelector('.gallery');

// function to begin creating elements and adding to the html
images.forEach( function(image){

  const figure = document.createElement('figure');
  galleryContainer.appendChild(figure);

  const iframe = document.createElement('iframe');
  iframe.src = image.link;
  iframe.width = image.width;
  iframe.height = image.height;
  iframe.setAttribute('frameborder', `${image.frameBorder}`);
  iframe.setAttribute('scrolling', `${image.scrolling}`)
  iframe.setAttribute('allowtransparency', `${image.transparency}`)
  figure.appendChild(iframe);
});