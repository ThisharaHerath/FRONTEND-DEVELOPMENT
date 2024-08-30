let currentIndex = 0;

function showImage(index) {
    const images = document.querySelectorAll('.gallery-item');
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function changeImage(direction) {
    const images = document.querySelectorAll('.gallery-item');
    currentIndex = (currentIndex + direction + images.length) % images.length;
    showImage(currentIndex);
}

// Initialize the gallery with the first image
showImage(currentIndex);
