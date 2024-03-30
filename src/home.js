import grill from "./grill.jpg";

export default function homepage() {
  const container = document.createElement("div");
  const title = document.createElement("h1");
  const desc = document.createElement("p");
  const image = new Image();

  title.innerText = "The Smokehouse";
  desc.innerText =
    "Welcome to our renowned southern style American diner. The Smokehouse has been open since September 2018 and we have already established ourselves as the regions go-to family Smokehouse restaurant. We offer a fantastic range of home cooked and in-house smoked meals from burgers to freshly home smoked meat using our signature recipe rubs. This ensures that our succulent joints are packed full of flavour. We have even created our very own Smokehouse lager designed to compliment our varied menu. Our friendly and attentive serving team aim to ensure that your dining experience is second to none. We aim to accommodate all ages, tastes and do our very best to cater for any specialist dietary requirements. We have a wide variety of vegetarian, vegan & gluten-free options on our menu.";
  image.src = grill;

  container.className = "home";
  container.appendChild(title);
  container.appendChild(image);
  container.appendChild(desc);

  return container;
}
