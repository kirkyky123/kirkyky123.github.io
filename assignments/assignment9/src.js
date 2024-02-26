document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.querySelector('input[type="text"]');
  const image = document.getElementById("changingImage");

  const images = {
    b: "images/exercise1/read.jpg",
    c: "images/exercise1/clown.jpg",
    p: "images/exercise1/birthday.jpg",
    r: "images/exercise1/rain.jpg",
    s: "images/exercise1/shovel.jpg",
    w: "images/exercise1/work.jpg",
  };

  inputField.addEventListener("input", function (event) {
    const command = event.target.value.trim().toLowerCase().slice(-1);

    if (command in images) {
      image.src = images[command];
    }
  });

  const slider = document.getElementById("slider");
  const yogaImage = document.getElementById("yogaSliderImage");

  slider.addEventListener("input", function (event) {
    const sliderValue = parseInt(event.target.value, 10);

    const numberOfImages = 8;
    const segmentSize = 360 / numberOfImages;

    const imageNumber = Math.ceil(sliderValue / segmentSize) || 1;

    const imageName = `yoga${imageNumber}.jpg`;
    const imagePath = `images/exercise2/${imageName}`;

    yogaImage.src = imagePath;
  });

  const exercise1Header = document.getElementById("exercise1Header");
  const exercise2Header = document.getElementById("exercise2Header");
  const exercise1Div = document.getElementById("exercise1");
  const exercise2Div = document.getElementById("exercise2");

  function showExercise(exerciseNumber) {
    if (exerciseNumber === 1) {
      exercise1Div.style.display = "block";
      exercise2Div.style.display = "none";
    } else if (exerciseNumber === 2) {
      exercise1Div.style.display = "none";
      exercise2Div.style.display = "block";
    }
  }

  exercise1Header.addEventListener("click", function () {
    showExercise(1);
  });

  exercise2Header.addEventListener("click", function () {
    showExercise(2);
  });

  const dropdownToggle = document.getElementById("dropdownToggle");
  const dropdownContent = document.getElementById("dropdownContent");

  dropdownToggle.addEventListener("click", function () {
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  });

  document
    .getElementById("mobileExercise1")
    .addEventListener("click", function () {
      showExercise(1);
      dropdownContent.style.display = "none";
    });

  document
    .getElementById("mobileExercise2")
    .addEventListener("click", function () {
      showExercise(2);
      dropdownContent.style.display = "none";
    });
});
