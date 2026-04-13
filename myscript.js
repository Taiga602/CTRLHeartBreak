const images = document.querySelectorAll('.gallery-img');
const overlay = document.querySelector('#fullscreen-overlay');

images.forEach(img => {
  img.addEventListener('click', () => {
    overlay.style.backgroundImage = `url(${img.src})`;
    overlay.style.display = 'block';
  });
});
