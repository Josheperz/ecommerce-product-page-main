/*
*vanilla*

const mainGallery = document.querySelector('#main-gallery');
const containerZoomGallery = document.querySelector('#container-zoom-gallery');
const zoomGallery = document.createElement('div'); 
const iconCloseZoomGallery = document.querySelector('#icon-close'); 

mainGallery.addEventListener('click',insertarGalleryZoom);
iconCloseZoomGallery.addEventListener('click',offZoomGallery); 

zoomGallery.innerHTML = `<zoom-gallery></zoom-gallery>`;

function offZoomGallery() {
  zoomGallery.remove();
  iconCloseZoomGallery.classList.add('not-visible');
 
}

function insertarGalleryZoom() {
  containerZoomGallery.appendChild(zoomGallery);
  iconCloseZoomGallery.classList.remove('not-visible');
 
}; */

/* jquery */
$('#main-gallery').click(function(){
  $('#container-zoom-gallery').append('<zoom-gallery></zoom-gallery>');
 $('#icon-close').removeClass('not-visible');
});

$('#icon-close').click(function(){
  $('#container-zoom-gallery').empty();
  $('#icon-close').addClass('not-visible');
});





