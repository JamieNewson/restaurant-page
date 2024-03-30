import home from "./home/home.js";
import menu from "./menu/menu.js";
import contact from "./contact/contact.js";
import "./styles.css";

const btns = document.querySelectorAll(".navBtn");
const content = document.getElementById("content");

content.appendChild(home());

btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    content.innerHTML = "";
    switch (event.target.id) {
      case "home":
        content.appendChild(home());
        break;
      case "menu":
        content.appendChild(menu());
        break;
      case "contact":
        content.appendChild(contact());
        break;
    }
  });
});
