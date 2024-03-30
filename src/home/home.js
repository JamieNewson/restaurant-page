import grill from "./grill.jpg";
import logo from "./smokehouseLogo.png";

export default function homepage() {
  const container = document.createElement("div");
  const title = document.createElement("h1");
  const desc = document.createElement("p");
  const imgContainer = document.createElement("div");
  const logoIcon = new Image();
  const grillImg = new Image();

  title.innerText = "The Smokehouse";
  desc.innerText = `Welcome to our renowned southern style American diner.
    The Smokehouse has been open since September 2018 and we have already established ourselves as the regions go-to family Smokehouse restaurant.
    
    We offer a fantastic range of home cooked and in-house smoked meals from burgers to freshly home smoked meat using our signature recipe rubs. This ensures that our succulent joints are packed full of flavour.
    We have even created our very own Smokehouse lager designed to compliment our varied menu.
    
    Our friendly and attentive serving team aim to ensure that your dining experience is second to none. We aim to accommodate all ages, tastes and do our very best to cater for any specialist dietary requirements.
    
    We have a wide variety of vegetarian, vegan & gluten-free options on our menu.`;
  logoIcon.src = logo;
  grillImg.src = grill;

  container.className = "home";
  logoIcon.className = "logo";
  imgContainer.className = "background-image";

  imgContainer.appendChild(grillImg);

  container.appendChild(logoIcon);
  container.appendChild(title);
  container.appendChild(imgContainer);
  container.appendChild(desc);

  return container;
}
