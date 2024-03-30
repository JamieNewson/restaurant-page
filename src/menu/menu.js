import menuSrc from "./menu.png";

export default function menu() {
  const container = document.createElement("div");
  const title = document.createElement("h1");
  const menuImage = new Image();
  menuImage.src = menuSrc;

  title.innerText = "Our Menu";

  container.className = "menu";
  container.appendChild(title);
  container.appendChild(menuImage);

  return container;
}
