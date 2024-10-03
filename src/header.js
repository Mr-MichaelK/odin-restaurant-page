// header.js
import ChicksLogoSRC from "./images/Chicks-Restaurant.jpeg";
import main from "./index";
import menu from "./menu.js";
import contact from "./contact.js";
import home from "./home.js";

const ChicksLogo     = document.createElement("img");
ChicksLogo.src       = ChicksLogoSRC;
ChicksLogo.className = "chickslogo"

const textBox = document.createElement("p");
textBox.className = "textBox";
textBox.textContent = "I'm Only Into";

const box = document.createElement("div");
box.className = "headerBox";
box.appendChild(textBox);
box.appendChild(ChicksLogo);

const header = document.createElement("header");
header.appendChild(box);

const nav = document.createElement("nav");

const homeBut    = document.createElement("button");
const menuBut    = document.createElement("button");
const contactBut = document.createElement("button");

homeBut.textContent    = "Home";
menuBut.textContent    = "Menu";
contactBut.textContent = "Contact";

// TODO: add event listeners
homeBut.addEventListener("click", () => {
    main.removeChild(main.firstChild);
    main.appendChild(home);
});

menuBut.addEventListener("click", () => {
    main.removeChild(main.firstChild);
    main.appendChild(menu);
})

contactBut.addEventListener("click", () => {
    main.removeChild(main.firstChild);
    main.appendChild(contact);
})

nav.appendChild(homeBut);
nav.appendChild(menuBut);
nav.appendChild(contactBut);

header.appendChild(nav);

export default header;