class House {
  constructor(name, size, bedrooms, bathrooms, features, main_image, floor_plans) {
    this.name = name;
    this.size = size;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.features = features;
    this.main_image = main_image;
    this.floor_plans = floor_plans;
  }
}

const IMAGE_BASE_URL = "https://portiaportia.github.io/json/images/house-plans/";

async function getHouses() {
  try {
    const response = await fetch("https://portiaportia.github.io/json/house-plans.json");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

function createHouseElement(house) {
  const houseSection = document.createElement("div");
  houseSection.classList.add("middle");

  const middleTop = createMiddleTop(house);
  const middleTopContent = createMiddleTopContent(house);
  const allColumns = createAllColumns(house);

  houseSection.append(middleTop, middleTopContent, allColumns);

  return houseSection;
}

function createMiddleTop(house) {
  const middleTop = document.createElement("div");
  middleTop.classList.add("middle-top");

  const h3 = document.createElement("h3");
  h3.innerText = house.name;

  middleTop.append(h3);

  return middleTop;
}

function createMiddleTopContent(house) {
  const middleTopContent = document.createElement("div");
  middleTopContent.classList.add("middle-top-content");

  const img = document.createElement("img");
  img.src = `${IMAGE_BASE_URL}${house.main_image}`;
  img.alt = house.name;

  const middleTopContentText = createMiddleTopContentText(house);

  middleTopContent.append(img, middleTopContentText);

  return middleTopContent;
}

function createMiddleTopContentText(house) {
  const middleTopContentText = document.createElement("div");
  middleTopContentText.classList.add("middle-top-content-text");

  const sizeH4 = document.createElement("h4");
  sizeH4.innerText = `Size: ${house.size}`;

  const bedroomsH4 = document.createElement("h4");
  bedroomsH4.innerText = `Bedrooms: ${house.bedrooms}`;

  const bathroomsH4 = document.createElement("h4");
  bathroomsH4.innerText = `Bathrooms: ${house.bathrooms}`;

  const p = document.createElement("p");
  p.innerHTML = `*${house.features[0]}* ${house.features[1]}`;

  middleTopContentText.append(sizeH4, bedroomsH4, bathroomsH4, p);

  return middleTopContentText;
}

function createAllColumns(house) {
  const allColumns = document.createElement("div");
  allColumns.classList.add("all-columns");

  house.floor_plans.forEach((plan) => {
    const column = createFloorPlan(house, plan);
    allColumns.append(column);
  });

  return allColumns;
}

function createFloorPlan(house, plan) {
  const column = document.createElement("div");
  column.classList.add("column");

  const h3 = document.createElement("h3");
  h3.innerText = plan.name;

  const img = document.createElement("img");
  img.src = `${IMAGE_BASE_URL}${plan.image}`;
  img.alt = `${house.name} - ${plan.name} Floor Plan`;

  column.append(h3, img);

  return column;
}

async function showHouses() {
  const housesData = await getHouses();
  const houseContainer = document.getElementById("houseContainer");
  let currentHouseIndex = 0;

  function displayHouse() {
    houseContainer.innerHTML = "";
    const houseElement = createHouseElement(housesData[currentHouseIndex]);
    houseContainer.append(houseElement);
    currentHouseIndex = (currentHouseIndex + 1) % housesData.length;
  }

  displayHouse();
  setInterval(displayHouse, 5000);
}

window.onload = showHouses;