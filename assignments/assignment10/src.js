const advertisements = [
  "Wow very nice picture of mountain",
  "Cool picture of house",
  "Beautiful garden",
  "Snow covered sunset",
  "Golden sunset amazing",
];

const advertisementDiv = document.getElementById("advertisementText");

function rotateAdvertisement() {
  let index = 0;
  advertisementDiv.textContent = advertisements[index];

  setInterval(() => {
    index = (index + 1) % advertisements.length; 
    advertisementDiv.textContent = advertisements[index];
  }, 2000);
}

rotateAdvertisement();

const images = {
  "garden.jpg":
    "<a href='https://www.freepik.com/free-photo/amazing-shot-beautiful-butchart-gardens-brentwood-bay_20496783.htm#query=landscape&position=27&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4'>Image by wirestock</a> on Freepik",
  "golden.jpg":
    "<a href='https://www.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_11342065.htm#query=landscape&position=7&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4'>Image by wirestock</a> on Freepik",
  "mountain-lake.jpg":
    "<a href='https://www.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_40965130.htm#query=landscape&position=0&from_view=keyword&track=sph&uuid=8e520e53-3fb6-4e41-9da7-682c824a94f7'>Image by vecstock</a> on Freepik",
  "small-house.jpg":
    "<a href='https://www.freepik.com/free-photo/small-houses-green-field-with-dark-sky_7553929.htm#query=landscape&position=39&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4'>Image by wirestock</a> on Freepik",
  "snow.jpg":
    "<a href='https://www.freepik.com/free-photo/beautiful-scenery-lot-leafless-trees-snow-covered-land-during-sunset_10990489.htm#query=landscape&position=38&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4'>Image by wirestock</a> on Freepik",
};

const imagesDiv = document.querySelector(".images");

for (const [image, attribution] of Object.entries(images)) {
  const imgElement = document.createElement("img");
  imgElement.src = image;

  const attributionElement = document.createElement("p");
  attributionElement.innerHTML = attribution;

  imagesDiv.appendChild(imgElement);
  imagesDiv.appendChild(attributionElement);
}
