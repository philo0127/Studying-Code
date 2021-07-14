const images = [
    "bible.jpg", "Cat.jpg", "Coffee.jpg", "Gravity.png", "Jazz.jpg","translate.png"
]
const chosenImage = images[Math.floor(Math.random()*images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`
document.body.appendChild(bgImage);
const imageElement = document.querySelector("img");
imageElement.style.backgroundSize = "length 100px 100px";