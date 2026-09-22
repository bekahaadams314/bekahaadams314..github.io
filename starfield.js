// Preloader logic: fades out once all assets finish loading
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  // 1.2s delay to give visitors a smooth look at the intro screen
  setTimeout(() => {
    preloader.classList.add('fade-out');
  }, 1200);
});

// Particle Starfield Canvas Animation
const canvas = document.getElementById('celestial-bg');
const ctx = canvas ? canvas.getContext('2d') : null;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let width, height, stars;

function makeStars() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;

  stars = Array.from({ length: 65 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 1.8 + 0.5,
    alpha: Math.random(),
    speed: Math.random() * 0.02 + 0.005,
    color: Math.random() > 0.3 ? '#FFF8DC' : '#E6CA65'
  }));
}

function drawStars() {
  ctx.clearRect(0, 0, width, height);

  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = star.color;
    ctx.globalAlpha = Math.min(1, Math.abs(star.alpha));
    ctx.shadowBlur = 8;
    ctx.shadowColor = star.color;
    ctx.fill();
  });
}

function animate() {
  stars.forEach(star => {
    star.alpha += star.speed;
    if (star.alpha > 1 || star.alpha < 0) star.speed = -star.speed;
  });
  drawStars();
  requestAnimationFrame(animate);
}

if (ctx) {
  makeStars();

  if (reduceMotion) {
    drawStars();            // still stars, no twinkle
  } else {
    animate();
  }

  // Re-spread the stars when the window size changes
  window.addEventListener('resize', () => {
    makeStars();
    if (reduceMotion) drawStars();
  });
}
