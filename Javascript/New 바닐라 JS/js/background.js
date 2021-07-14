// 6.1 Background
const images = [
    "1.jpg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpg"
]
const chosenImage = images[Math.floor(Math.random()*images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`
// Javascript에서 html에 요소를 추가
document.body.appendChild(bgImage);
// appendchild: body 안에 마지막 위치에 argument 요소를 추가
// prependchild: body 안에 처음 위치에 argument 요소를 추가

// 6.2 Recap