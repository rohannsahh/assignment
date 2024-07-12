const scrollContainer = document.querySelector('.scroll-container');

function scrollLeft() {
  scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight() {
  scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
}