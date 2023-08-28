const gridContainer = document.querySelector(".grid-container");

const createCard = (title, imgSrc, technologies = []) => {
  const card = document.createElement("div");
  card.className = "grid-item";

  const cardImage = document.createElement("img");
  cardImage.src = imgSrc;
  cardImage.style.objectFit = "contain"; // Add your image source
  card.appendChild(cardImage);

  const cardOverlay = document.createElement("div");
  cardOverlay.className = "grid-item-overlay";
  card.appendChild(cardOverlay);

  const cardText = document.createElement("div");
  cardText.className = "grid-item-text";
  cardText.innerHTML = `<h1>${title}</h1>`;

  const badgeColors = ["#0b6ffd", "#ffc310", "#258d60", "#dd3c4c"];
  technologies.forEach((element) => {
    const badge = document.createElement("h1");
    badge.textContent = element;
    badge.className = "badge";
    badge.style.backgroundColor = badgeColors[Math.floor(Math.random() * 5)];
    cardText.appendChild(badge);
  });

  // Change to your project name
  card.appendChild(cardText);

  return card;
};

const projects = [
  {
    title: "Natours",
    description: "Natours",
    images: ["./images/natours/1.png"],
    technologies: ["Html", "Css", "Sass"],
  },
  {
    title: "BookWorm",
    description: "Natours",
    images: ["./images/bookworm/1.png"],
    technologies: ["Html", "Css", "Javascript"],
  },
  {
    title: "usePopcorn",
    description: "Natours",
    images: ["./images/popcorn/1.png"],
    technologies: ["React js", "Styled Components"],
  },
  {
    title: "Dimi Store",
    description: "Natours",
    images: ["./images/dimistore/1.png"],
    technologies: ["Flutter", "Dart"],
  },
  {
    title: "Shop Ease",
    description: "Natours",
    images: ["./images/shopease/24.jpeg"],
    technologies: [
      "Flutter",
      "Dart",
      "Node js",
      "Express js",
      "Jwt",
      "Mongo Db",
      "Stripe",
      "Hive Db",
    ],
  },
  {
    title: "Noise Identification",
    description: "Natours",
    images: ["./images/noise_Identification/1.png"],
    technologies: [
      "Flutter",
      "Dart",
      "Python",
      "Flask",
      "Docker",
      "Sockets",
      "Tensorflow Model",
    ],
  },
  {
    title: "Auto Glow",
    description: "Natours",
    images: ["./images/autoglow/1.png"],
    technologies: [
      "Flutter",
      "Dart",
      "Node js",
      "Express js",
      "Mongo Db",
      "Express js",
      "Stripe",
    ],
  },
  {
    title: "Meals To Go",
    description: "Natours",
    images: ["./images/meals_to_go/1.png"],
    technologies: [
      "React Native",
      "Reanimated",
      "Google Places Api",
      "Firebase",
    ],
  },
  {
    title: "Food Foresight",
    description: "Natours",
    images: ["./images/foodforesight/1.png"],
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "Spoonacular Api",
      "Tensorflow",
    ],
  },
  {
    title: "Keeper",
    description: "Natours",
    images: ["./images/keeper/1.png"],
    technologies: ["React js", "css", "Node js", "Express js", "Jwt"],
  },
  {
    title: "Crop Sense",
    description: "Natours",
    images: ["./images/cropsense/1.png"],
    technologies: ["Flutter", "Dart", "Python", "Flask", "Machine Learning"],
  },
  {
    title: "Image Editor",
    description: "Natours",
    images: ["./images/imageeditor/1.png"],
    technologies: ["React Native", "Expo", "React Gl Shaders"],
  },
];
// Create 16 dummy cards
for (let i = 0; i < projects.length; i++) {
  const card = createCard(
    projects[i].title,
    projects[i].images,
    projects[i].technologies
  );
  gridContainer.appendChild(card);
}

document.querySelector(".grid-container").addEventListener("click", (e) => {
  if (e.target.closest(".grid-item")) {
    window.location.href = "/available_soon.html";
  }
});
