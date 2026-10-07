// scripts.js
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function updateCarousel(index) {
    items.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel(currentIndex);
}

// 自动播放设置
setInterval(() => {
    nextSlide();
}, 3000); // 每3秒切换一次

// 初始化显示第一张图片
updateCarousel(currentIndex);