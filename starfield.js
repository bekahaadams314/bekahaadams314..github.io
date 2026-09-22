// Preloader logic: fades out once all assets finish loading
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  
  // 1.2s delay to give visitors a smooth look at the intro screen
  setTimeout(() => {
    preloader.classList.add('fade-out');
  }, 1200);
});

// Particle Starfield Canvas Animation
const canvas = document.getElementById('celestial-bg');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const stars = Array.from({ length: 65 }, () => ({
  x: Math.random() * width,
  y: Math.random() * height,
  radius: Math.random() * 1.8 + 0.5,
  alpha: Math.random(),
  speed: Math.random() * 0.02 + 0.005,
  color: Math.random() > 0.3 ? '#FFF8DC' : '#E6CA65'
}));

function animate() {
  ctx.clearRect(0, 0, width, height);
  
  stars.forEach(star => {
    star.alpha += star.speed;
    if (star.alpha > 1 || star.alpha < 0) star.speed = -star.speed;

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = star.color;
    ctx.globalAlpha = Math.abs(star.alpha);
    ctx.shadowBlur = 8;
    ctx.shadowColor = star.color;
    ctx.fill();
  });
  
  requestAnimationFrame(animate);
}

animate();

// Handle responsive window resizing
window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});
