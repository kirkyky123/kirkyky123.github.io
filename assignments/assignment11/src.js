class Tree {
  constructor(
    name,
    imagePath,
    type,
    growthRate,
    height,
    lifespan,
    habitat,
    description
  ) {
    this.name = name;
    this.imagePath = imagePath;
    this.type = type;
    this.growthRate = growthRate;
    this.height = height;
    this.lifespan = lifespan;
    this.habitat = habitat;
    this.description = description;
  }
}

const trees = [
  new Tree(
    "Eastern Redbud",
    "images/eastern_redbud.jpg",
    "Deciduous",
    "Fast Growth",
    "20 ft",
    "60 years",
    "Forest understory",
    "The Eastern Redbud is a beautiful, small- to medium-sized tree with a short trunk and spreading branches. It has a rounded canopy and is known for its stunning display of pinkish-purple flowers that bloom in the early spring before the leaves appear. The leaves are heart-shaped and turn yellow in the fall. It is native to eastern North America and is often found in wooded areas, gardens, and parks."
  ),
  new Tree(
    "Giant Sequoia",
    "images/giant_sequoia.jpg",
    "Evergreen",
    "Slow Growth",
    "180 ft",
    "1500 years",
    "Coniferous forests",
    "The Giant Sequoia, also known as the Sierra Redwood, is one of the largest and longest-living tree species in the world. It has a massive trunk and a broad, conical crown. The bark is thick, fibrous, and fire-resistant. The tree produces small cones and has needle-like leaves. It is native to the western slopes of the Sierra Nevada mountain range in California."
  ),
  new Tree(
    "European Beech",
    "images/european_beech.jpg",
    "Deciduous",
    "Moderate Growth",
    "100 ft",
    "250 years",
    "Forests",
    "The European Beech is a large, majestic tree with a broad, spreading canopy and a straight, tall trunk. It has smooth, gray bark and produces small, inconspicuous flowers. The leaves are simple, oval-shaped, and turn a rich, golden-brown color in the fall. It is native to Europe and is often found in forests, parks, and gardens."
  ),
  new Tree(
    "Bald Cypress",
    "images/bald_cypress.jpg",
    "Deciduous",
    "Fast Growth",
    "80 ft",
    "750 years",
    "Swamps",
    "The Bald Cypress is a unique, deciduous conifer that is well-adapted to wet environments. It has a straight trunk, a broad, pyramidal canopy, and small, feathery leaves that turn a coppery-red color in the fall. It is known for its 'knees,' which are woody projections that grow from the roots and help stabilize the tree in the water. It is native to the southeastern United States and is often found in swamps, wetlands, and riverbanks."
  ),
];

function maketreeElement(tree) {
  const column = document.createElement("div");
  column.className = "column";
  column.innerHTML = `
      <h2>${tree.name}</h2>
      <div class="image-container" onclick="showwInfo('${tree.name}')">
          <img src="${tree.imagePath}">
      </div>
  `;
  return column;
}

function showwInfo(treeName) {
  const tree = trees.find((t) => t.name === treeName);
  if (tree) {
    const modal = document.getElementById("modalDialog");
    modal.innerHTML = `
          <div class="insideModal">
              <span class="close" onclick="closeModal()">&times;</span>
              <h2>${tree.name}</h2>
              <p>Type: ${tree.type}</p>
              <p>Growth Rate: ${tree.growthRate}</p>
              <p>Height: ${tree.height}</p>
              <p>Habitat: ${tree.habitat}</p>
              <p>${tree.description}</p>
              <img src="${tree.imagePath}" height=150px width=150px>
          </div>
      `;
    modal.style.display = "block";
  }
}

function closeModal() {
  const modal = document.getElementById("modalDialog");
  modal.style.display = "none";
}

const treesInside = document.getElementById("trees");
trees.forEach((tree) => {
  treesInside.appendChild(maketreeElement(tree));
});
