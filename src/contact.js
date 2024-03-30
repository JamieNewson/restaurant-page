export default function contactUs() {
  const container = document.createElement("div");
  const title = document.createElement("h1");
  const text = document.createElement("p");

  title.innerText = "Contact Us";
  text.innerText = "Telephone: 01493 731877";

  container.appendChild(title);
  container.appendChild(text);

  container.className = "contact";

  return container;
}
