class House{
  constructor(
    name,
    size,
    bedrooms,
    bathrooms,
    features,
    main_image,
    floor_plans,
  ){
    this.name = name;
    this.size = size;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.features = features;
    this.main_image = main_image;
    this.floor_plans = floor_plans;
  }
}

const getHouses = async () => {
  const url = "https://portiaportia.github.io/json/house-plans.json"

  try{
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const showHouses = async () => {
  let housesData = await getHouses();
  const houses = housesData.map(
    house =>
      new House(
        house.name,
        house.size,
        house.bedrooms,
        house.bathrooms,
        house.features,
        house.main_image,
        house.floor_plans
      )
  );
  console.log(houses[0].features);
};

window.onload = () => showHouses();