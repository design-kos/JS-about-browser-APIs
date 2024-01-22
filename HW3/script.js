document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "6UPwI_KXk_LbBf65uNnAwN7rd7y1vKSTw8tFTqQ4M3s";
  
    const photo = document.querySelector(".gallery__img");
    const photographer = document.querySelector(".gallery__author");
    const likeButton = document.querySelector(".gallery__like-btn");
    const likeCount = document.querySelector(".gallery__like-counter");
  
    let likes = 0;
  
    function getRandomPhoto() {
        fetch(`https://api.unsplash.com/photos/random?client_id=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
            const imageUrl = data.urls.regular;
            const name = data.user.name;
    
            photo.src = imageUrl;
            photographer.textContent = `Photographer: ${name}`;
        })
        .catch((error) => console.error("Error fetching random photo:", error));
    }
  
    function updateLikes() {
        likeCount.textContent = `Likes: ${likes}`;
    }
  
    likeButton.addEventListener("click", function () {
        likes++;
        updateLikes();
    });
  
    getRandomPhoto();
});