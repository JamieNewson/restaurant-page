export default function contactUs() {
  const container = document.createElement("div");
  const title = document.createElement("h1");
  const addressTitle = document.createElement("h2");
  const address = document.createElement("p");
  const teleTitle = document.createElement("h2");
  const tele = document.createElement("p");
  const hoursTitle = document.createElement("h2");
  const hours = document.createElement("p");

  title.innerText = "Contact Us";
  addressTitle.innerText = "Address:";
  address.innerText = `The Smoke house
  Yarmouth Road
  Ormesby
  Norfolk, NR39 3QG`;
  teleTitle.innerText = "Telephone:";
  tele.innerText = "01493 731877";
  hoursTitle.innerText = "Opening Hours";
  hours.innerText = `Monday-Friday: 4pm ~ 9pm
  Saturday: 12pm ~ 9pm
  Sunday: 12pm ~ 8pm`;

  container.appendChild(title);
  container.appendChild(addressTitle);
  container.appendChild(address);
  container.appendChild(teleTitle);
  container.appendChild(tele);
  container.appendChild(hoursTitle);
  container.appendChild(hours);

  container.className = "contact";

  return container;
}
