const currentImage = document.querySelector(".slider__img");
const previousButton = document.querySelector(".slider__arrow-previous");
const nextButton = document.querySelector(".slider__arrow-next");
const dotsWrapper = document.querySelector(".slider__dots-wrapper");

let images = [];

async function getRandomImages() {
    try {
        const key = "6UPwI_KXk_LbBf65uNnAwN7rd7y1vKSTw8tFTqQ4M3s";
        const response = await fetch(`https://api.unsplash.com/photos/random?count=5&client_id=${key}`);
        const data = await response.json();
        images = data.map((item) => item.urls.regular);
        currentImage.src = images[0];
        createDots();
    } catch (error) {
        console.log(error);
    }
}

getRandomImages();

let currentImageIndex = 0;

previousButton.addEventListener("click", function () {
    if (currentImageIndex > 0) {
        currentImageIndex--;
    } else {
        currentImageIndex = images.length - 1;
    }
    currentImage.src = images[currentImageIndex];
    updateDots();
});

nextButton.addEventListener("click", function () {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
    } else {
        currentImageIndex = 0;
    }
    currentImage.src = images[currentImageIndex];
    updateDots();
});

function createDots() {
    for (let i = 0; i < images.length; i++) {
            const dot = document.createElement("div");
            dot.classList.add("slider__dot");
            if (i === currentImageIndex) {
                dot.classList.add("active");
            }
            dot.addEventListener("click", function () {
            currentImageIndex = i;
            currentImage.src = images[currentImageIndex];
            updateDots();
        });
        dotsWrapper.appendChild(dot);
    }
}

function updateDots() {
    const dots = document.querySelectorAll(".slider__dot");
    dots.forEach(function (dot, index) {
        if (index === currentImageIndex) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}