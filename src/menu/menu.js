import menuSrc from "./menu.png";

export default function menu() {
  const container = document.createElement("div");
  const title = document.createElement("h1");
  const subText = document.createElement("p");
  const menuImage = new Image();
  menuImage.src = menuSrc;

  title.innerText = "Our Menu";
  subText.innerText =
    "Meals are subject to availability on the day, please inform your server regarding any allergies.";

  container.className = "menu";
  container.appendChild(title);
  container.appendChild(menuImage);
  container.appendChild(subText);

  return container;
}
