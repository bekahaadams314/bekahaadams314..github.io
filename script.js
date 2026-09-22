// Simple placeholder for interactive image click/lightbox feature
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery-item img');
    
    images.forEach(img => {
        img.addEventListener('click', () => {
            console.log(`Clicked on: ${img.alt}`);
            // You can expand this to open a full-screen modal lightbox view
        });
    });
});
