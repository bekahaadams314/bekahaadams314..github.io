window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  
  // Set a minimum display time (e.g., 1.2s) so visitors on fast connections 
  // still get to see the sleek intro screen transition.
  setTimeout(() => {
    preloader.classList.add('fade-out');
  }, 1200);
});
