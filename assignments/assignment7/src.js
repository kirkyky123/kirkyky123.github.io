const slider = document.getElementById("slider");
const rotatingImage = document.getElementById("rotating_image");

slider.addEventListener("input", () => {
  const rotationAngle = slider.value;
  rotatingImage.style.transform = `rotate(${rotationAngle}deg)`;
});

const changingImage = document.getElementById("changingImage");
let currentImage = 1;

function changeImage() {
  if (currentImage === 1) {
    changingImage.src = "images/image2.jpg";
    currentImage = 2;
  } else {
    changingImage.src = "images/image1.jpg";
    currentImage = 1;
  }
}

const starsColumn = document.getElementById("starsColumn");

starsColumn.addEventListener("click", () => {
  const starImage = document.createElement("img");
  starImage.src = "images/star.png";

  starsColumn.appendChild(starImage);
});
